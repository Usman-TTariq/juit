import { ProposalRequestCta } from "./ProposalRequestCta";

export function ScaleCta() {
  return (
    <section
      className="relative overflow-hidden bg-[#af101a] px-6 py-16 text-center text-white md:px-10 md:py-24 lg:py-32"
      aria-labelledby="scale-cta-heading"
    >
      {/* Texture layer — design “glass & gradient” without remote image */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-overlay"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(135deg, #d32f2f 0%, transparent 45%), radial-gradient(ellipse 80% 50% at 50% 0%, #fff 0%, transparent 55%)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-4xl">
        <h2
          id="scale-cta-heading"
          className="text-4xl font-black leading-none tracking-tighter md:text-5xl lg:text-6xl xl:text-7xl"
        >
          <span className="block">READY TO SCALE</span>
          <span className="block">YOUR BUSINESS?</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base opacity-90 md:mt-8 md:text-lg lg:text-xl">
          Join the world&apos;s fastest-growing companies leveraging Pakistan&apos;s premier tech and
          talent ecosystem.
        </p>
        <ProposalRequestCta />
      </div>
    </section>
  );
}
