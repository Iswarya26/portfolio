import { about, stats } from "@/lib/data";
import { SectionHeading } from "./section-heading";

export function About() {
  return (
    <section id="about" className="py-20 border-t border-border/60">
      <div className="container">
        <SectionHeading eyebrow="// about" title="About me" />
        <div className="grid lg:grid-cols-3 gap-8">
          <p className="lg:col-span-2 text-lg text-muted-foreground leading-relaxed">{about}</p>
          <div className="grid grid-cols-2 gap-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-border bg-card/60 p-4 hover:border-primary/40 transition-colors"
              >
                <div className="text-2xl font-bold gradient-text">{s.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
