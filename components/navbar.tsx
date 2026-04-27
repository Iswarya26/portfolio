"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Download, Menu, X, Terminal } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { navLinks, personal } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all",
        scrolled ? "glass shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-mono font-semibold">
          <Terminal className="h-5 w-5 text-primary" />
          <span>iswarya<span className="text-primary">.devops</span></span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navLinks.map((l) => (
            <motion.a
              key={l.href}
              href={l.href}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </motion.a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          <motion.a
            href={personal.links.resume}
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex h-9 items-center gap-2 rounded-md bg-primary px-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition shadow-lg shadow-primary/25"
          >
            <Download className="h-4 w-4" /> Resume
          </motion.a>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <motion.button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border hover:bg-secondary transition"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </motion.button>
        </div>
      </div>

      {open && (
        <div className="md:hidden glass border-t border-border">
          <div className="container py-4 flex flex-col gap-3">
            {navLinks.map((l) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                whileHover={{ x: 4 }}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </motion.a>
            ))}
            <motion.a
              href={personal.links.resume}
              download
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex h-9 items-center justify-center gap-2 rounded-md bg-primary px-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25"
            >
              <Download className="h-4 w-4" /> Resume
            </motion.a>
          </div>
        </div>
      )}
    </header>
  );
}
