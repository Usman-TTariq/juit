import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Juit Technologies Private Limited.",
};

export default function TermsOfServicePage() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <h1 className="text-3xl font-black tracking-tight text-[#1b1b1b] sm:text-4xl">Terms of Service</h1>
      <p className="mt-2 text-sm text-neutral-500">Last updated: April 2026</p>

      <div className="mt-10 space-y-10 text-neutral-700 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#1b1b1b]">1. Agreement</h2>
          <p>
            By accessing or using the website operated by Juit Technologies Private Limited
            (&quot;Juit&quot;, &quot;we&quot;), you agree to these Terms of Service. If you do not agree, please do not
            use the site. Separate written agreements govern client engagements, statements of work, and
            deliverables where applicable.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#1b1b1b]">2. Use of the website</h2>
          <p>You agree not to misuse the site, attempt unauthorized access, interfere with security, scrape in a way that harms performance, or use the site for unlawful purposes.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#1b1b1b]">3. Information on this site</h2>
          <p>
            Content on this website is for general information. We aim to keep it accurate, but we do
            not warrant that all information is complete or current. Business terms, pricing, and
            availability are confirmed through direct communication and contracts—not solely through
            this site.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#1b1b1b]">4. Intellectual property</h2>
          <p>
            Trademarks, logos, text, graphics, and other materials on this site are owned by Juit or
            used with permission. You may not copy, modify, or distribute them without our prior written
            consent except as allowed by law.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#1b1b1b]">5. Third-party links</h2>
          <p>
            The site may link to third-party services (for example LinkedIn). Those sites have their own
            terms and privacy practices; we are not responsible for their content or policies.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#1b1b1b]">6. Disclaimer of warranties</h2>
          <p>
            The site is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, to the
            fullest extent permitted by applicable law.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#1b1b1b]">7. Limitation of liability</h2>
          <p>
            To the fullest extent permitted by law, Juit and its affiliates will not be liable for any
            indirect, incidental, special, consequential, or punitive damages arising from your use of
            the site, or for any loss of profits, data, or goodwill, except where liability cannot be
            excluded by law.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#1b1b1b]">8. Governing law</h2>
          <p>
            These terms are governed by the laws of Pakistan, without regard to conflict-of-law rules.
            Courts located in Karachi, Sindh, shall have exclusive jurisdiction, subject to mandatory
            provisions of law.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#1b1b1b]">9. Changes</h2>
          <p>We may update these terms from time to time. Continued use of the site after changes constitutes acceptance of the revised terms.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#1b1b1b]">10. Contact</h2>
          <p>
            For questions about these terms:{" "}
            <a href="mailto:hr@juitechnologies.com" className="font-semibold text-[#af101a] underline-offset-2 hover:underline">
              hr@juitechnologies.com
            </a>
          </p>
        </section>
      </div>

      <p className="mt-12 text-sm text-neutral-500">
        <Link href="/" className="text-[#af101a] underline-offset-2 hover:underline">
          Back to home
        </Link>
      </p>
    </main>
  );
}
