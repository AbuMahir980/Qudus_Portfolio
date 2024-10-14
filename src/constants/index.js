import { frontend, backend, projectMgt, css, html, javascript, git, nodejs, reactjs, redux, tailwind, typescript, figma, genialSata, zulfah, jobScout, expenseTrack, techBrain, opendesk } from '../constants/images'
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
        image: css
    },
    {
        id: 1,
        image: html
    },
    {
        id: 2,
        image: javascript
    },
    {
        id: 3,
        image: git
    },
    {
        id: 4,
        image: nodejs
    },
    {
        id: 5,
        image: reactjs
    },
    {
        id: 6,
        image: redux
    },
    {
        id: 7,
        image: tailwind
    },
    {
        id: 8,
        image: typescript
    },
    {
        id: 9,
        image: figma
    },
]

export const experiences = [
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
        link: 'https://drive.google.com/file/d/13PNY3l_kCjmcbOeNI0rIPGivh1GTRtrg/view?usp=sharing'
    }
]