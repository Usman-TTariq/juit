import dns from "node:dns/promises";
import net from "node:net";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const MAX = {
  name: 200,
  email: 320,
  phone: 64,
  message: 8000,
} as const;

function isNonEmptyString(v: unknown, max: number): v is string {
  return typeof v === "string" && v.trim().length > 0 && v.length <= max;
}

function basicEmailCheck(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function smtpFailureSummary(err: unknown): string {
  if (err instanceof Error) {
    const any = err as Error & {
      response?: string;
      responseCode?: number;
      code?: string;
    };
    const bits: string[] = [];
    if (any.message) bits.push(any.message);
    if (typeof any.response === "string" && any.response.trim()) {
      bits.push(any.response.trim().split("\n")[0]!.slice(0, 200));
    }
    if (typeof any.responseCode === "number") bits.push(`code ${any.responseCode}`);
    if (typeof any.code === "string") bits.push(any.code);
    return bits.join(" — ").slice(0, 600);
  }
  return String(err);
}

/** Safe, non-technical message for the client (no IPs / stack). */
function publicSmtpError(err: unknown): string {
  const any = err as { code?: string; message?: string };
  const msg = String(any.message ?? "");
  if (any.code === "EAUTH" || /535|Invalid login|authentication failed/i.test(msg)) {
    return "Mail login failed. Check SMTP_USER and SMTP_PASS (e.g. Gmail app password).";
  }
  if (any.code === "ETIMEDOUT" || /ETIMEDOUT/i.test(msg)) {
    return "Could not reach the mail server in time. Your network may block SMTP — try another Wi‑Fi, turn VPN off, or use port 465 with SMTP_SECURE=true.";
  }
  if (any.code === "ECONNECTION" || /ECONNREFUSED|ENOTFOUND/i.test(msg)) {
    return "Could not open a connection to the mail server. Check SMTP_HOST and SMTP_PORT.";
  }
  if (/ENETUNREACH/i.test(msg)) {
    return "Could not reach the mail server on the current network path.";
  }
  return "Could not send your message. Please try again later.";
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid payload." }, { status: 400 });
  }

  const { name, email, phone, message } = body as Record<string, unknown>;

  if (!isNonEmptyString(name, MAX.name)) {
    return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
  }
  if (!isNonEmptyString(email, MAX.email) || !basicEmailCheck(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }
  if (!isNonEmptyString(phone, MAX.phone)) {
    return NextResponse.json(
      { error: "Please enter your phone number." },
      { status: 400 },
    );
  }
  if (!isNonEmptyString(message, MAX.message)) {
    return NextResponse.json({ error: "Please enter a message." }, { status: 400 });
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || "587");
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    return NextResponse.json(
      { error: "Email is not configured on the server. Try again later." },
      { status: 503 },
    );
  }

  const to =
    process.env.CONTACT_TO?.trim() ||
    process.env.CONTACT_EMAIL?.trim() ||
    "hr@juitechnologies.com";
  const from =
    process.env.MAIL_FROM?.trim() || `"Juit website" <${user}>`;

  const secure = process.env.SMTP_SECURE === "true";

  let connectHost = host;
  let servername: string | undefined;
  const preferIpv4 = process.env.SMTP_IPV4_ONLY !== "false";
  if (preferIpv4 && !net.isIP(host)) {
    try {
      const v4 = await dns.resolve4(host);
      const first = v4[0];
      if (first) {
        connectHost = first;
        servername = host;
      }
    } catch (e) {
      console.warn("[contact] resolve4 failed, using hostname for SMTP", e);
    }
  }

  const connectionTimeout = Number(
    process.env.SMTP_CONNECTION_MS || "45000",
  );

  const transporter = nodemailer.createTransport({
    host: connectHost,
    port,
    secure,
    auth: { user, pass },
    ...(servername ? { servername } : {}),
    connectionTimeout,
    ...(port === 587 && !secure ? { requireTLS: true } : {}),
    // Old projects often set rejectUnauthorized: false for dev/self-signed certs only.
    // Does NOT fix ETIMEDOUT (firewall). Use only when you trust the network + server.
    ...(process.env.SMTP_TLS_INSECURE === "true"
      ? { tls: { rejectUnauthorized: false } }
      : {}),
  });

  if (process.env.SMTP_VERIFY === "true") {
    try {
      await transporter.verify();
    } catch (verifyErr) {
      const details = smtpFailureSummary(verifyErr);
      console.error("[contact] transporter.verify failed:", details);
      return NextResponse.json(
        {
          error: publicSmtpError(verifyErr),
          ...(process.env.NODE_ENV === "development" ? { details } : {}),
        },
        { status: 502 },
      );
    }
  }

  const safeName = name.trim().replace(/[\r\n]/g, " ").slice(0, 120);
  const text = [
    `Name: ${name.trim()}`,
    `Email: ${email.trim()}`,
    `Phone: ${phone.trim()}`,
    "",
    "Message:",
    message.trim(),
  ].join("\n");

  try {
    await transporter.sendMail({
      from,
      to,
      replyTo: email.trim(),
      subject: `Talk to us — ${safeName}`,
      text,
    });
  } catch (err) {
    let details = smtpFailureSummary(err);
    if (
      process.env.NODE_ENV === "development" &&
      /ETIMEDOUT|ENETUNREACH|ECONNREFUSED/i.test(details)
    ) {
      details +=
        " — Often: firewall/VPN/ISP blocks outbound SMTP. Try another network, VPN off, or SMTP_PORT=465 with SMTP_SECURE=true.";
    }
    console.error("[contact] sendMail failed:", details);
    const payload: { error: string; details?: string } = {
      error: publicSmtpError(err),
    };
    if (process.env.NODE_ENV === "development") {
      payload.details = details;
    }
    return NextResponse.json(payload, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
