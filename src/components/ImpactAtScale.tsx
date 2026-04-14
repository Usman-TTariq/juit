import Image from "next/image";

type CaseStudy = {
  imageSrc: string;
  imageAlt: string;
  label: string;
  title: string;
  description: string;
};

const caseStudies: readonly CaseStudy[] = [
  {
    imageSrc: "/unnamed.png",
    imageAlt: "High-tech control room with monitoring and data operations",
    label: "KPO / Data annotation",
    title: "Autonomous Vehicle Training for EU Tech Leader",
    description:
      "Processing 4 million frames monthly with 99.8% precision, accelerating our client's AI roadmap by 14 months.",
  },
  {
    imageSrc: "/unnamed%20(1).png",
    imageAlt: "Modern office workspace with desks and professional lighting",
    label: "CX / Omnichannel",
    title: "Global Scale-up for US E-commerce Giant",
    description:
      "Transitioned 24/7 support across 14 languages, reducing overhead costs by 45% while increasing CSAT scores.",
  },
];

/** 16:9 frame both cards — matches design HTML `aspect-video`, readable crop (not a thin strip) */
function CaseStudyImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-video w-full min-w-0 shrink-0 overflow-hidden bg-neutral-900">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 520px"
        className="object-cover object-center grayscale brightness-75 transition-all duration-700 hover:grayscale-0"
        priority={false}
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 to-transparent"
        aria-hidden
      />
    </div>
  );
}

export function ImpactAtScale() {
  return (
    <section
      className="bg-[#1b1b1b] px-6 py-12 text-white md:px-10 md:py-16"
      aria-labelledby="impact-heading"
    >
      <div className="mx-auto w-full max-w-6xl">
        <header className="mb-6 flex items-center gap-4 md:mb-8 md:gap-6">
          <h2
            id="impact-heading"
            className="shrink-0 text-3xl font-black uppercase tracking-tighter sm:text-4xl md:text-5xl"
          >
            Impact at scale
          </h2>
          <div className="h-px min-w-0 flex-1 bg-white/20" aria-hidden />
        </header>

        {/* Equal columns + min-w-0 so both image frames get identical width → identical height */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-start md:gap-8 lg:gap-10">
          {caseStudies.map((study) => (
            <article key={study.title} className="flex min-w-0 max-w-full flex-col gap-4 md:gap-5">
              <CaseStudyImage src={study.imageSrc} alt={study.imageAlt} />
              <div className="min-w-0">
                <p className="text-xs font-bold uppercase tracking-widest text-[#af101a] sm:text-sm">
                  {study.label}
                </p>
                <h3 className="mt-3 mb-3 text-xl font-black leading-tight sm:text-2xl md:text-3xl">
                  {study.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-400 md:text-base">{study.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
