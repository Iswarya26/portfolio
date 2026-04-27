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
          {skills.map((g) => (
            <div
              key={g.category}
              className="rounded-xl border border-border bg-card/60 p-5 hover:border-primary/40 transition-colors"
            >
              <h3 className="text-sm font-semibold mb-3">{g.category}</h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <span
                    key={i}
                    className="inline-flex items-center rounded-md border border-border bg-secondary/50 px-2 py-1 text-xs font-mono"
                  >
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
