import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Juit Technologies Private Limited.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <h1 className="text-3xl font-black tracking-tight text-[#1b1b1b] sm:text-4xl">Privacy Policy</h1>
      <p className="mt-2 text-sm text-neutral-500">Last updated: April 2026</p>

      <div className="mt-10 space-y-10 text-neutral-700 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#1b1b1b]">1. Introduction</h2>
          <p>
            Juit Technologies Private Limited (&quot;Juit&quot;, &quot;we&quot;, &quot;us&quot;) respects your privacy.
            This policy describes how we may collect, use, and protect information when you visit our
            website or contact us. It is intended as a general notice; your agreements or statements of
            work may include additional or more specific terms.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#1b1b1b]">2. Information we may collect</h2>
          <p>Depending on how you interact with us, we may process categories such as:</p>
          <ul className="mt-2 list-inside list-disc space-y-1 marker:text-[#af101a]">
            <li>
              <strong>Contact details</strong> you provide (for example name, email, phone, company).
            </li>
            <li>
              <strong>Technical data</strong> typical of websites (for example IP address, browser type,
              device type, and coarse location derived from network information).
            </li>
            <li>
              <strong>Communications</strong> you send us (for example messages through forms or email).
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#1b1b1b]">3. How we use information</h2>
          <p>We use information to operate the site, respond to inquiries, improve our services, comply with law, and protect security and integrity of our systems.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#1b1b1b]">4. Sharing</h2>
          <p>
            We do not sell your personal information. We may share information with service providers
            who assist us (for example hosting or email delivery), when required by law, or to protect
            rights and safety.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#1b1b1b]">5. Cookies and analytics</h2>
          <p>
            Our site may use cookies or similar technologies. You can control cookies through your
            browser settings. If we add analytics or marketing tools, we will update this policy to
            reflect what is used and your choices.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#1b1b1b]">6. Retention and security</h2>
          <p>
            We retain information only as long as needed for the purposes described, unless a longer
            period is required by law. We apply reasonable safeguards; no method of transmission over the
            internet is completely secure.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#1b1b1b]">7. Your rights</h2>
          <p>
            Depending on applicable law, you may have rights to access, correct, delete, or object to
            certain processing. Contact us using the details below and we will respond within a
            reasonable timeframe.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#1b1b1b]">8. Changes</h2>
          <p>We may update this policy from time to time. The &quot;Last updated&quot; date at the top will change when we do.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#1b1b1b]">9. Contact</h2>
          <p>
            Questions about this policy:{" "}
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
