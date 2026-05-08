import { motion } from "framer-motion";

import Card from "../components/Card";
import Container from "../components/Container";

const systems = [
  {
    title: "SSR / CSR",
    description:
      "Understanding rendering strategies and choosing the right approach for scalability.",
  },
  {
    title: "Caching",
    description:
      "Reducing unnecessary requests and optimizing frontend performance intelligently.",
  },
  {
    title: "Code Splitting",
    description:
      "Loading only what users need to create faster and smoother experiences.",
  },
  {
    title: "Error Boundaries",
    description:
      "Designing resilient frontend systems able to recover gracefully from failures.",
  },
];

export default function SystemDesign() {
  return (
    <section
      id="systems"
      className="section-fade relative overflow-hidden px-6 py-28 md:py-40"
    >
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mb-20 md:mb-24"
        >
          <p className="section-label">
            Level 6
          </p>

          <h2 className="display-title max-w-5xl">
            Frontend expertise
            <br />
            requires system design thinking.
          </h2>

          <p className="section-description mt-8 max-w-2xl">
            Modern frontend applications are complex systems involving
            rendering strategies, scalability, performance optimization
            and resilient architecture decisions.
          </p>
        </motion.div>

        <div className="grid gap-5 md:gap-6 lg:grid-cols-2">
          {systems.map((item, index) => (
            <motion.div
              key={item.title}
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
              <Card className="group min-h-[220px] p-8 md:min-h-[280px] md:p-10">
                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />
                </div>

                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zinc-500">
                      SYS-0{index + 1}
                    </span>

                    <div className="h-2 w-2 rounded-full bg-white" />
                  </div>

                  <div className="mt-14 md:mt-16">
                    <h3 className="text-2xl font-semibold text-white md:text-3xl">
                      {item.title}
                    </h3>

                    <p className="mt-4 max-w-md text-sm leading-relaxed text-zinc-400 md:mt-6 md:text-base">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-10 flex items-center gap-4">
                    <div className="h-px flex-1 bg-white/10" />

                    <div className="h-2 w-2 rounded-full bg-white/40" />

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