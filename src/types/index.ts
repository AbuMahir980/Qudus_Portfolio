export interface TechStack {
  name: string;
  icon: string | React.ComponentType;
}

export interface ProjectSpecs {
  overview: string;
  challenge: string;
  solution: string;
}

export interface ProjectBlueprint {
  title: string;
  type: 'api' | 'schema' | 'flow';
  language: string;
  code: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'production' | 'sandbox';
  status: string;
  description: string;
  images: string[];
  specs: ProjectSpecs;
  tools: TechStack[];
  github?: string;
  live?: string;
  isFeatured?: boolean;
}

export interface ProfessionalHistory {
  company: string;
  role: string;
  location: string;
  period: string;
  description: string[];
  logo?: string;
}

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
}
