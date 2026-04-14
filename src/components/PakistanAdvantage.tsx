import Image from "next/image";

const ADVANTAGE_IMAGE = "/unnamed%20(2).png";

const advantages = [
  {
    num: "01",
    title: "Elite Talent Pipeline",
    body: "Drawing from Pakistan's top engineering universities, our teams combine deep technical fluency with global cultural alignment.",
  },
  {
    num: "02",
    title: "Architectural Precision",
    body: "We don't just fill seats. We engineer processes. Our management team applies rigorous systems thinking to every workflow.",
  },
  {
    num: "03",
    title: "Economic Optimization",
    body: "Maximize your EBITDA without compromising quality. Our Karachi hub offers the world's best value-to-precision ratio.",
  },
] as const;

export function PakistanAdvantage() {
  return (
    <section
      className="bg-white px-6 py-16 sm:py-20 md:px-10 lg:py-24"
      aria-labelledby="pakistan-advantage-heading"
    >
      <div className="mx-auto w-full max-w-6xl xl:max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-start lg:gap-x-10 lg:gap-y-14 xl:gap-x-16 xl:gap-y-16">
          <div className="mx-auto w-full max-w-xl text-left lg:mx-0 lg:max-w-lg lg:justify-self-end lg:pr-4 xl:max-w-xl xl:pr-8">
            <h2
              id="pakistan-advantage-heading"
              className="text-4xl font-black uppercase leading-[0.95] tracking-tighter text-black sm:text-5xl md:text-6xl lg:text-[3.25rem] lg:leading-[1.05] xl:text-7xl"
            >
              <span className="block">The Pakistan</span>
              <span className="block">Advantage</span>
            </h2>

            <ul className="mt-10 space-y-10 sm:mt-12 sm:space-y-11 lg:mt-14">
              {advantages.map((item) => (
                <li key={item.num} className="flex gap-5 sm:gap-6">
                  <span
                    className="shrink-0 text-4xl font-black tabular-nums leading-none text-[#d4d4d4] sm:text-5xl"
                    aria-hidden
                  >
                    {item.num}
                  </span>
                  <div className="min-w-0 pt-0.5">
                    <h3 className="text-lg font-bold text-black sm:text-xl">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-600 sm:text-[15px] sm:leading-[1.65]">
                      {item.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual column — shifted slightly right vs canvas */}
          <div className="flex w-full justify-center lg:justify-start lg:justify-self-start lg:pl-4 xl:pl-6">
            <div className="relative ml-5 w-full max-w-[18rem] overflow-visible pb-28 sm:ml-8 sm:max-w-[20rem] sm:pb-32 lg:ml-10 lg:max-w-[22rem] lg:pb-28 xl:ml-12 xl:max-w-[24rem]">
              <figure className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-200 shadow-[0_24px_60px_rgba(0,0,0,0.14)]">
                <Image
                  src={ADVANTAGE_IMAGE}
                  alt="Professional team collaborating over documents and laptop in the office"
                  fill
                  className="object-cover object-center grayscale"
                  sizes="(max-width: 1024px) 320px, 384px"
                  priority={false}
                />
              </figure>

              <div
                className="absolute bottom-10 left-0 z-20 flex aspect-[3/2] w-[min(94vw,17.5rem)] -translate-x-8 -translate-y-2 flex-col items-center justify-center bg-[#b21e23] px-6 text-center shadow-[0_20px_45px_rgba(0,0,0,0.2)] sm:bottom-12 sm:w-[19.5rem] sm:-translate-x-10 sm:-translate-y-2 lg:bottom-14 lg:w-[21rem] lg:-translate-x-14"
                aria-label="98 percent client retention rate"
              >
                <p className="text-[clamp(2.25rem,8vw,3.5rem)] font-black leading-none tracking-tight text-white">
                  98%
                </p>
                <p className="mt-2 text-[0.6rem] font-bold uppercase leading-snug tracking-[0.24em] text-white sm:text-xs sm:tracking-[0.28em]">
                  <span className="block">Client</span>
                  <span className="block">retention rate</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
