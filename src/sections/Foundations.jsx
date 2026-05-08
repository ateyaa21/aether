import { motion } from "framer-motion";

import Card from "../components/Card";
import Container from "../components/Container";

const cards = [
  {
    title: "HTML / CSS",
    description:
      "Responsive systems, layouts, accessibility, animations and scalable UI architecture.",
  },
  {
    title: "JavaScript",
    description:
      "Closures, async flows, event loop, memory, APIs and deep browser interaction.",
  },
  {
    title: "Browser Knowledge",
    description:
      "Rendering pipeline, caching, hydration, DOM systems and performance understanding.",
  },
];

export default function Foundations() {
  return (
    <section
      id="foundations"
      className="section-fade relative overflow-hidden px-6 py-28 md:py-40"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05),transparent_65%)]" />

      <Container className="relative z-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 60,
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
          className="mb-20 md:mb-24"
        >
          <p className="section-label">
            Level 1
          </p>

          <h2 className="section-title max-w-4xl">
            Strong foundations create scalable frontend systems.
          </h2>
        </motion.div>

        <div className="grid gap-5 md:gap-6 lg:grid-cols-3">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
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
                duration: 0.9,
                delay: index * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Card className="group h-full min-h-[220px] p-8 md:min-h-[260px] md:p-10">
                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute -left-10 top-0 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />
                </div>

                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div>
                    <span className="text-sm text-zinc-500">
                      0{index + 1}
                    </span>

                    <h3 className="mt-5 text-2xl font-semibold text-white md:text-3xl">
                      {card.title}
                    </h3>

                    <p className="mt-4 max-w-md text-sm leading-relaxed text-zinc-400 md:text-base">
                      {card.description}
                    </p>
                  </div>

                  <div className="mt-10 flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-white" />

                    <div className="h-px flex-1 bg-white/10" />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}