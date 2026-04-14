"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const BRAND_RED = "#af101a";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function TalkToUsModal() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const open = useCallback(() => {
    setStatus("idle");
    setErrorMessage("");
    dialogRef.current?.showModal();
  }, []);

  const close = useCallback(() => {
    dialogRef.current?.close();
  }, []);

  useEffect(() => {
    const el = dialogRef.current;
    if (!el) return;
    const onClose = () => {
      setStatus("idle");
      setErrorMessage("");
      formRef.current?.reset();
    };
    el.addEventListener("close", onClose);
    return () => el.removeEventListener("close", onClose);
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      message: String(fd.get("message") ?? ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json().catch(() => ({}))) as {
        error?: string;
        details?: string;
      };

      if (!res.ok) {
        setStatus("error");
        const base = data.error || "Something went wrong. Please try again.";
        const extra = data.details ? ` (${data.details})` : "";
        setErrorMessage(base + extra);
        return;
      }

      setStatus("success");
      formRef.current?.reset();
    } catch {
      setStatus("error");
      setErrorMessage(
        "Network error. Please check your connection and try again.",
      );
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={open}
        className="inline-flex shrink-0 rounded-none px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-white transition-opacity hover:opacity-90 lg:px-6 lg:text-sm"
        style={{ backgroundColor: BRAND_RED }}
      >
        Talk to us
      </button>

      <dialog
        ref={dialogRef}
        aria-labelledby="talk-to-us-title"
        className="fixed left-1/2 top-1/2 z-[100] max-h-[min(90vh,40rem)] w-[min(calc(100%-2rem),26rem)] max-w-[26rem] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl border border-neutral-200 bg-white p-0 text-[#1b1b1b] shadow-2xl"
      >
        <div className="flex max-h-[min(90vh,40rem)] flex-col">
          <div className="flex shrink-0 items-start justify-between gap-3 border-b border-neutral-200 bg-[#fafafa] px-5 py-4 sm:px-6">
            <div className="min-w-0">
              <h2
                id="talk-to-us-title"
                className="text-lg font-extrabold tracking-tight text-neutral-900 sm:text-xl"
              >
                Talk to us
              </h2>
              <p className="mt-1 text-sm text-neutral-600">
                Share your details and we&apos;ll get back to you shortly.
              </p>
            </div>
            <button
              type="button"
              onClick={close}
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
              aria-label="Close"
            >
              <span className="text-lg leading-none" aria-hidden>
                ×
              </span>
            </button>
          </div>

          {status === "success" ? (
            <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 py-12 text-center">
              <p className="text-base font-semibold text-neutral-900">
                Thanks — we received your message.
              </p>
              <p className="text-sm text-neutral-600">
                Our team will reach out soon.
              </p>
              <button
                type="button"
                onClick={close}
                className="mt-2 rounded-lg px-4 py-2.5 text-sm font-bold text-white"
                style={{ backgroundColor: BRAND_RED }}
              >
                Close
              </button>
            </div>
          ) : (
            <form
              ref={formRef}
              onSubmit={onSubmit}
              className="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto px-5 py-5 sm:px-6 sm:py-6"
            >
              <label className="block text-sm font-semibold text-neutral-900">
                Name <span className="text-red-600">*</span>
                <input
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Your name"
                  className="mt-1.5 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2.5 text-sm text-neutral-900 outline-none transition-[box-shadow,border-color] placeholder:text-neutral-400 focus:border-[#af101a] focus:ring-2 focus:ring-[#af101a]/20"
                />
              </label>

              <label className="block text-sm font-semibold text-neutral-900">
                Email address <span className="text-red-600">*</span>
                <input
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@company.com"
                  className="mt-1.5 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2.5 text-sm text-neutral-900 outline-none placeholder:text-neutral-400 focus:border-[#af101a] focus:ring-2 focus:ring-[#af101a]/20"
                />
              </label>

              <label className="block text-sm font-semibold text-neutral-900">
                Phone number <span className="text-red-600">*</span>
                <input
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="+92 300 1234567"
                  className="mt-1.5 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2.5 text-sm text-neutral-900 outline-none placeholder:text-neutral-400 focus:border-[#af101a] focus:ring-2 focus:ring-[#af101a]/20"
                />
              </label>

              <label className="block text-sm font-semibold text-neutral-900">
                Message <span className="text-red-600">*</span>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell us about your project or how we can help…"
                  className="mt-1.5 w-full resize-y rounded-lg border border-neutral-300 bg-white px-3 py-2.5 text-sm text-neutral-900 outline-none placeholder:text-neutral-400 focus:border-[#af101a] focus:ring-2 focus:ring-[#af101a]/20"
                />
              </label>

              {status === "error" && errorMessage ? (
                <p className="text-sm font-medium text-red-700" role="alert">
                  {errorMessage}
                </p>
              ) : null}

              <div className="mt-1 flex flex-col-reverse gap-2 border-t border-neutral-200 pt-4 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={close}
                  className="rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-sm font-semibold text-neutral-800 transition-colors hover:bg-neutral-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="rounded-lg px-4 py-2.5 text-sm font-bold text-white transition-opacity disabled:opacity-60"
                  style={{ backgroundColor: BRAND_RED }}
                >
                  {status === "submitting" ? "Sending…" : "Submit"}
                </button>
              </div>
            </form>
          )}
        </div>
      </dialog>
    </>
  );
}
