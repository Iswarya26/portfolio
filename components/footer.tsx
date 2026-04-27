import { personal } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-8">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <div>© {new Date().getFullYear()} {personal.name}. Built with Next.js & Tailwind.</div>
        <div className="font-mono">deployed_on: netlify · status: <span className="text-primary">healthy</span></div>
      </div>
    </footer>
  );
}
