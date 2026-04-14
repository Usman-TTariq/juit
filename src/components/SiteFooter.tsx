import Image from "next/image";
import Link from "next/link";

const LOGO_SRC = "/jui%20logo%20vert.png";

const LINKEDIN_COMPANY_URL =
  "https://pk.linkedin.com/company/juit-technologies-private-limited";

function IconLinkedIn({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

/** Same order as Six Pillars on home — scroll targets `#anchorId` */
const solutions = [
  { label: "Customer Experience", href: "/#customer-experience" },
  { label: "Financial Outsourcing", href: "/#financial-outsourcing" },
  { label: "Managed IT Services", href: "/#managed-it-services" },
  { label: "Back-Office", href: "/#back-office" },
  { label: "Knowledge Process", href: "/#knowledge-process" },
  { label: "HR Outsourcing", href: "/#hr-outsourcing" },
] as const;

const company = [
  { label: "About JUIT", href: "/about" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
] as const;

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full border-t border-white/5 bg-neutral-950 pb-12 pt-16 text-sm tracking-wide text-neutral-400 md:pt-24">
      <div className="mx-auto grid max-w-[1920px] grid-cols-1 gap-12 px-6 md:grid-cols-2 md:px-10 lg:grid-cols-4">
        <div>
          <Link
            href="/"
            className="mb-6 inline-flex max-w-[min(100%,19rem)] items-center gap-2.5 py-1"
            aria-label="Juit Technologies Private Limited — Home"
          >
            <span className="relative isolate block h-10 w-[3.25rem] shrink-0 overflow-hidden sm:h-11 sm:w-14">
              <Image
                src={LOGO_SRC}
                alt=""
                fill
                className="object-cover object-left"
                sizes="256px"
                unoptimized
              />
            </span>
            <span className="flex min-w-0 flex-col leading-tight">
              <span className="truncate text-base font-extrabold tracking-tight text-white sm:text-lg">
                Juit Technologies
              </span>
              <span className="mt-0.5 flex items-center gap-2 text-[10px] font-semibold tracking-wide text-neutral-300 sm:text-xs">
                <span className="h-px min-w-[0.75rem] max-w-[2rem] flex-1 bg-white/35" aria-hidden />
                <span className="shrink-0">Private Limited</span>
                <span className="h-px min-w-[0.75rem] max-w-[2rem] flex-1 bg-white/35" aria-hidden />
              </span>
            </span>
          </Link>
          <p className="mb-8 max-w-sm leading-relaxed">
            Precision-engineered BPO and technical outsourcing from Pakistan&apos;s leading tech hub.
          </p>
          <a
            href={LINKEDIN_COMPANY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex text-white transition-colors hover:text-[#0a66c2]"
            aria-label="Juit Technologies on LinkedIn (opens in a new tab)"
          >
            <IconLinkedIn className="h-7 w-7" />
          </a>
        </div>
        <div>
          <h3 className="mb-6 text-xs font-bold uppercase tracking-widest text-white">Solutions</h3>
          <ul className="space-y-4">
            {solutions.map((item) => (
              <li key={item.href + item.label}>
                {/* Native anchor: reliable in-page / hash scroll (Next Link can skip hash scroll) */}
                <a href={item.href} className="transition-colors hover:text-[#af101a]">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-6 text-xs font-bold uppercase tracking-widest text-white">Company</h3>
          <ul className="space-y-4">
            {company.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="transition-colors hover:text-[#af101a]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-6 text-xs font-bold uppercase tracking-widest text-white">Karachi office</h3>
          <p className="mb-4 max-w-sm leading-relaxed">
            Office No. 301/302, 3rd Floor, Hammad Business Lounge, Plot No. 18-C, Bukhari Commercial
            Lane 5, DHA Phase 6, Karachi.
          </p>
          <p className="mb-4">
            Email:{" "}
            <a href="mailto:hr@juitechnologies.com" className="break-all hover:text-[#af101a]">
              hr@juitechnologies.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:+923111199088" className="hover:text-[#af101a]">
              03111199088
            </a>
          </p>
        </div>
      </div>
      <div className="mx-auto mt-16 flex max-w-[1920px] flex-col items-center justify-between gap-6 border-t border-white/5 px-6 pt-10 md:mt-24 md:flex-row md:px-10">
        <p>
          © {year} JUIT Technologies. All Rights Reserved. Precision in Pakistan.
        </p>
        <div className="flex gap-8">
          <span className="cursor-pointer transition-colors hover:text-white">Security</span>
          <span className="cursor-pointer transition-colors hover:text-white">Compliance</span>
        </div>
      </div>
    </footer>
  );
}
