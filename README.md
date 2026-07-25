# Apoorv Aditya Tripathi — Personal Portfolio

A modern, highly performant, and minimalist personal portfolio website built to showcase my background in Computer Science, Machine Learning, Data Science, and Software Engineering. 

Live Demo: [https://portfolio-new-ten-pi.vercel.app/](https://portfolio-new-ten-pi.vercel.app/)

---

## 🚀 Tech Stack & Architecture

- **Framework**: Next.js (App Router, React, TypeScript)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion (spring-physics transitions and staggered section entry reveals)
- **Icons**: Lucide React + custom inline SVGs (for brand profiles)
- **Email Routing**: FormSubmit AJAX Integration (direct client-to-inbox routing)
- **Typography**: Next.js-optimized Google Fonts (`Archivo` for headings & `Space Grotesk` for body)

---

## 🎨 Core Design Principles & Features

- **Exaggerated Minimalism**: Generous whitespace, high-contrast monochrome tones (slate/zinc), clean outlines, and large typographic statements.
- **Hydration-Safe Dark Mode**: A client-side theme switcher synced with local storage, combined with an inline head script to prevent light-theme load flashes (FOUC).
- **Interactive Project Showcase**: Dynamic project grid animated with Framer Motion `layout` tags for smooth category filtering.
- **Accessibility (A11y)**: Built with semantic HTML5 elements (`<header>`, `<main>`, `<section>`, `<footer>`), responsive fluid text parameters, proper contrast, and keyboard navigation.

---

## 📂 Project Showcase

1. **Agriguard - Plant Disease Detection System**: An image classification convolutional neural network (CNN) identifying plant illnesses from leaf images, with Grad-CAM visual region explanation layers. Built with **Python, TensorFlow, Keras, OpenCV, and Streamlit**.
2. **AI Speech-to-Text Transcriber**: A low-latency streaming transcription service piping live audio streams into a Faster-Whisper transformer backend. Built with **FastAPI, Faster-Whisper, Next.js, and WebSockets**.
3. **Tweet Sentiment Analysis Engine**: An NLP classification pipeline evaluating user tweets into positive, negative, and neutral sentiment scores. Built with **Python, Scikit-learn, Pandas, and NLTK**.

---

## 🛠️ Skills & Capabilities

- **Programming Languages**: Python, Java, C++, SQL, JavaScript
- **Algorithms & Core**: Data Structures & Algorithms (DSA), Machine Learning (ML), Natural Language Processing (NLP), Deep Learning
- **Libraries & Frameworks**: NumPy, Pandas, Scikit-learn, TensorFlow / Keras, OpenCV, FastAPI, Next.js, NLTK
- **Tools & Technologies**: GitHub, Git, Streamlit, JDBC, HTML5 & CSS3

---

## 💻 Local Development

Follow these steps to run the website locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/apoorvTri/portfolio-new.git
   cd portfolio-new
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

4. Build the production application:
   ```bash
   npm run build
   ```
