export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: 'ml' | 'nlp' | 'fullstack';
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
}
