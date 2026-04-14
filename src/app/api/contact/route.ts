import emailjs, { EmailJSResponseStatus } from "@emailjs/nodejs";
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

function emailJsFailureDetails(err: unknown): string {
  if (err instanceof EmailJSResponseStatus) {
    return `${err.status}: ${err.text}`.slice(0, 800);
  }
  if (err instanceof Error) return err.message.slice(0, 800);
  return String(err).slice(0, 800);
}

function publicEmailJsError(err: unknown): string {
  if (err instanceof EmailJSResponseStatus) {
    if (err.status === 401 || err.status === 403) {
      return "Email service rejected the request. Check EmailJS keys in server configuration.";
    }
    if (err.status === 400) {
      return "Invalid request to email service. Check that the EmailJS template uses the same field names as the form (name, email, phone, message).";
    }
    if (err.status === 429) {
      return "Too many requests. Please try again in a moment.";
    }
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

  const serviceId = process.env.EMAILJS_SERVICE_ID?.trim();
  const templateId = process.env.EMAILJS_TEMPLATE_ID?.trim();
  const publicKey = process.env.EMAILJS_PUBLIC_KEY?.trim();
  const privateKey = process.env.EMAILJS_PRIVATE_KEY?.trim();

  if (!serviceId || !templateId || !publicKey) {
    return NextResponse.json(
      {
        error:
          "Email is not configured on the server. Set EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, and EMAILJS_PUBLIC_KEY.",
      },
      { status: 503 },
    );
  }

  const safeName = name.trim().replace(/[\r\n]/g, " ").slice(0, 120);

  /** Must match variable names in your EmailJS template (e.g. {{name}}, {{email}}). */
  const templateParams: Record<string, string> = {
    name: name.trim(),
    email: email.trim(),
    phone: phone.trim(),
    message: message.trim(),
    subject: `Talk to us — ${safeName}`,
  };

  const options: { publicKey: string; privateKey?: string } = { publicKey };
  if (privateKey) options.privateKey = privateKey;

  try {
    await emailjs.send(serviceId, templateId, templateParams, options);
  } catch (err) {
    const details = emailJsFailureDetails(err);
    console.error("[contact] EmailJS send failed:", details);
    const payload: { error: string; details?: string } = {
      error: publicEmailJsError(err),
    };
    if (process.env.NODE_ENV === "development") {
      payload.details = details;
    }
    return NextResponse.json(payload, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
