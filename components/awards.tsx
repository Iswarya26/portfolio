"use client";

import { motion } from "framer-motion";
import { awards } from "@/lib/data";
import { SectionHeading } from "./section-heading";
import { Trophy } from "lucide-react";

export function Awards() {
  return (
    <section id="awards" className="py-20 border-t border-border/60">
      <div className="container">
        <SectionHeading eyebrow="// awards" title="Awards & recognitions" />
        <div className="grid md:grid-cols-2 gap-4">
          {awards.map((a, index) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="flex gap-4 rounded-xl border border-border bg-card/60 p-5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary"
              >
                <Trophy className="h-6 w-6" />
              </motion.div>
              <div>
                <h3 className="font-semibold">{a.title}</h3>
                <p className="text-xs font-mono text-muted-foreground mt-1">{a.where}</p>
                <p className="text-sm text-muted-foreground mt-2">{a.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
