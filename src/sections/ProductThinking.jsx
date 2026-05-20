import Reveal from "../components/Reveal";

const principles = [
  "User Experience",
  "Accessibility",
  "Performance",
  "Clarity",
  "Maintainability",
  "Business Impact",
];

export default function ProductThinking() {
  return (
    <section className="relative px-6 py-40">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
            Level 5
          </p>

          <h2 className="max-w-5xl text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-7xl">
            Great frontend
            <br />
            is not only engineering.
            <br />
            It’s product thinking.
          </h2>

          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-zinc-400">
            Expert frontend developers think beyond components and frameworks.
            They design experiences that are fast, understandable, accessible
            and maintainable over time.
          </p>
        </Reveal>

        <div className="mt-24 grid gap-px overflow-hidden rounded-[32px] border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {principles.map((item, index) => (
            <Reveal key={item} delay={index * 0.08}>
              <div className="group bg-[#050505] p-10 transition hover:bg-white/[0.03]">
                <span className="text-sm text-zinc-600">
                  0{index + 1}
                </span>
                <h3 className="mt-10 text-2xl font-semibold text-white">
                  {item}
                </h3>
                <div className="mt-10 h-px w-full bg-white/10 transition duration-500 group-hover:bg-white/30" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}