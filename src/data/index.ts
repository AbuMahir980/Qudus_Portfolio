import { Project, Project2 } from '../types';

export const projects: Project[] = [
    {
        id: 'powerhop',
        title: 'PowerHop',
        category: 'production',
        status: 'Deployed',
        description: 'IoT Energy Telemetry platform for real-time battery and solar/grid monitoring.',
        images: ['/assets/projects/powerhop1.webp', '/assets/projects/powerhop2.webp'],
        specs: {
            overview: '• **Energy-tech platform**: Led the frontend pivot from PlugNPower to a telemetry-focused architecture.',
            challenge: '• **Major Pivot**: Adapted 9 months of work to meet new hardware-data requirements.\n• **Data Viz**: Needed to handle real-time telemetrics with zero lag.',
            solution: '• **Strategic Deep-Dive**: Built a custom telemetry dashboard as a feature-owner to prove the logic.\n• **Project Lead**: Transitioned into architecting the Official Ops Dashboard based on my proof-of-concept.\n• **Architecture**: Implemented a standardized, type-safe folder structure for long-term scalability.'
        },
        tools: [
            { name: 'React', icon: 'react' },
            { name: 'TypeScript', icon: 'typescript' },
            { name: 'Recharts', icon: 'recharts' },
            { name: 'Tailwind CSS', icon: 'tailwind' },
            { name: 'Vite', icon: 'vite' }
        ],
        github: 'https://github.com/plugnpower/powerhop-qudus-v1',
        live: 'https://powerhop-qudus.netlify.app',
        isFeatured: true
    },
    {
        id: 'stem-mets',
        title: 'STEM METS',
        category: 'production',
        status: 'Active',
        description: 'E-learning platform for parent-child education. Engineered the customer-facing experience with a focus on logic and premium UI',
        images: ['/assets/projects/stemmets1.webp', '/assets/projects/stemmets2.webp'],
        specs: {
            overview: '• **E-learning platform**: Engineered the customer-facing experience with a focus on logic and premium UI.',
            challenge: '• **Onboarding Friction**: High drop-off rates due to complex account structures.\n• **Logic Gaps**: Inconsistent data validation and state desync issues.',
            solution: "• **The Win**: Reduced sign-up errors by 40% through strict Formik + Yup integration.\n• **State Management**: Stabilized the app's 'brain' using Redux Toolkit for secure, real-time data flows.\n• **Visuals**: Delivered a sleek, mobile-responsive interface optimized for high engagement."
        },
        tools: [
            { name: 'React', icon: 'react' },
            { name: 'Node.js', icon: 'node' },
            { name: 'MySQL', icon: 'mysql' },
            { name: 'Paystack', icon: 'payment' },
            { name: 'Redux Toolkit', icon: 'redux' },
            { name: 'Formik', icon: 'formik' },
            { name: 'Yup', icon: 'yup' },
            { name: 'Tailwind CSS', icon: 'tailwind' },
            { name: 'Vite', icon: 'vite' }
        ],
        github: 'https://github.com/lassbon/stemmets-frontend-customer',
        live: 'https://stemmets.com'
    },
    {
        id: 'arc-kitchen',
        title: 'The Arc Kitchen',
        category: 'production',
        status: 'Active',
        description: 'High-performance refactor of a cloud-based kitchen platform.',
        images: ['/assets/projects/arckitchen1.webp', '/assets/projects/arckitchen2.webp'],
        specs: {
            overview: '• **Cloud Kitchen Platform**: High-conversion landing experience for a cloud kitchen. Focused on bridging the gap between digital discovery and WhatsApp-based ordering.',
            challenge: "• **Scalability**: The MVP needed a professional, type-safe refactor to ensure future stability.\n• **Direct Sales**: Required a friction-less conversion path for a business not yet ready for a full web-app checkout.\n• **Low Visibility**: As a cloud kitchen, organic search (SEO) was critical for discovery, but the initial build wasn't optimized for crawlers or speed.",
            solution: "• **Technical SEO**: Implemented SEO optimizations to ensure online search visibility for local customers.\n• **The Refactor**: Executed a total migration to TypeScript with a standardized, modular folder architecture to eliminate technical debt.\n• **Conversion Logic**: Integrated a direct WhatsApp Ordering API and used Framer Motion for polished, appetite-whetting interactions that drive engagement.",
        },
        tools: [
            { name: 'React', icon: 'react' },
            { name: 'TypeScript', icon: 'typescript' },
            { name: 'Tailwind CSS', icon: 'tailwind' },
            { name: 'Vite', icon: 'vite' },
            { name: 'Framer Motion', icon: 'framer' },
            { name: 'SEO', icon: 'seo' },
        ],
        github: 'https://github.com/AbuMahir980/ArcKitchen',
        live: 'https://thearckitchen.netlify.app/'
    },
    {
        id: 'remsy',
        title: 'Remsy Driving School',
        category: 'production',
        status: 'Active',
        description: 'Lead-generation platform for a professional driving school. Built to automate student inquiries and bridge the gap between discovery and enrollment.',
        images: ['/assets/projects/remsy1.webp', '/assets/projects/remsy2.webp'],
        specs: {
            overview: '• **Service based**: Lead-generation platform for a professional driving school. Built to automate student inquiries and bridge the gap between discovery and enrollment.',
            challenge: '• **Inquiry Friction**: Needed a 24/7 system to capture student leads without manual intervention.\n• **Search Visibility**: Lacked the SEO structure for search visibility.',
            solution: "• **Lead Automation**: Integrated EmailJS for dynamic forms and WhatsApp API for instant customer onboarding.\n• **SEO & Performance**: Executed a TypeScript refactor and technical SEO audit to boost search findings and site speed.\n• **UX Design**: Built intuitive course browsing pages that simplified the enrollment journey."
        },
        tools: [
            { name: 'React', icon: 'react' },
            { name: 'EmailJS', icon: 'email' },
            { name: 'Tailwind CSS', icon: 'tailwind' },
            { name: 'TypeScript', icon: 'typescript' },
            { name: 'SEO', icon: 'seo' },
            { name: 'Framer Motion', icon: 'framer' },
            { name: 'Vite', icon: 'vite' },
        ],
        github: 'https://github.com/AbuMahir980/remzy-driving-school',
        live: 'https://remsydrivingschool.com'
    },
];
export const projects2: Project2[] = [
    {
        id: 'wellness',
        title: 'Wellness & Consultancy',
        category: 'sandbox',
        status: 'Refactored',
        description: 'Mental health and wellness platform with a focus on serene UI/UX and resource management.',
        images: ['/assets/projects/wellness1.webp', '/assets/projects/wellness2.webp'],
        specs2: {
            title: 'A personal deep-dive into Cinematic UI and Modular Architecture.',
            concept: 'This was a technical practice project built to master the intersection of TypeScript for system integrity, Framer Motion for high-fidelity orchestration, and Shadcn UI for a refined, professional design system.',
            highlights: "Engineered a strictly-typed, data-driven architecture featuring 30+ reusable motion variants and a centralized 'Single Source of Truth' for all resource management."
        },
        tools: [
            { name: 'React', icon: 'react' },
            { name: 'Framer Motion', icon: 'framer' },
            { name: 'Tailwind CSS', icon: 'tailwind' },
            { name: 'Vite', icon: 'vite' },
            { name: 'TypeScript', icon: 'typescript' },
            { name: 'Shadcn UI', icon: 'shadcn' },
        ],
        github: 'https://github.com/AbuMahir980/wellness-consultancy',
        live: 'https://wellness-consultancy.netlify.app/'
    },
    {
        id: 'portfolio',
        title: 'Qudus Portfolio (v2)',
        category: 'sandbox',
        status: 'Active',
        description: 'The current "Architectural Digest" inspired portfolio—a study in high-end editorial web design.',
        images: ['/assets/projects/portfolio1.webp', '/assets/projects/portfolio2.webp'],
        specs2: {
            title: 'A high-performance personal portfolio designed to showcase technical mastery through a minimalist, editorial lens.',
            concept: 'Balancing complex animations and structural depth without compromising on performance metrics.',
            highlights: 'Engineered a custom "Feature Slice" architecture allowing for modular project showcases. Integrated a sophisticated dual-mode design system with strict type safety.'
        },
        tools: [
            { name: 'TypeScript', icon: 'typescript' },
            { name: 'React', icon: 'react' },
            { name: 'Framer Motion', icon: 'framer' },
            { name: 'Tailwind CSS', icon: 'tailwind' },
            { name: 'Vite', icon: 'vite' },
            { name: 'Shadcn UI', icon: 'shadcn' },
        ],
        github: 'https://github.com/AbuMahir980/Qudus_Portfolio',
        live: 'https://qudus-portfolio.netlify.app/'
    }
];
