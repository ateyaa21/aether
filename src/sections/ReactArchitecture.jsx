import { motion } from "framer-motion";

import Container from "../components/Container";

const systems = [
  "Rendering",
  "State Flow",
  "Composition",
  "Custom Hooks",
  "Data Fetching",
  "Scalable Structure",
];

export default function ReactArchitecture() {
  return (
    <section
      id="react"
      className="section-fade relative overflow-hidden px-6 py-28 md:py-40"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_65%)]" />

      <Container className="relative z-10 grid gap-16 lg:grid-cols-2 lg:gap-20">
        <motion.div
          initial={{
            opacity: 0,
            y: 80,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <p className="section-label">
            Level 2
          </p>

          <h2 className="section-title max-w-xl">
            React is not about components.
            It’s about systems.
          </h2>

          <p className="section-description mt-8 max-w-lg">
            Advanced frontend developers think in rendering flows,
            reusable architecture, state management and scalable
            UI systems — not isolated files.
          </p>

          <div className="mt-12 flex flex-wrap gap-3 md:gap-4">
            {systems.map((item, index) => (
              <motion.div
                key={item}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-300 md:px-5 md:py-3"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 100,
            scale: 0.96,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative flex items-center justify-center"
        >
          <div className="relative w-full max-w-xl overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl md:p-10">
            <div className="absolute inset-0 opacity-0 transition duration-500 hover:opacity-100">
              <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />
            </div>

            <div className="absolute left-1/2 top-24 hidden h-[70%] w-px -translate-x-1/2 bg-white/10 md:block" />

            <div className="relative z-10 flex flex-col items-center gap-8 md:gap-10">
              <div className="rounded-2xl border border-white/10 bg-black px-6 py-4 text-sm text-white shadow-2xl md:px-8 md:py-5 md:text-base">
                App System
              </div>

              <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 md:gap-8">
                <div className="rounded-2xl border border-white/10 bg-black/40 p-5 text-center text-sm text-zinc-300 md:p-6 md:text-base">
                  UI Layer
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/40 p-5 text-center text-sm text-zinc-300 md:p-6 md:text-base">
                  Logic Layer
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/40 p-5 text-center text-sm text-zinc-300 md:p-6 md:text-base">
                  State
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/40 p-5 text-center text-sm text-zinc-300 md:p-6 md:text-base">
                  Hooks
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}