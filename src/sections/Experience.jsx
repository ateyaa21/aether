import { motion } from "framer-motion";

const experiences = [
  "Real production bugs",
  "Complex refactors",
  "Technical debt",
  "Client constraints",
  "Maintaining systems over time",
  "Years of iteration",
];

export default function Experience() {
  return (
    <section className="section-fade relative overflow-hidden px-6 py-40">
      <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/10 md:block" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_65%)]" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <p className="section-label mb-6">
            Level 8
          </p>

          <h2 className="display-title">
            Experience creates
            <br />
            engineering intuition.
          </h2>

          <p className="section-description mx-auto mt-10 max-w-2xl">
            Frontend expertise is built through years of debugging,
            rebuilding, maintaining and improving systems across
            real-world constraints.
          </p>
        </motion.div>

        <div className="relative mt-24 space-y-10 md:mt-32 md:space-y-16">
          {experiences.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
              className={`
                flex items-center

                ${
                  index % 2 === 0
                    ? "justify-start"
                    : "justify-start md:justify-end"
                }
              `}
            >
              <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl md:p-8">
                <div
                  className={`
                    absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-white

                    ${
                      index % 2 === 0
                        ? "hidden md:block -right-[54px]"
                        : "hidden md:block -left-[54px]"
                    }
                  `}
                />

                <span className="text-sm text-zinc-600">
                  0{index + 1}
                </span>

                <h3 className="mt-5 text-xl font-semibold text-white md:mt-6 md:text-2xl">
                  {item}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}