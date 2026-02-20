import { Project } from '../types';

export const projects: Project[] = [
    {
        id: 'powerhop',
        title: 'PowerHop',
        description: 'IoT Energy Telemetry platform for real-time battery and solar/grid monitoring.',
        image: '/assets/projects/powerhop.webp',
        specs: {
            overview: 'A comprehensive IoT dashboard designed to visualize complex energy telemetry from solar and grid charging systems.',
            challenge: 'Transforming raw battery telemetry and charging trends into intuitive, high-performance visualizations within a legacy-heavy ecosystem.',
            solution: 'Engineered complex Recharts-driven histograms for battery telemetry. Redesigned the full API field specifications and mobile-responsive UX flows from scratch.'
        },
        blueprint: {
            title: 'Energy Telemetry API Contract',
            type: 'api',
            language: 'json',
            code: `{
  "battery_id": "PH-9800",
  "telemetry": {
    "voltage": 52.4,
    "current": 12.5,
    "state_of_charge": 88,
    "temperature": 32.5
  },
  "source": "solar",
  "timestamp": "2024-02-19T10:00:00Z"
}`
        },
        tools: [
            { name: 'React', icon: 'react' },
            { name: 'TypeScript', icon: 'typescript' },
            { name: 'Recharts', icon: 'recharts' },
            { name: 'Tailwind CSS', icon: 'tailwind' }
        ],
        github: 'https://github.com/AbuMahir980/PowerHop',
        live: 'https://powerhop.energy',
        isFeatured: true
    },
    {
        id: 'stem-mets',
        title: 'STEM METS',
        description: 'Complex logic E-Learning platform with dynamic course matching.',
        image: '/assets/projects/stem-mets.webp',
        specs: {
            overview: 'An e-learning platform focusing on robotics and STEM education for children.',
            challenge: 'Solving the "Parent-Child" relationship logic—dynamically matching robotics courses to specific child age brackets within a single checkout flow.',
            solution: 'Implemented strict Formik validation and optimized state management using React Context. Reduced onboarding errors by 40%.'
        },
        blueprint: {
            title: 'Course Matching Logic Schema',
            type: 'schema',
            language: 'sql',
            code: `CREATE TABLE enrollments (
  id INT PRIMARY KEY,
  parent_id INT FOREIGN KEY REFERENCES parents(id),
  child_id INT FOREIGN KEY REFERENCES children(id),
  course_id INT FOREIGN KEY REFERENCES courses(id),
  age_at_enrollment INT,
  status VARCHAR(20)
);`
        },
        tools: [
            { name: 'React', icon: 'react' },
            { name: 'Node.js', icon: 'node' },
            { name: 'MySQL', icon: 'mysql' },
            { name: 'Paystack', icon: 'payment' }
        ],
        github: 'https://github.com/AbuMahir980/STEM-METS',
        live: 'https://stem-mets.com'
    },
    {
        id: 'arc-kitchen',
        title: 'The Arc Kitchen',
        description: 'High-performance refactor of a cloud-based kitchen platform.',
        image: '/assets/projects/arc-kitchen.webp',
        specs: {
            overview: 'A performance-first refactor of a legacy food delivery and management system.',
            challenge: 'Legacy JSX codebase with sub-optimal loading times and inconsistent state handling.',
            solution: 'Total refactor to TypeScript. Implemented 90+ Lighthouse performance scores through WebP conversion and lazy-loading strategies.'
        },
        blueprint: {
            title: 'Performance Optimization Flow',
            type: 'flow',
            language: 'mermaid',
            code: `graph TD
  A[Legacy JSX] --> B[TypeScript Refactor]
  B --> C[WebP Conversion]
  C --> D[Lazy Loading]
  D --> E[Lighthouse 90+]`
        },
        tools: [
            { name: 'React', icon: 'react' },
            { name: 'TypeScript', icon: 'typescript' },
            { name: 'Tailwind CSS', icon: 'tailwind' },
            { name: 'Vite', icon: 'vite' }
        ],
        github: 'https://github.com/AbuMahir980/ArcKitchen',
        live: 'https://thearckitchen.netlify.app/'
    },
    {
        id: 'remsy',
        title: 'Remsy Driving School',
        description: 'Service-based platform with custom EmailJS integration and dynamic cost calculation.',
        image: '/assets/projects/remsy.webp',
        specs: {
            overview: 'A conversion-focused professional site for a driving school business.',
            challenge: 'Automating lead generation and service booking with custom logic for dynamic cost calculation based on selected courses.',
            solution: 'Integrated EmailJS for serverless lead capture and engineered a custom pricing engine using React state. Improved conversion rate by 25%.'
        },
        blueprint: {
            title: 'Pricing Calculation Engine',
            type: 'flow',
            language: 'javascript',
            code: `const calculateCost = (basePrice, courseCount) => {
  const discount = courseCount > 5 ? 0.1 : 0;
  return (basePrice * courseCount) * (1 - discount);
};`
        },
        tools: [
            { name: 'React', icon: 'react' },
            { name: 'EmailJS', icon: 'email' },
            { name: 'Tailwind CSS', icon: 'tailwind' }
        ],
        live: 'https://remsydrivingschool.com'
    },
    {
        id: 'zulfah',
        title: 'Zulfah Foundation & Group',
        description: 'Multi-tenant SaaS platform and foundation site with secure REST API integrations.',
        image: '/assets/projects/zulfah.webp',
        specs: {
            overview: 'Corporate and foundation ecosystem for a diverse business group.',
            challenge: 'Managing secondary logic for multi-tenant SaaS transactional email flows and secure REST API integrations.',
            solution: 'Technical Lead for architecture design. Engineered secure authentication flows and transactional email templates for scalable growth.'
        },
        blueprint: {
            title: 'SaaS API Integration Schema',
            type: 'api',
            language: 'json',
            code: `{
  "org_id": "ZF-001",
  "integration": "SendGrid",
  "status": "connected",
  "last_sync": "2024-02-19T11:30:00Z"
}`
        },
        tools: [
            { name: 'Node.js', icon: 'node' },
            { name: 'Express', icon: 'express' },
            { name: 'React', icon: 'react' },
            { name: 'SaaS Architecture', icon: 'saas' }
        ],
        live: 'https://zulfahfoundation.org'
    }
];
