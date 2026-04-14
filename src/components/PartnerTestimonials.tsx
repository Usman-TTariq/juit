import Image from "next/image";

const testimonials = [
  {
    quote:
      "JUIT Technologies isn't just an outsourcing partner; they are a strategic asset. Their KPO team handles our most complex medical billing with zero errors.",
    name: "Sarah Chen",
    role: "CTO, HealthSphere US",
    image: "/Gemini_Generated_Image_qdoqz2qdoqz2qdoq.png",
  },
  {
    quote:
      "The scale of their operations in Karachi is impressive. They managed to ramp up our CX team from 10 to 150 agents in less than 45 days.",
    name: "Marcus Thorne",
    role: "VP Operations, Global Logistics",
    image: "/Gemini_Generated_Image_fqaqlkfqaqlkfqaq.png",
  },
] as const;

export function PartnerTestimonials() {
  return (
    <section
      className="bg-[#f3f3f3] px-6 py-16 text-[#1b1b1b] md:px-10 md:py-20 lg:py-24"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-[1920px]">
        <h2
          id="testimonials-heading"
          className="mb-12 text-center text-2xl font-black uppercase tracking-[0.2em] md:mb-16 md:text-3xl lg:text-4xl"
        >
          Partner Testimonials
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="border-l-8 border-[#af101a] bg-white p-8 shadow-sm md:p-12 lg:p-16"
            >
              <blockquote className="text-lg font-normal italic leading-relaxed md:text-xl lg:text-2xl">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-[#e2e2e2] md:h-16 md:w-16">
                  <Image
                    src={t.image}
                    alt=""
                    width={64}
                    height={64}
                    className="h-full w-full object-cover"
                  />
                </span>
                <div>
                  <p className="font-bold text-[#1b1b1b]">{t.name}</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#af101a]">
                    {t.role}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
