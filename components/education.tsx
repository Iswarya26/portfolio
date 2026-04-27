"use client";

import { motion } from "framer-motion";
import { education, languages } from "@/lib/data";
import { SectionHeading } from "./section-heading";
import { GraduationCap, Languages } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-20 border-t border-border/60">
      <div className="container grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <SectionHeading eyebrow="// education" title="Education" />
          <div className="space-y-4">
            {education.map((e, index) => (
              <motion.div
                key={e.degree + e.period}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ x: 4, scale: 1.01 }}
                className="flex gap-4 rounded-xl border border-border bg-card/60 p-5 hover:border-primary/40 hover:shadow-md transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary"
                >
                  <GraduationCap className="h-5 w-5" />
                </motion.div>
                <div className="flex-1">
                  <div className="flex flex-wrap justify-between gap-2">
                    <h3 className="font-semibold">{e.degree}</h3>
                    <span className="text-xs font-mono text-muted-foreground">{e.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{e.school}</p>
                  <p className="text-xs text-primary mt-1">{e.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <SectionHeading eyebrow="// languages" title="Languages" />
          <div className="space-y-3">
            {languages.map((l, index) => (
              <motion.div
                key={l.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ x: -4, scale: 1.02 }}
                className="flex items-center gap-3 rounded-xl border border-border bg-card/60 p-4 hover:border-primary/40 hover:shadow-md transition-all duration-300"
              >
                <motion.div whileHover={{ scale: 1.2 }} className="text-primary">
                  <Languages className="h-4 w-4" />
                </motion.div>
                <span className="font-medium">{l.name}</span>
                <span className="ml-auto text-xs font-mono text-muted-foreground">{l.level}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
