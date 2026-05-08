import { motion } from "framer-motion";
import Card from "../components/Card";

const architecture = [
  {
    title: "Feature Architecture",
    text: "Organizing applications by features instead of random file grouping.",
  },
  {
    title: "Reusable Systems",
    text: "Creating scalable UI components and shared design logic.",
  },
  {
    title: "Maintainability",
    text: "Building frontend systems that stay clean as complexity grows.",
  },
  {
    title: "State Management",
    text: "Separating UI state, server state and application logic correctly.",
  },
];

export default function Architecture() {
  return (
    <section
      id="architecture"
      className="section-fade relative overflow-hidden px-6 py-28 md:py-40"
    >
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 md:mb-24"
        >
          <p className="section-label">
            Level 3
          </p>

          <h2 className="section-title max-w-5xl">
            Great frontend developers
            architect systems —
            not isolated components.
          </h2>
        </motion.div>

        <div className="grid gap-5 md:gap-6 lg:grid-cols-2">
          {architecture.map((item, index) => (
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
              <Card className="group min-h-[220px] p-8 md:min-h-[260px] md:p-10">
                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-white/10 blur-3xl" />
                </div>

                <div className="relative z-10 flex h-full flex-col justify-between">
                  <span className="text-sm text-zinc-500">
                    0{index + 1}
                  </span>

                  <div>
                    <h3 className="text-2xl font-semibold text-white md:text-3xl">
                      {item.title}
                    </h3>

                    <p className="mt-4 max-w-md text-sm leading-relaxed text-zinc-400 md:mt-5 md:text-base">
                      {item.text}
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
      </div>
    </section>
  );
}