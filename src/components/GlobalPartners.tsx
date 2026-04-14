const partners = [
  "Fintech.co",
  "Nexus Global",
  "Quantum Systems",
  "Velocity AI",
] as const;

export function GlobalPartners() {
  return (
    <section
      className="w-full bg-[#f3f3f3]"
      aria-labelledby="global-partners-heading"
    >
      <div className="mx-auto flex max-w-5xl flex-col flex-wrap items-center justify-center gap-5 px-6 py-7 opacity-50 grayscale sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-3 md:px-8 md:py-8 lg:max-w-6xl">
        <h2
          id="global-partners-heading"
          className="shrink-0 text-xl font-black tracking-tighter text-[#1b1b1b] sm:text-2xl"
        >
          GLOBAL PARTNERS
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 sm:gap-x-8 md:gap-x-10">
          {partners.map((name) => (
            <span
              key={name}
              className="shrink-0 whitespace-nowrap text-lg font-bold tracking-tighter text-[#1b1b1b] sm:text-xl"
            >
              {name.toUpperCase()}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
