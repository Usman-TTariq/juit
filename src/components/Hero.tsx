import Image from "next/image";
import Link from "next/link";

const HERO_IMAGE = "/Gemini_Generated_Image_cmyq4ncmyq4ncmyq.png";

const accent = "#af101a";

export function Hero() {
  return (
    <section className="w-full bg-[#f9f9f9]" aria-labelledby="hero-heading">
      <div className="mx-auto grid max-w-7xl md:grid-cols-2 md:items-stretch">
        <div className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="max-w-2xl">
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.22em] sm:text-xs sm:tracking-[0.25em]"
              style={{ color: accent }}
            >
              Precision BPO & Tech
            </p>

            <h1
              id="hero-heading"
              className="mt-5 max-w-xl text-[1.75rem] font-black leading-[1.12] tracking-tighter text-[#1b1b1b] sm:text-4xl sm:leading-[1.1] lg:text-5xl lg:leading-[1.08]"
            >
              Transforming Ideas into{" "}
              <span style={{ color: accent }}>High-Impact</span> Digital Solutions
            </h1>

            <p className="mt-6 max-w-xl text-base font-normal leading-relaxed text-[#5b403d] sm:text-lg">
              Operating from the heart of Karachi, Pakistan, we deliver surgical-precision
              outsourcing and engineering for global enterprises.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href="/#pillars"
                className="inline-flex items-center justify-center bg-[#1b1b1b] px-6 py-3.5 text-center text-[11px] font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#af101a] sm:text-xs sm:tracking-[0.12em]"
              >
                Explore our pillars
              </Link>
              <Link
                href="/talk-to-us"
                className="inline-flex items-center justify-center border-2 border-[#1b1b1b] bg-transparent px-6 py-3.5 text-center text-[11px] font-bold uppercase tracking-wide text-[#1b1b1b] transition-colors hover:bg-[#1b1b1b] hover:text-white sm:text-xs sm:tracking-[0.12em]"
              >
                Talk to us
              </Link>
            </div>
          </div>
        </div>

        <div className="relative min-h-[280px] w-full overflow-hidden bg-[#e8e8e8] md:min-h-[min(36rem,85vh)] md:border-l md:border-[#e2e2e2] lg:min-h-[min(40rem,90vh)]">
          <Image
            src={HERO_IMAGE}
            alt="Two professionals collaborating at a laptop in a modern office."
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
