'use client';

import { ArrowUp } from "lucide-react";

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-100 dark:border-zinc-900 bg-white dark:bg-zinc-950 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Copyright */}
        <div className="text-xs font-body text-zinc-500 dark:text-zinc-500 text-center md:text-left">
          &copy; {currentYear} Apoorv. All rights reserved. Designed and coded with Next.js, Tailwind v4 and Framer Motion.
        </div>

        {/* Back to top */}
        <button
          onClick={handleScrollTop}
          className="flex items-center gap-1.5 text-xs font-body font-bold text-zinc-400 dark:text-zinc-500 hover:text-zinc-950 dark:hover:text-zinc-200 transition-colors group cursor-pointer"
          aria-label="Scroll to top of page"
        >
          Back to Top 
          <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
        </button>

      </div>
    </footer>
  );
}
