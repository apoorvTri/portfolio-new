import type { Metadata } from "next";
import { Archivo, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "../components/ThemeContext";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["300", "400", "500", "600", "700", "900"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Apoorv Aditya Tripathi | Machine Learning & Software Engineer",
  description: "Personal portfolio of Apoorv Aditya Tripathi, specializing in Machine Learning pipelines, NLP sentiment analysis, and full-stack AI system architectures.",
  keywords: ["Apoorv Aditya Tripathi", "Machine Learning", "Data Science", "Software Engineer", "Deep Learning", "NLP", "VIT Bhopal"],
  authors: [{ name: "Apoorv Aditya Tripathi" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${archivo.variable} ${spaceGrotesk.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        {/* Inline script to prevent theme flash (FOUC) on load */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="font-body bg-[#FAFAFA] dark:bg-[#09090B] text-zinc-800 dark:text-zinc-200 min-h-screen transition-colors duration-300 antialiased selection:bg-blue-600/20 dark:selection:bg-blue-500/30 selection:text-blue-600 dark:selection:text-blue-400">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
