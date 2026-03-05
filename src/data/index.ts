import { Project, TechItem, Experience } from '../types';

export const projects: Project[] = [
  {
    id: 'powerhop-ops',
    title: 'PowerHop Operations Dashboard',
    badge: 'Internal Platform',
    description:
      'A 4-module fleet management platform for monitoring, locating, and analysing 48V battery units across Nigeria. Built as sole frontend engineer.',
    highlights: [
      'Real-time triage dashboard with 30s auto-polling and severity-based sorting',
      'Geospatial GPS tracking with MapLibre GL JS clustering and fly-to navigation',
      'Client-side aggregation engine with progressive rendering and 90-day cache pre-fetch',
      '127 automated tests across unit, component, and integration layers',
    ],
    techStack: [
      'React 19',
      'TypeScript',
      'TanStack Query',
      'Recharts',
      'MapLibre GL JS',
      'Tailwind CSS v4',
      'Vitest',
    ],
    isInternal: true,
    hasDiagram: true,
    contributionsUrl: 'https://github.com/pnp-ql',
  },
  {
    id: 'powerhop-telemetry',
    title: 'PowerHop Telemetry App',
    badge: 'Production PWA',
    description:
      'Consumer-facing battery monitoring app with live polling, interactive histograms, and drill-down insights across charging, usage, and grid availability.',
    techStack: ['React', 'TypeScript', 'Recharts', 'Tailwind CSS', 'Vite'],
    images: ['/assets/projects/powerhop1.webp', '/assets/projects/powerhop2.webp'],
    liveUrl: 'https://powerhop-qudus.netlify.app/',
    isPrivate: true,
    contributionsUrl: 'https://github.com/pnp-ql',
  },
  {
    id: 'stemmets',
    title: 'STEMMETS',
    badge: 'Contract Project',
    description:
      'E-learning platform with age-based course matching, parent-child accounts, and Paystack payment integration. Reduced form-validation errors by ~40%.',
    techStack: [
      'React',
      'TypeScript',
      'Redux Toolkit',
      'Tailwind CSS',
      'Paystack',
      'Node.js',
    ],
    images: ['/assets/projects/stemmets1.webp', '/assets/projects/stemmets2.webp'],
    liveUrl: 'https://www.stemmets.com/',
    isPrivate: true,
  },
];

export const techStack: TechItem[] = [
  { name: 'React', group: 'framework' },
  { name: 'TypeScript', group: 'framework' },
  { name: 'Next.js', group: 'framework' },
  { name: 'Tailwind CSS', group: 'framework' },
  { name: 'Framer Motion', group: 'framework' },

  { name: 'TanStack Query', group: 'state' },
  { name: 'Redux Toolkit', group: 'state' },

  { name: 'Recharts', group: 'visual' },
  { name: 'MapLibre GL JS', group: 'visual' },

  { name: 'Vitest', group: 'testing' },
  { name: 'React Testing Library', group: 'testing' },

  { name: 'Vite', group: 'tooling' },
  { name: 'Git', group: 'tooling' },
  { name: 'Linear', group: 'tooling' },
  { name: 'ESLint', group: 'tooling' },

  { name: 'Node.js', group: 'tooling' },
  { name: 'Express', group: 'tooling' },
  { name: 'MongoDB', group: 'tooling' },
];

export const experiences: Experience[] = [
  {
    company: 'VN Technologies ApS (PowerHop)',
    role: 'Frontend Engineer',
    period: 'Jan 2025 – Present',
  },
  {
    company: 'STEMMETS',
    role: 'Frontend Engineer (Contract)',
    period: 'Aug 2024 – Jan 2025',
  },
  {
    company: 'Zulfah Group',
    role: 'Software Engineer',
    period: '2023 – 2024',
  },
];
