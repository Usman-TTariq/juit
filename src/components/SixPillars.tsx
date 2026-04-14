import type { ReactNode } from "react";

/** Deep red for pillar accents — reference artwork */
const accentText = "text-[#af101a]";

function IconHeadset({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M3 14v-1a9 9 0 0 1 18 0v1" />
      <path d="M21 14a3 3 0 0 1-3 3h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h1a3 3 0 0 1 3 3Z" />
      <path d="M3 14a3 3 0 0 0 3 3h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H6a3 3 0 0 0-3 3Z" />
    </svg>
  );
}

function IconWallet({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M21 12V7H5a2 2 0 1 1 0-4h14v4" />
      <path d="M3 7v14a2 2 0 0 0 2 2h16v-10" />
      <path d="M18 12h.01" />
    </svg>
  );
}

function IconTerminal({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="m7 9 3 3-3 3" />
      <path d="M13 15h4" />
    </svg>
  );
}

function IconPackage({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <path d="m3.27 6.96 8.66 4.98 8.8-5.02" />
      <path d="M12 22.08V12" />
    </svg>
  );
}

function IconChartSquare({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M8 17V10" />
      <path d="M12 17v-4" />
      <path d="M16 17V7" />
    </svg>
  );
}

function IconUsers({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

const iconClass = "h-9 w-9 shrink-0 sm:h-10 sm:w-10";

type Pillar = {
  num: string;
  /** In-page anchor for footer / deep links */
  anchorId: string;
  title: string;
  items: readonly string[];
  icon: ReactNode;
};

const pillars: readonly Pillar[] = [
  {
    num: "01",
    anchorId: "customer-experience",
    title: "CX & Support",
    items: [
      "Omnichannel Support",
      "Technical Helpdesk",
      "Multilingual Call Center",
    ],
    icon: <IconHeadset className={iconClass} />,
  },
  {
    num: "02",
    anchorId: "financial-outsourcing",
    title: "Finance & Accounting",
    items: [
      "Bookkeeping & Audits",
      "Strategic Tax Filing",
      "Global Payroll Management",
    ],
    icon: <IconWallet className={iconClass} />,
  },
  {
    num: "03",
    anchorId: "managed-it-services",
    title: "IT & Technical",
    items: [
      "Staff Augmentation",
      "Managed IT Infrastructure",
      "Custom Software Dev",
    ],
    icon: <IconTerminal className={iconClass} />,
  },
  {
    num: "04",
    anchorId: "back-office",
    title: "Back-Office",
    items: [
      "High-Scale Data Entry",
      "E-commerce Operations",
      "Supply Chain Management",
    ],
    icon: <IconPackage className={iconClass} />,
  },
  {
    num: "05",
    anchorId: "knowledge-process",
    title: "KPO Services",
    items: [
      "Medical Billing & Coding",
      "AI Data Annotation",
      "Legal Process Outsourcing",
    ],
    icon: <IconChartSquare className={iconClass} />,
  },
  {
    num: "06",
    anchorId: "hr-outsourcing",
    title: "HR Outsourcing",
    items: [
      "Global Talent Sourcing",
      "Performance Management",
      "Benefits Administration",
    ],
    icon: <IconUsers className={iconClass} />,
  },
];

export function SixPillars() {
  return (
    <section
      id="pillars"
      className="w-full scroll-mt-28 bg-[#f9f9f9]"
      aria-labelledby="six-pillars-heading"
    >
      <div className="mx-auto max-w-5xl px-6 py-10 md:px-8 md:py-12 lg:max-w-6xl">
        <header className="mb-7 flex flex-col items-stretch justify-between gap-4 sm:flex-row sm:items-end sm:gap-6 md:mb-9">
          <h2
            id="six-pillars-heading"
            className="text-center text-3xl font-black uppercase leading-none tracking-tighter text-[#1b1b1b] sm:text-left sm:text-4xl md:text-5xl lg:text-5xl"
          >
            <span className="block">THE SIX</span>
            <span className="block">PILLARS</span>
          </h2>
          <div className="mx-auto h-1 w-24 shrink-0 bg-[#af101a] sm:mx-0 sm:mb-1 sm:w-28" aria-hidden />
        </header>

        <div className="mx-auto grid max-w-full grid-cols-1 gap-px bg-[#eeeeee] md:grid-cols-3 md:max-w-none">
          {pillars.map((pillar) => (
            <article
              key={pillar.num}
              id={pillar.anchorId}
              className="scroll-mt-28 flex h-full flex-col bg-white p-5 transition-colors hover:bg-neutral-50 sm:scroll-mt-32 sm:p-6 md:p-7"
            >
              <p
                className={`text-3xl font-black tabular-nums leading-none sm:text-4xl ${accentText}`}
              >
                {pillar.num}
              </p>
              <h3 className="mt-3 text-lg font-black uppercase tracking-tight text-[#1b1b1b] sm:text-xl md:text-2xl">
                {pillar.title}
              </h3>
              <ul className="mb-5 mt-2 space-y-1.5 text-sm leading-snug text-[#5b403d] sm:mb-6 sm:text-[0.9375rem] sm:leading-relaxed">
                {pillar.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className={`mt-auto pt-3 ${accentText}`}>{pillar.icon}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
