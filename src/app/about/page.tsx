import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About JUIT",
  description:
    "Juit Technologies Private Limited — BPO, IT services, and digital solutions from Karachi, Pakistan.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <h1 className="text-3xl font-black tracking-tight text-[#1b1b1b] sm:text-4xl">About JUIT</h1>
      <p className="mt-4 text-lg leading-relaxed text-neutral-600">
        Juit Technologies Private Limited delivers precision-engineered outsourcing and technology
        services for businesses that need reliable scale—from customer experience and back-office
        operations to IT, finance, and knowledge process work.
      </p>

      <h2 className="mt-12 text-sm font-bold uppercase tracking-widest text-[#af101a]">What we do</h2>
      <p className="mt-3 leading-relaxed text-neutral-700">
        Our teams combine strong English communication, global delivery discipline, and modern tools
        to run campaigns, support desks, finance workflows, and technical programs for international
        clients. We are headquartered in{" "}
        <span className="font-semibold text-neutral-900">Karachi, Pakistan</span>, with a focus on
        quality, security awareness, and measurable outcomes.
      </p>

      <h2 className="mt-10 text-sm font-bold uppercase tracking-widest text-[#af101a]">How we work</h2>
      <ul className="mt-3 list-inside list-disc space-y-2 text-neutral-700">
        <li>Clear operating cadence and reporting for distributed teams</li>
        <li>Structured onboarding and training for new programs</li>
        <li>Partnership mindset—we align to your KPIs, not just task lists</li>
      </ul>

      <p className="mt-12 text-neutral-600">
        Want to explore a program or proposal?{" "}
        <Link href="/talk-to-us" className="font-semibold text-[#af101a] underline-offset-2 hover:underline">
          Talk to us
        </Link>{" "}
        or return to the{" "}
        <Link href="/" className="font-semibold text-[#af101a] underline-offset-2 hover:underline">
          home page
        </Link>
        .
      </p>
    </main>
  );
}
