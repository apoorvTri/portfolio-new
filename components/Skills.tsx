'use client';

import { motion } from "framer-motion";
import { SkillCategory } from "../types";

const skillsData: SkillCategory[] = [
  {
    name: "Programming Languages",
    skills: ["Python", "Java", "C++", "SQL", "JavaScript"],
  },
  {
    name: "Algorithms & Core",
    skills: ["Data Structures & Algorithms (DSA)", "Machine Learning (ML)", "Natural Language Processing (NLP)", "Deep Learning"],
  },
  {
    name: "Libraries & Frameworks",
    skills: ["NumPy", "Pandas", "Scikit-learn", "TensorFlow / Keras", "OpenCV", "FastAPI", "Next.js", "NLTK"],
  },
  {
    name: "Tools & Technologies",
    skills: ["GitHub", "Git", "Streamlit", "JDBC", "HTML5 & CSS3"],
  },
];

export default function Skills() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
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
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto w-full border-t border-zinc-100 dark:border-zinc-900">
      <div className="space-y-12">
        {/* Section Heading */}
        <div className="space-y-4">
          <p className="text-xs font-heading font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            03 / TECHNICAL CAPABILITIES
          </p>
          <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-zinc-950 dark:text-white">
            Skills & Stack.
          </h2>
        </div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {skillsData.map((category) => (
            <motion.div
              key={category.name}
              variants={cardVariants}
              className="p-6 sm:p-8 rounded-xl border border-zinc-200/60 dark:border-zinc-800/60 bg-white dark:bg-zinc-950 shadow-sm space-y-6"
            >
              <h3 className="text-lg font-heading font-black tracking-tight text-zinc-950 dark:text-white border-b border-zinc-100 dark:border-zinc-900 pb-3">
                {category.name}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="px-3.5 py-1.5 text-xs font-body font-semibold rounded-lg bg-zinc-50 dark:bg-zinc-900/40 text-zinc-800 dark:text-zinc-200 border border-zinc-200/50 dark:border-zinc-800/50 hover:border-blue-600 dark:hover:border-blue-500 hover:bg-white dark:hover:bg-zinc-900 transition-colors duration-250 select-none shadow-sm cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
