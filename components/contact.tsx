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
          <a
            href={`mailto:${personal.email}`}
            className="group flex items-center gap-4 rounded-xl border border-border bg-card/60 p-5 hover:border-primary/50 transition-colors"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Email</div>
              <div className="font-medium group-hover:text-primary transition-colors break-all">
                {personal.email}
              </div>
            </div>
          </a>
          <a
            href={`tel:${personal.phone.replace(/\s+/g, "")}`}
            className="group flex items-center gap-4 rounded-xl border border-border bg-card/60 p-5 hover:border-primary/50 transition-colors"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Phone</div>
              <div className="font-medium group-hover:text-primary transition-colors">{personal.phone}</div>
            </div>
          </a>
          <a
            href={personal.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-4 rounded-xl border border-border bg-card/60 p-5 hover:border-primary/50 transition-colors"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Linkedin className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">LinkedIn</div>
              <div className="font-medium group-hover:text-primary transition-colors">Connect with me</div>
            </div>
          </a>
          <a
            href={personal.links.github}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-4 rounded-xl border border-border bg-card/60 p-5 hover:border-primary/50 transition-colors"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Github className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">GitHub</div>
              <div className="font-medium group-hover:text-primary transition-colors">View my code</div>
            </div>
          </a>
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href={personal.links.resume}
            download
            className="inline-flex h-11 items-center gap-2 rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
          >
            <Download className="h-4 w-4" /> Download Resume (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}
