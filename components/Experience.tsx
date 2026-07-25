'use client';

import { motion } from "framer-motion";
import { ExperienceItem } from "../types";

const experienceData: ExperienceItem[] = [
  {
    id: "ai-intern",
    role: "AI Intern",
    company: "1Ansah Technologies Pvt. Ltd.",
    location: "Lucknow, Uttar Pradesh",
    duration: "May 2026 – June 2026",
    description: [
      "Designed and coded a scalable, real-time AI Speech-to-Text streaming service.",
      "Integrated FastAPI backend structures to pipe and manage live audio streams.",
      "Implemented a Faster-Whisper transformer engine for low-latency voice transcription and synced it with a responsive Next.js interface."
    ],
  }
];

const educationData = [
  {
    institution: "VIT Bhopal University",
    degree: "B.Tech in Computer Science",
    grade: "CGPA - 8.97",
    duration: "Aug 2023 – Present",
    location: "Sehore, Madhya Pradesh",
  },
  {
    institution: "Rani Laxmi Bai Memorial School",
    degree: "Class XII (CBSE)",
    grade: "Percentage - 92.4%",
    duration: "Apr 2021 – May 2023",
    location: "Lucknow, Uttar Pradesh",
  },
  {
    institution: "Little Flower School",
    degree: "Class X (ICSE)",
    grade: "Percentage - 94%",
    duration: "Apr 2009 – Apr 2021",
    location: "Maharajganj, Uttar Pradesh",
  },
];

const achievementsData = [
  "GATE 2026 CS Qualified (GATE Score: 468)",
  "NPTEL Introduction to Machine Learning Certification",
  "Google Bits and Bytes of Computer Networks Certification",
  "Ethnus MERN Full Stack Certification",
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-6xl mx-auto w-full border-t border-zinc-100 dark:border-zinc-900">
      <div className="space-y-24">
        
        {/* Section 1 - Experience */}
        <div className="space-y-12">
          <div className="space-y-4">
            <p className="text-xs font-heading font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
              04 / CAREER HISTORY
            </p>
            <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-zinc-950 dark:text-white">
              Experience.
            </h2>
          </div>

          <div className="relative border-l border-zinc-200 dark:border-zinc-800 ml-4 md:ml-6 space-y-12 pb-4">
            {experienceData.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="relative pl-8 md:pl-10 group"
              >
                <div className="absolute -left-[6px] top-1.5 w-3 h-3 rounded-full border-2 border-zinc-900 dark:border-zinc-50 bg-white dark:bg-zinc-950 group-hover:bg-blue-600 dark:group-hover:bg-blue-500 group-hover:border-blue-600 dark:group-hover:border-blue-500 transition-colors duration-300" />

                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-1">
                    <div>
                      <h3 className="text-lg sm:text-xl font-heading font-black tracking-tight text-zinc-950 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-500 transition-colors">
                        {item.role}
                      </h3>
                      <p className="text-sm font-body font-semibold text-zinc-500 dark:text-zinc-400">
                        {item.company} &bull; <span className="font-normal text-xs">{item.location}</span>
                      </p>
                    </div>
                    <div className="inline-block text-xs font-body font-bold text-zinc-400 dark:text-zinc-500 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 px-2.5 py-1 rounded-md self-start md:self-auto">
                      {item.duration}
                    </div>
                  </div>

                  <ul className="space-y-2.5 max-w-4xl text-sm sm:text-base font-body text-zinc-600 dark:text-zinc-400 leading-relaxed list-disc list-outside pl-4">
                    {item.description.map((bullet, bIdx) => (
                      <li key={bIdx}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 2 - Education & Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 pt-6 border-t border-zinc-100 dark:border-zinc-900/50">
          
          {/* Education Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <p className="text-xs font-heading font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                05 / ACADEMIC BACKGROUND
              </p>
              <h3 className="text-2xl sm:text-4xl font-heading font-black tracking-tight text-zinc-950 dark:text-white">
                Education.
              </h3>
            </div>

            <div className="space-y-8">
              {educationData.map((edu, idx) => (
                <motion.div
                  key={edu.institution}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  className="space-y-2 relative pl-6 border-l-2 border-zinc-200 dark:border-zinc-800 focus-within:border-blue-500 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h4 className="text-base sm:text-lg font-heading font-black text-zinc-950 dark:text-white">
                      {edu.institution}
                    </h4>
                    <span className="text-xs font-body font-bold text-zinc-400 dark:text-zinc-500">
                      {edu.duration}
                    </span>
                  </div>
                  <p className="text-sm font-body font-semibold text-zinc-600 dark:text-zinc-400">
                    {edu.degree} &bull; <span className="text-xs text-blue-600 dark:text-blue-500 font-bold">{edu.grade}</span>
                  </p>
                  <p className="text-xs font-body text-zinc-400 dark:text-zinc-500">
                    {edu.location}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications & Achievements Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <p className="text-xs font-heading font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                06 / CREDENTIALS
              </p>
              <h3 className="text-2xl sm:text-4xl font-heading font-black tracking-tight text-zinc-950 dark:text-white">
                Achievements.
              </h3>
            </div>

            <div className="space-y-4">
              {achievementsData.map((ach, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  className="flex items-start gap-3 p-4 rounded-xl border border-zinc-200/50 dark:border-zinc-800/50 bg-white dark:bg-zinc-950/40 shadow-sm"
                >
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-500 mt-2" />
                  <p className="text-sm font-body font-semibold text-zinc-700 dark:text-zinc-300">
                    {ach}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
