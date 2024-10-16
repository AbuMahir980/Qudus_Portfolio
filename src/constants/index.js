import { frontend, backend, projectMgt, css, html, javascript, git, nodejs, reactjs, redux, tailwind, typescript, figma, genialSata, zulfah, jobScout, expenseTrack, techBrain, opendesk, arckitchen, arcKitchen1 } from '../constants/images'
export const services = [
    {
        id: 0,
        name: 'Frontend Developer',
        image: frontend,
    },
    {
        id: 1,
        name: 'Backend Developer',
        image: backend,
    },
    {
        id: 2,
        name: 'Project Management',
        image: projectMgt,
    },
]

export const technologies = [
    {
        id: 0,
        image: css,
        name: css,
    },
    {
        id: 1,
        image: html,
        name: html,
    },
    {
        id: 2,
        image: javascript,
        name: javascript,
    },
    {
        id: 3,
        image: git,
        name: git,
    },
    {
        id: 4,
        image: nodejs,
        name: nodejs,
    },
    {
        id: 5,
        image: reactjs,
        name: reactjs
    },
    {
        id: 6,
        image: redux,
        name: redux
    },
    {
        id: 7,
        image: tailwind,
        name: tailwind
    },
    {
        id: 8,
        image: typescript,
        name: typescript,
    },
    {
        id: 9,
        image: figma,
        name: figma,
    },
]

export const experiences = [
    {
        logo: arckitchen,
        role: 'Contract Web Developer',
        company: 'Arc Kitchen',
        location: 'Lagos, Nigeria',
        dateRange: 'Contract',
    },
    {
        logo: zulfah,
        role: 'FullStack Engineer',
        company: 'Zulfah Group',
        location: 'Lagos, Nigeria',
        dateRange: 'August 2023 - Present',
    },
    {
        logo: genialSata,
        role: 'Project Manager (Remote)',
        company: 'GenialSata',
        location: 'Lagos, Nigeria',
        dateRange: 'April 2024 - June 2024',
    }
];

export const projects = [
    {
        title: "Arc Kitchen",
        description: "A cloud-based kitchen that cooks and delivers a variety of dishes to customers' doorsteps, built with React for a seamless user experience.",
        image: arcKitchen1, // Replace with actual image URL
        tools: [
        { name: "React", icon: reactjs },
        { name: "TailwindCss", icon: tailwind },
        ],
        github: "https://github.com/AbuMahir980/ArcKitchen",
        live: "https://thearckitchen.netlify.app/"
    },
    {
        title: "Job Search Platform",
        description: "A platform for searching and applying to jobs built with HTML, CSS, and JavaScript.",
        image: jobScout, // Replace with actual image URL
        tools: [
        { name: "HTML", icon: html },
        { name: "CSS", icon: css },
        { name: "JavaScript", icon: javascript }
        ],
        github: "https://github.com/AbuMahir980/JobScout-VEPH839-86A",
        live: "https://jobscout.netlify.app"
    },
    {
        title: "Expenditure Tracker",
        description: "An intuitive expense management app built with React, Tailwind CSS, and Recharts for tracking and categorizing personal and business expenses.",
        image: expenseTrack,
        tools: [
        { name: "React", icon: reactjs },
        { name: "TailwindCss", icon: tailwind },
        ],
        github: "https://github.com/AbuMahir980/remittance-tracker",
        live: "https://expenditure-tracking.netlify.app/"
    },
    {
        title: "Open-desk Clone",
        description: "An OpenDesk clone built with React and Tailwind CSS, providing a sleek interface for browsing and exploring furniture collections.",
        image: opendesk,
        tools: [
        { name: "React", icon: reactjs },
        { name: "TailwindCss", icon: tailwind },
        ],
        github: "https://github.com/AbuMahir980/react-opendesk-clone",
        live: "https://cloned-project.netlify.app/"
    },
    {
        title: "Tech Brain",
        description: "A virtual reality landing page, built with HTML and CSS to practice layout techniques.",
        image: techBrain,
        tools: [
        { name: "HTML", icon: html },
        { name: "CSS", icon: css },
        ],
        github: "https://github.com/your-second-repo",
        live: "https://live-link.com"
    },
];

export const navContents = [
    { title: 'About', id: '#about' },
    { title: 'Skills', id: '#skills' },
    { title: 'Projects', id: '#projects' },
    { title: 'Experience', id: '#experience' },
    { title: 'Contact', id: '#contact' },
];

export const socialLinks = [
    { name: "GitHub", url: "https://github.com/AbuMahir980", icon: "FaGithub" },
    { name: "Instagram", url: "https://www.instagram.com/abu_maahir980", icon: "FaInstagram" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/qudus-lawal-adebola", icon: "FaLinkedin" },
    { name: "Twitter", url: "https://x.com/Abu_Maahir980", icon: "FaXTwitter" }
];

export const resume = [
    {
        link: 'https://drive.google.com/file/d/1_FRI1yJxWVhj72pqLTaGy1qsSvbCe15C/view?usp=sharing'
    }
]