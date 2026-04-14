const badges = [
  "ISO 27001",
  "GDPR COMPLIANT",
  "SOC 2 TYPE II",
  "HIPAA CERTIFIED",
] as const;

export function Certifications() {
  return (
    <section
      className="mx-auto flex max-w-[1920px] flex-wrap items-center justify-center gap-12 px-6 py-12 opacity-30 grayscale md:gap-16 lg:gap-24"
      aria-label="Certifications and compliance"
    >
      {badges.map((label) => (
        <div
          key={label}
          className="border-2 border-[#1b1b1b] px-6 py-2 text-lg font-black tracking-tighter text-[#1b1b1b] md:text-xl"
        >
          {label}
        </div>
      ))}
    </section>
  );
}
