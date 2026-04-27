"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { SectionHeading } from "./section-heading";

export function Skills() {
  return (
    <section id="skills" className="py-20 border-t border-border/60">
      <div className="container">
        <SectionHeading
          eyebrow="// skills"
          title="Tools & technologies"
          description="The stack I reach for to ship reliable, secure, and cost-efficient infrastructure."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((g, index) => (
            <motion.div
              key={g.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="rounded-xl border border-border bg-card/60 p-5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <h3 className="text-sm font-semibold mb-3">{g.category}</h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.1 }}
                    className="inline-flex items-center rounded-md border border-border bg-secondary/50 px-2 py-1 text-xs font-mono hover:border-primary/50 hover:text-primary hover:bg-primary/15 transition-colors cursor-default"
                  >
                    {i}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
