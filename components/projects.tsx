import { projects } from "@/lib/data";
import { SectionHeading } from "./section-heading";
import { CheckCircle2, Sparkles, Target } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="py-20 border-t border-border/60">
      <div className="container">
        <SectionHeading
          eyebrow="// projects"
          title="Featured projects"
          description="Selected work spanning DevOps automation, AI-driven data security, and orchestration tooling."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.name}
              className="group relative rounded-2xl border border-border bg-card/60 p-6 hover:border-primary/50 transition-colors flex flex-col"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="text-xl font-bold">{p.name}</h3>
                {p.badge && (
                  <span className="inline-flex items-center gap-1 rounded-full border border-primary/40 bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                    {p.badge}
                  </span>
                )}
              </div>
              <p className="text-sm text-muted-foreground mb-5">{p.tagline}</p>

              <div className="space-y-4 text-sm flex-1">
                <div>
                  <div className="flex items-center gap-2 text-foreground/90 font-semibold mb-1.5">
                    <Target className="h-4 w-4 text-primary" /> Problem
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{p.problem}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-foreground/90 font-semibold mb-1.5">
                    <Sparkles className="h-4 w-4 text-primary" /> Solution
                  </div>
                  <ul className="space-y-1.5">
                    {p.solution.map((s, i) => (
                      <li key={i} className="flex gap-2 text-muted-foreground">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-foreground/90 font-semibold mb-1.5">
                    <CheckCircle2 className="h-4 w-4 text-primary" /> Impact
                  </div>
                  <ul className="space-y-1.5">
                    {p.impact.map((s, i) => (
                      <li key={i} className="flex gap-2 text-muted-foreground">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-5 pt-5 border-t border-border flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="inline-flex items-center rounded-md border border-border bg-secondary/40 px-2 py-0.5 text-[11px] font-mono text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
