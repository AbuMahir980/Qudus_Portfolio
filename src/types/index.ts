export interface Project {
  id: string;
  title: string;
  badge: string;
  description: string;
  highlights?: string[];
  images?: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  contributionsUrl?: string;
  isPrivate?: boolean;
  isInternal?: boolean;
  hasDiagram?: boolean;
}

export interface TechItem {
  name: string;
  group: 'framework' | 'state' | 'visual' | 'testing' | 'tooling';
}

export interface Experience {
  company: string;
  role: string;
  period: string;
}
