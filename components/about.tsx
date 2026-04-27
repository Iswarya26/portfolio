"use client";

import { motion } from "framer-motion";
import { about, stats } from "@/lib/data";
import { SectionHeading } from "./section-heading";

export function About() {
  return (
    <section id="about" className="py-20 border-t border-border/60">
      <div className="container">
        <SectionHeading eyebrow="// about" title="About me" />
        <div className="grid lg:grid-cols-3 gap-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 text-lg text-muted-foreground leading-relaxed"
          >
            {about}
          </motion.p>
          <div className="grid grid-cols-2 gap-3">
            {stats.map((s, index) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -4, scale: 1.05 }}
                className="rounded-xl border border-border bg-card/60 p-4 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="text-2xl font-bold gradient-text">{s.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
