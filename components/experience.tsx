"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";
import { SectionHeading } from "./section-heading";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-20 border-t border-border/60">
      <div className="container">
        <SectionHeading eyebrow="// experience" title="Where I've worked" />
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border md:left-6" aria-hidden />
          <div className="space-y-10">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.role + exp.period}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative pl-12 md:pl-16"
              >
                <div className="absolute left-0 top-1 flex h-8 w-8 md:h-12 md:w-12 items-center justify-center rounded-full border border-border bg-card">
                  <Briefcase className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                </div>
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="rounded-xl border border-border bg-card/60 p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                    <h3 className="text-lg font-semibold">
                      {exp.role} · <span className="text-primary">{exp.company}</span>
                    </h3>
                    <span className="text-xs font-mono text-muted-foreground">{exp.period}</span>
                  </div>
                  <div className="text-xs text-muted-foreground mb-4">{exp.location}</div>
                  <div className="space-y-5">
                    {exp.groups.map((g, i) => (
                      <div key={i}>
                        {g.title && (
                          <h4 className="text-sm font-semibold text-foreground/90 mb-2">{g.title}</h4>
                        )}
                        <ul className="space-y-2">
                          {g.bullets.map((b, j) => (
                            <li key={j} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
