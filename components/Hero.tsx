'use client';

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex flex-col justify-center items-start pt-32 pb-16 px-6 max-w-6xl mx-auto w-full"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full space-y-8"
      >


        {/* Big Statement Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl md:text-8xl font-heading font-black tracking-tight leading-[0.95] text-zinc-950 dark:text-white max-w-5xl"
        >
          Engineering <span className="text-blue-600 dark:text-blue-500">intelligent models</span> and scalable systems.
        </motion.h1>

        {/* Short Bio */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl font-body max-w-2xl text-zinc-600 dark:text-zinc-400 leading-relaxed"
        >
          Hi, I&apos;m <span className="font-extrabold text-blue-600 dark:text-blue-500">Apoorv Aditya Tripathi</span>. A Computer Science undergraduate specializing in real-time AI/ML pipelines and scalable full-stack web applications.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center gap-4 pt-4"
        >
          <button
            onClick={() => handleScrollTo("#projects")}
            className="group px-6 py-3.5 rounded-lg bg-zinc-950 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-950 font-body font-semibold hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-white transition-colors duration-300 shadow-sm cursor-pointer"
          >
            View Projects
          </button>
          
          <button
            onClick={() => handleScrollTo("#contact")}
            className="px-6 py-3.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-transparent text-zinc-800 dark:text-zinc-200 font-body font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors duration-300 cursor-pointer"
          >
            Get in Touch
          </button>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-50 font-body font-semibold transition-colors group cursor-pointer"
          >
            Resume 
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>
      </motion.div>

      {/* Down Scroll Indicator */}
      <div className="absolute bottom-8 left-6 hidden md:block">
        <motion.button
          onClick={() => handleScrollTo("#projects")}
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex items-center gap-2 text-xs font-body font-bold text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors cursor-pointer"
        >
          Scroll Down <ArrowDown className="w-3 h-3" />
        </motion.button>
      </div>
    </section>
  );
}
