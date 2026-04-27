"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { personal } from "@/lib/data";

export function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs text-muted-foreground mb-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Available for senior DevOps / SRE roles
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Hi, I'm <span className="gradient-text">{personal.name}</span>.
          </h1>
          <h2 className="mt-3 text-2xl sm:text-3xl font-semibold text-muted-foreground">
            {personal.title}
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            {personal.tagline}
          </p>

          <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" /> {personal.location}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex h-10 items-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
            >
              Get in touch <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={personal.links.resume}
              download
              className="inline-flex h-10 items-center gap-2 rounded-md border border-border bg-secondary/40 px-4 text-sm font-medium hover:bg-secondary transition"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <a
              href={personal.links.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border hover:bg-secondary transition"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={personal.links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border hover:bg-secondary transition"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              aria-label="Email"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border hover:bg-secondary transition"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 max-w-3xl"
        >
          <div className="rounded-xl border border-border bg-card/60 backdrop-blur p-5 font-mono text-sm shadow-lg">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-3 w-3 rounded-full bg-red-500/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <span className="h-3 w-3 rounded-full bg-green-500/80" />
              <span className="ml-2 text-xs text-muted-foreground">~/iswarya — bash</span>
            </div>
            <pre className="whitespace-pre-wrap leading-6 text-muted-foreground">
<span className="text-primary">$</span> whoami{"\n"}
{personal.name.toLowerCase().replace(" ", "_")}{"\n"}
<span className="text-primary">$</span> cat skills.txt{"\n"}
aws · terraform · docker · ecs · jenkins · python · ansible · datadog · elk{"\n"}
<span className="text-primary">$</span> uptime{"\n"}
4+ years · 1000+ spot instances/mo · 100% security hub compliance
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
