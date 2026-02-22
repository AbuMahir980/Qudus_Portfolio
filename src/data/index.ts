import { Project } from '../types';

export const projects: Project[] = [
    {
        id: 'powerhop',
        title: 'PowerHop',
        category: 'production',
        status: 'Deployed',
        description: 'IoT Energy Telemetry platform for real-time battery and solar/grid monitoring.',
        images: ['/assets/projects/powerhop1.webp', '/assets/projects/powerhop2.webp'],
        specs: {
            overview: 'A comprehensive IoT dashboard designed to visualize complex energy telemetry from solar and grid charging systems.',
            challenge: 'Transforming raw battery telemetry and charging trends into intuitive, high-performance visualizations within a legacy-heavy ecosystem.',
            solution: 'Engineered complex Recharts-driven histograms for battery telemetry. Redesigned the full API field specifications and mobile-responsive UX flows from scratch.'
        },
        tools: [
            { name: 'React', icon: 'react' },
            { name: 'TypeScript', icon: 'typescript' },
            { name: 'Recharts', icon: 'recharts' },
            { name: 'Tailwind CSS', icon: 'tailwind' }
        ],
        github: 'https://github.com/AbuMahir980/PowerHop',
        live: 'https://powerhop-qudus.netlify.app',
        isFeatured: true
    },
    {
        id: 'stem-mets',
        title: 'STEM METS',
        category: 'production',
        status: 'Active',
        description: 'Complex logic E-Learning platform with dynamic course matching.',
        images: ['/assets/projects/stemmets1.webp', '/assets/projects/stemmets2.webp'],
        specs: {
            overview: 'An e-learning platform focusing on robotics and STEM education for children.',
            challenge: 'Solving the "Parent-Child" relationship logic—dynamically matching robotics courses to specific child age brackets within a single checkout flow.',
            solution: 'Implemented strict Formik validation and optimized state management using React Context. Reduced onboarding errors by 40%.'
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
        category: 'production',
        status: 'Active',
        description: 'High-performance refactor of a cloud-based kitchen platform.',
        images: ['/assets/projects/arckitchen1.webp', '/assets/projects/arckitchen2.webp'],
        specs: {
            overview: 'A performance-first refactor of a legacy food delivery and management system.',
            challenge: 'Legacy JSX codebase with sub-optimal loading times and inconsistent state handling.',
            solution: 'Total refactor to TypeScript. Implemented 90+ Lighthouse performance scores through WebP conversion and lazy-loading strategies.'
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
        category: 'production',
        status: 'Active',
        description: 'Service-based platform with custom EmailJS integration and dynamic cost calculation.',
        images: ['/assets/projects/remsy1.webp', '/assets/projects/remsy2.webp'],
        specs: {
            overview: 'A conversion-focused professional site for a driving school business.',
            challenge: 'Automating lead generation and service booking with custom logic for dynamic cost calculation based on selected courses.',
            solution: 'Integrated EmailJS for serverless lead capture and engineered a custom pricing engine using React state. Improved conversion rate by 25%.'
        },
        tools: [
            { name: 'React', icon: 'react' },
            { name: 'EmailJS', icon: 'email' },
            { name: 'Tailwind CSS', icon: 'tailwind' }
        ],
        github: 'https://github.com/AbuMahir980/Remsy',
        live: 'https://remsydrivingschool.com'
    }
];
