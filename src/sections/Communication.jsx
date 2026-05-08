import { motion } from "framer-motion";

const points = [
  "Explaining technical decisions clearly",
  "Documenting systems and architecture",
  "Defending trade-offs logically",
  "Collaborating with design and product teams",
];

export default function Communication() {
  return (
    <section className="relative px-6 py-40">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
            Level 7
          </p>

          <h2 className="max-w-5xl text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-7xl">
            Great engineers
            <br />
            communicate clarity —
            <br />
            not complexity.
          </h2>

          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-zinc-400">
            Frontend expertise is also the ability to explain systems,
            architecture choices and technical trade-offs in a way that teams
            can understand and trust.
          </p>
        </motion.div>

        <div className="mt-28 space-y-px overflow-hidden rounded-[32px] border border-white/10 bg-white/10">
          {points.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="group flex items-center justify-between bg-[#050505] px-8 py-8 transition hover:bg-white/[0.03]"
            >
              <div className="flex items-center gap-6">
                <span className="text-sm text-zinc-600">
                  0{index + 1}
                </span>

                <h3 className="text-lg text-zinc-300 transition group-hover:text-white">
                  {item}
                </h3>
              </div>

              <div className="h-2 w-2 rounded-full bg-white/20 transition group-hover:bg-white" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}