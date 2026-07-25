'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Project } from "../types";

const projectsData: Project[] = [
  {
    id: "agriguard",
    title: "Agriguard - Plant Disease Detection System",
    description: "An image classification system built to detect and classify plant diseases from leaf images. Employs CNN architectures, advanced data augmentations, and Grad-CAM layers to generate visual regional explanations.",
    tech: ["Python", "TensorFlow", "Keras", "OpenCV", "Streamlit"],
    githubUrl: "https://github.com/apoorvTri/Agriguard",
    featured: true,
    category: "ml",
  },
  {
    id: "speech-to-text",
    title: "AI Speech-to-Text Transcriber",
    description: "A real-time, scalable AI Speech-to-Text streaming service developed during my AI internship. Uses FastAPI and custom WebSocket streams to pipe live audio into a Faster-Whisper transformer engine.",
    tech: ["FastAPI", "Faster-Whisper", "Next.js", "Python", "WebSockets"],
    githubUrl: "https://github.com/apoorvTri/stt-service",
    featured: true,
    category: "fullstack",
  },
  {
    id: "sentiment-analysis",
    title: "Tweet Sentiment Analysis Engine",
    description: "A natural language processing system that classifies user tweets into positive, negative, or neutral sentiment scores. Employs TF-IDF features and a trained Logistic Regression classifier.",
    tech: ["Python", "Scikit-learn", "Pandas", "NLTK"],
    githubUrl: "https://github.com/apoorvTri",
    featured: true,
    category: "nlp",
  },
];

type FilterCategory = "all" | "ml" | "nlp" | "fullstack";

export default function Projects() {
  const [filter, setFilter] = useState<FilterCategory>("all");

  const filteredProjects = projectsData.filter(
    (project) => filter === "all" || project.category === filter
  );

  const categories: { name: string; value: FilterCategory }[] = [
    { name: "All Work", value: "all" },
    { name: "Machine Learning", value: "ml" },
    { name: "NLP", value: "nlp" },
    { name: "Full Stack AI", value: "fullstack" },
  ];

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto w-full border-t border-zinc-100 dark:border-zinc-900">
      <div className="space-y-12">
        {/* Section Heading */}
        <div className="space-y-4">
          <p className="text-xs font-heading font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            02 / SELECTED WORK
          </p>
          <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-zinc-950 dark:text-white">
            Projects.
          </h2>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center gap-2 border-b border-zinc-100 dark:border-zinc-900 pb-6">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              className={`px-4 py-2 text-xs font-body font-semibold rounded-full transition-all duration-200 cursor-pointer ${
                filter === cat.value
                  ? "bg-zinc-950 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-950"
                  : "bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-xl border border-zinc-200/60 dark:border-zinc-800/60 bg-white dark:bg-zinc-950 shadow-sm hover:border-blue-600/50 dark:hover:border-blue-500/50 transition-all duration-300 hover:shadow-md"
              >
                <div className="space-y-4">
                  {/* Category Badge */}
                  <span className="inline-block text-[10px] font-heading font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                    {project.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-heading font-black tracking-tight text-zinc-950 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-500 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base font-body text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tech.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[10px] font-body font-semibold rounded bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200/40 dark:border-zinc-800/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Links */}
                <div className="flex items-center gap-4 mt-8 pt-4 border-t border-zinc-100 dark:border-zinc-900/50">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-body font-bold text-zinc-800 dark:text-zinc-200 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
                      aria-label={`Visit live demo for ${project.title}`}
                    >
                      Live Demo <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-body font-bold text-zinc-800 dark:text-zinc-200 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
                      aria-label={`View GitHub repository for ${project.title}`}
                    >
                      Source Code <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-3.5 h-3.5"
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
