'use client';

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  const pillars = [
    {
      title: "Machine Learning & AI",
      desc: "Designing and training deep learning models (CNNs) and Natural Language Processing pipelines using TensorFlow and scikit-learn.",
    },
    {
      title: "Data Engineering",
      desc: "Analyzing datasets, applying feature engineering, and building pipelines using Pandas, NumPy, SQL, and NLTK.",
    },
    {
      title: "Full Stack Integration",
      desc: "Integrating intelligent models into scalable web interfaces using FastAPI, Streamlit, and modern Next.js systems.",
    },
  ];

  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto w-full border-t border-zinc-100 dark:border-zinc-900">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        {/* Left Column - Heading & Quote */}
        <div className="lg:col-span-5 space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <p className="text-xs font-heading font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
              01 / ABOUT ME
            </p>
            <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-zinc-950 dark:text-white">
              My Philosophy.
            </h2>
          </motion.div>
          
          <motion.blockquote
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl sm:text-2xl font-body italic text-zinc-500 dark:text-zinc-400 border-l-2 border-zinc-200 dark:border-zinc-800 pl-6 leading-relaxed"
          >
            &ldquo;Simple is hard. It requires stripping away everything that is non-essential until only the pure, functional core remains.&rdquo;
          </motion.blockquote>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="relative group rounded-xl overflow-hidden border border-zinc-200/60 dark:border-zinc-800/60 shadow-sm aspect-square w-full max-w-[280px] mx-auto lg:mx-0"
          >
            <Image
              src="/profile.jpg"
              alt="Apoorv Aditya Tripathi"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 280px, 280px"
              priority
            />
          </motion.div>
        </div>

        {/* Right Column - Text & Core Pillars */}
        <div className="lg:col-span-7 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="space-y-6 text-base sm:text-lg font-body text-zinc-600 dark:text-zinc-400 leading-relaxed"
          >
            <p>
              I am a Computer Science student at VIT Bhopal University with a strong interest in Machine Learning, Data Science, and algorithmic problem-solving. My experience lies in designing, training, and deploying end-to-end Machine Learning systems, ranging from computer vision plant diagnostics to NLP tweet analysis.
            </p>
            <p>
              My goal is to bridge the gap between machine intelligence and software interfaces. I am passionate about constructing performant, scalable, and responsive web products that expose neural pipelines to users through clean, accessible, and interactive designs.
            </p>
          </motion.div>

          {/* Core Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className="p-5 rounded-lg border border-zinc-200/60 dark:border-zinc-800/60 bg-white dark:bg-zinc-950 shadow-sm"
              >
                <h3 className="text-sm font-heading font-black tracking-tight text-zinc-950 dark:text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs font-body text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
