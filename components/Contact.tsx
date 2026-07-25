'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle, AlertCircle } from "lucide-react";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) newErrors.message = "Message cannot be empty.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");

    try {
      const response = await fetch("https://formsubmit.co/ajax/apoorv.trip18@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject || "Contact Form Submission",
          message: form.message
        })
      });

      if (response.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const socialLinks = [
    { name: "GitHub", icon: (props: any) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ), href: "https://github.com/apoorvTri", color: "hover:text-zinc-950 dark:hover:text-white" },
    { name: "LinkedIn", icon: (props: any) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ), href: "https://www.linkedin.com/in/apoorv-tripathi-65919328a", color: "hover:text-blue-700" },
  ];

  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto w-full border-t border-zinc-100 dark:border-zinc-900">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        
        {/* Left Column - Contact Details */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <p className="text-xs font-heading font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
              07 / GET IN TOUCH
            </p>
            <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-zinc-950 dark:text-white">
              Let&apos;s talk.
            </h2>
          </div>

          <p className="text-base sm:text-lg font-body text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-md">
            Have a project in mind, want to discuss frontend architecture, or just looking to say hello? 
            Send a message or find me on digital channels.
          </p>

          <div className="space-y-4 pt-4">
            <div className="text-sm font-heading font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
              Find Me On
            </div>
            <div className="grid grid-cols-2 gap-3 max-w-sm">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-lg border border-zinc-200/60 dark:border-zinc-800/60 bg-white dark:bg-zinc-950 text-xs font-body font-semibold text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-500 hover:border-blue-600/50 dark:hover:border-blue-500/50 hover:bg-blue-50/10 dark:hover:bg-blue-950/10 transition-all duration-200"
                >
                  <link.icon className="w-4 h-4" />
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="lg:col-span-7">
          <motion.div
            layout
            className="p-6 sm:p-8 rounded-xl border border-zinc-200/60 dark:border-zinc-800/60 bg-white dark:bg-zinc-950 shadow-sm"
          >
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center text-center py-12 space-y-4"
                >
                  <CheckCircle className="w-12 h-12 text-emerald-500" />
                  <div className="space-y-2">
                    <h3 className="text-lg font-heading font-black tracking-tight text-zinc-950 dark:text-white">
                      Message Sent!
                    </h3>
                    <p className="text-sm font-body text-zinc-500 dark:text-zinc-400 max-w-sm">
                      Thank you for reaching out. I will read and respond to your email as soon as possible.
                    </p>
                  </div>
                  <button
                    onClick={() => setStatus("idle")}
                    className="px-4 py-2 text-xs font-body font-bold rounded-md border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-900 cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="contact-form"
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-6"
                >
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-xs font-heading font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200"
                    >
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border bg-zinc-50 dark:bg-zinc-900/40 text-sm font-body text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all ${
                        errors.name
                          ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                          : "border-zinc-200 dark:border-zinc-800 focus:border-zinc-900 dark:focus:border-zinc-100"
                      }`}
                      placeholder="e.g. Aarav Sharma"
                    />
                    {errors.name && (
                      <p className="flex items-center gap-1 text-[11px] font-body font-semibold text-red-500">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-xs font-heading font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200"
                    >
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border bg-zinc-50 dark:bg-zinc-900/40 text-sm font-body text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all ${
                        errors.email
                          ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                          : "border-zinc-200 dark:border-zinc-800 focus:border-zinc-900 dark:focus:border-zinc-100"
                      }`}
                      placeholder="e.g. aarav@example.com"
                    />
                    {errors.email && (
                      <p className="flex items-center gap-1 text-[11px] font-body font-semibold text-red-500">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Subject Input */}
                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-xs font-heading font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40 text-sm font-body text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-zinc-900 dark:focus:border-zinc-100 transition-all"
                      placeholder="e.g. Project Inquiry"
                    />
                  </div>

                  {/* Message Input */}
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-xs font-heading font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200"
                    >
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border bg-zinc-50 dark:bg-zinc-900/40 text-sm font-body text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all resize-none ${
                        errors.message
                          ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                          : "border-zinc-200 dark:border-zinc-800 focus:border-zinc-900 dark:focus:border-zinc-100"
                      }`}
                      placeholder="Share project details, timeline, budget..."
                    />
                    {errors.message && (
                      <p className="flex items-center gap-1 text-[11px] font-body font-semibold text-red-500">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-zinc-950 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-950 font-body font-bold hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-white transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {status === "submitting" ? (
                      <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        Send Message <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  {status === "error" && (
                    <p className="flex items-center gap-1.5 justify-center text-xs font-body font-semibold text-red-500">
                      <AlertCircle className="w-4 h-4" /> An error occurred. Please try again.
                    </p>
                  )}
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
