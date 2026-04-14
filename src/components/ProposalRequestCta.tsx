"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";

const BRAND_RED = "#af101a";

/** Shared modal field styles — stronger border so boxes read clearly on white */
const MODAL_FIELD_CLASS =
  "w-full rounded-sm border-2 border-neutral-400 bg-white px-3 py-2.5 text-sm text-neutral-900 shadow-sm outline-none transition-[border,box-shadow] hover:border-neutral-500 focus:border-neutral-800 focus:ring-2 focus:ring-[#af101a]/20";

export function ProposalRequestCta() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);
  const titleId = useId();
  const descId = useId();
  const firstFieldRef = useRef<HTMLInputElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    setSubmitted(false);
    setPending(false);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const t = window.setTimeout(() => firstFieldRef.current?.focus(), 50);
    return () => {
      document.body.style.overflow = "";
      window.clearTimeout(t);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    await new Promise((r) => window.setTimeout(r, 650));
    setPending(false);
    setSubmitted(true);
  }

  return (
    <>
      <button
        type="button"
        className="mt-8 inline-flex cursor-pointer items-center justify-center bg-white px-10 py-4 text-sm font-black uppercase tracking-widest text-[#af101a] transition-colors duration-300 hover:bg-[#1b1b1b] hover:text-white md:mt-10 md:px-16 md:py-6 md:text-lg"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls="proposal-request-dialog"
        onClick={() => setOpen(true)}
      >
        Get a Custom Proposal
      </button>

      {mounted && open
        ? createPortal(
            <div
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
              role="presentation"
            >
              <button
                type="button"
                className="absolute inset-0 bg-black/55 backdrop-blur-[2px] transition-opacity"
                aria-label="Close dialog"
                onClick={close}
              />
              <div
                id="proposal-request-dialog"
                role="dialog"
                aria-modal="true"
                aria-labelledby={titleId}
                aria-describedby={descId}
                className="relative z-10 w-full max-w-lg border border-neutral-200/80 bg-white shadow-[0_24px_80px_-12px_rgba(0,0,0,0.35)]"
                onClick={(e) => e.stopPropagation()}
              >
                <div
                  className="flex items-start justify-between gap-4 border-b border-neutral-100 px-6 py-5 sm:px-8"
                  style={{
                    borderLeftWidth: 4,
                    borderLeftColor: BRAND_RED,
                    borderLeftStyle: "solid",
                  }}
                >
                  <div className="min-w-0">
                    <h2
                      id={titleId}
                      className="text-lg font-extrabold tracking-tight text-neutral-900 sm:text-xl"
                    >
                      Request a custom proposal
                    </h2>
                    <p id={descId} className="mt-1 text-sm text-neutral-600">
                      Tell us about your goals—we&apos;ll follow up with a tailored plan.
                    </p>
                  </div>
                  <button
                    type="button"
                    className="shrink-0 rounded-md border border-neutral-200 p-2 text-neutral-600 transition-colors hover:border-neutral-300 hover:bg-neutral-50 hover:text-neutral-900"
                    aria-label="Close"
                    onClick={close}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path
                        d="M18 6L6 18M6 6l12 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </div>

                <div className="px-6 py-6 sm:px-8 sm:py-8">
                  {submitted ? (
                    <div className="py-4 text-center">
                      <div
                        className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full text-white"
                        style={{ backgroundColor: BRAND_RED }}
                        aria-hidden
                      >
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M20 6L9 17l-5-5"
                            stroke="currentColor"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <p className="text-lg font-semibold text-neutral-900">
                        Thanks—we&apos;ve got it.
                      </p>
                      <p className="mt-2 text-sm text-neutral-600">
                        Our team will review your details and reach out shortly.
                      </p>
                      <button
                        type="button"
                        className="mt-8 inline-flex w-full items-center justify-center px-6 py-3 text-sm font-bold uppercase tracking-wide text-white sm:w-auto"
                        style={{ backgroundColor: BRAND_RED }}
                        onClick={close}
                      >
                        Close
                      </button>
                    </div>
                  ) : (
                    <form className="space-y-4" onSubmit={onSubmit}>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <label className="block sm:col-span-1">
                          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-neutral-700">
                            Full name <span className="text-red-700">*</span>
                          </span>
                          <input
                            ref={firstFieldRef}
                            name="name"
                            required
                            autoComplete="name"
                            className={MODAL_FIELD_CLASS}
                            placeholder="Jane Doe"
                          />
                        </label>
                        <label className="block sm:col-span-1">
                          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-neutral-700">
                            Work email <span className="text-red-700">*</span>
                          </span>
                          <input
                            name="email"
                            type="email"
                            required
                            autoComplete="email"
                            className={MODAL_FIELD_CLASS}
                            placeholder="you@company.com"
                          />
                        </label>
                      </div>
                      <label className="block">
                        <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-neutral-700">
                          Company <span className="text-red-700">*</span>
                        </span>
                        <input
                          name="company"
                          required
                          autoComplete="organization"
                          className={MODAL_FIELD_CLASS}
                          placeholder="Company name"
                        />
                      </label>
                      <label className="block">
                        <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-neutral-700">
                          Phone <span className="text-neutral-400">(optional)</span>
                        </span>
                        <input
                          name="phone"
                          type="tel"
                          autoComplete="tel"
                          className={MODAL_FIELD_CLASS}
                          placeholder="+971 …"
                        />
                      </label>
                      <label className="block">
                        <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-neutral-700">
                          What do you need? <span className="text-red-700">*</span>
                        </span>
                        <textarea
                          name="message"
                          required
                          rows={4}
                          className={`${MODAL_FIELD_CLASS} resize-y`}
                          placeholder="Roles, volume, timeline, tech stack…"
                        />
                      </label>
                      <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end">
                        <button
                          type="button"
                          className="border border-neutral-200 px-5 py-3 text-sm font-semibold text-neutral-800 transition-colors hover:bg-neutral-50"
                          onClick={close}
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          disabled={pending}
                          className="px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-opacity disabled:opacity-60"
                          style={{ backgroundColor: BRAND_RED }}
                        >
                          {pending ? "Sending…" : "Submit request"}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}

