"use client";

import { useId, useState } from "react";

const items = [
  {
    q: "What is the onboarding timeline?",
    a: "Most engagements begin with a 2–3 week discovery and security review, followed by a phased ramp. Pilot teams often go live within 4–6 weeks depending on scope and tooling.",
  },
  {
    q: "How do you handle data security?",
    a: "We align with ISO 27001-style controls, role-based access, encryption in transit and at rest where applicable, and strict vendor and device policies. We work with your security team on DPIAs and subprocessors as needed.",
  },
  {
    q: "Can we scale teams up/down seasonally?",
    a: "Yes. Capacity plans include surge buffers and flexible seat models so you can scale for peaks without long-term fixed overhead. Changes are coordinated through your dedicated operations lead.",
  },
] as const;

export function CommonInquiries() {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      className="mx-auto max-w-4xl px-6 py-16 text-[#1b1b1b] md:px-10 md:py-24 lg:py-32"
      aria-labelledby="faq-heading"
    >
      <h2
        id="faq-heading"
        className="mb-12 text-center text-3xl font-black uppercase tracking-tighter md:mb-16 md:text-4xl lg:text-5xl"
      >
        Common Inquiries
      </h2>
      <div className="divide-y divide-[#eeeeee] border-y border-[#eeeeee]">
        {items.map((item, i) => {
          const open = openIndex === i;
          const panelId = `${baseId}-panel-${i}`;
          const triggerId = `${baseId}-trigger-${i}`;
          return (
            <div key={item.q} className="py-6 md:py-8">
              <button
                type="button"
                id={triggerId}
                className="flex w-full cursor-pointer items-start justify-between gap-4 text-left"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : i)}
              >
                <span className="text-base font-bold uppercase md:text-lg lg:text-xl">
                  {item.q}
                </span>
                <span
                  className="mt-0.5 shrink-0 text-[#af101a] transition-transform duration-200"
                  style={{ transform: open ? "rotate(45deg)" : undefined }}
                  aria-hidden
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path
                      d="M12 5v14M5 12h14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="square"
                    />
                  </svg>
                </span>
              </button>
              <div
                id={panelId}
                role="region"
                aria-labelledby={triggerId}
                className={open ? "mt-4 block" : "hidden"}
              >
                <p className="max-w-3xl text-base leading-relaxed text-[#5b403d] md:text-lg">
                  {item.a}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
