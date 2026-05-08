import { motion } from "framer-motion";

import Card from "../components/Card";
import Reveal from "../components/Reveal";
import Container from "../components/Container";

const logs = [
  "[warning] Infinite render loop detected",
  "[network] API request failed — retrying...",
  "[render] Hydration mismatch on component",
  "[memory] Potential memory leak detected",
  "[debug] State mutation outside reducer",
];

export default function Debugging() {
  return (
    <section
      id="debugging"
      className="section-fade relative overflow-hidden px-6 py-40"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_60%)]" />

        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.03] blur-[120px]" />
      </div>

      <Container className="relative z-10 grid gap-20 lg:grid-cols-2">
        <Reveal>
          <div>
            <p className="section-label">
              Level 4
            </p>

            <h2 className="section-title max-w-xl">
              Debugging is where frontend expertise truly appears.
            </h2>

            <p className="section-description mt-8 max-w-lg">
              Advanced developers isolate problems logically, understand
              rendering flows and identify root causes instead of randomly
              changing code.
            </p>

            <div className="mt-12 space-y-4">
              {[
                "Render loops",
                "Race conditions",
                "Hydration errors",
                "Animation glitches",
                "Memory leaks",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 text-zinc-300"
                >
                  <div className="h-2 w-2 rounded-full bg-white" />

                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <Card className="overflow-hidden p-0">
            <div className="border-b border-white/10 bg-black px-6 py-4">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
              </div>
            </div>

            <div className="space-y-4 bg-[#050505] p-8 font-mono text-sm">
              {logs.map((log, index) => (
                <motion.div
                  key={log}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="flex items-start gap-4"
                >
                  <span className="text-zinc-600">
                    0{index + 1}
                  </span>

                  <span className="text-zinc-300">
                    {log}
                  </span>
                </motion.div>
              ))}
            </div>
          </Card>
        </Reveal>
      </Container>
    </section>
  );
}