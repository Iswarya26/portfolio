"use client";

import { motion } from "framer-motion";
import { personal } from "@/lib/data";
import { SectionHeading } from "./section-heading";
import { Github, Linkedin, Mail, Phone, Download } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 border-t border-border/60">
      <div className="container">
        <SectionHeading
          eyebrow="// contact"
          title="Let's build something reliable together"
          description="Open to senior DevOps / SRE / Platform Engineering roles and interesting collaborations."
        />
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { href: `mailto:${personal.email}`, icon: Mail, label: "Email", value: personal.email },
            { href: `tel:${personal.phone.replace(/\s+/g, "")}`, icon: Phone, label: "Phone", value: personal.phone },
            { href: personal.links.linkedin, icon: Linkedin, label: "LinkedIn", value: "Connect with me" },
            { href: personal.links.github, icon: Github, label: "GitHub", value: "View my code" },
          ].map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group flex items-center gap-4 rounded-xl border border-border bg-card/60 p-5 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                <item.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">{item.label}</div>
                <div className="font-medium group-hover:text-primary transition-colors break-all">{item.value}</div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex justify-center"
        >
          <motion.a
            href={personal.links.resume}
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex h-11 items-center gap-2 rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground hover:opacity-90 transition shadow-lg shadow-primary/25"
          >
            <Download className="h-4 w-4" /> Download Resume (PDF)
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
