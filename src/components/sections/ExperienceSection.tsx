import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from '../../lib/utils';
import { usePage } from '../../context/PageContext';
import SectionContainer from '../layout/SectionContainer';


const experiences = [
    {
        role: "Phase 03: The Lead Architect (Current)",
        company: "PowerHop (via VN Technologies ApS)",
        period: "Jan 2025 — Present",
        description: "I'm currently leading the frontend for PowerHop's launch into Nigeria's energy sector. It's been an intense journey-we spent 9 months building under the name PlugNPower before a total rebrand forced us to pivot. During that shift, I was tasked with building a custom telemetry dashboard from scratch to prove I could handle complex data like charging, usage metrics, grid availability analysis and station metrics. That personal deep-dive is now the foundation for the official Ops dashboard I'm currently architecting."
    },
    {
        role: "Phase 02: The Systems Specialist",
        company: "STEMMETS ",
        period: "Nov 2024 — Jan 2025",
        description: "I was brought in to engineer the customer-facing e-learning platform from the ground up. I balanced a sleek, responsive UI with a heavy focus on the 'Logic Layer'-securing OTP authentication and optimizing data flows with Redux. By implementing strict form validation and clean state management, I reduced sign-up errors by 40% and ensured that complex parent-child account structures felt completely effortless. My goal was to make sure the interface looked premium while the background logic handled the heavy lifting without a hitch."
    },
    {
        role: "Phase 01: The Freelance Refactor",
        company: "Arc Kitchen & Remvy Driving School",
        period: "2024",
        description: "This was my transition into professional freelancing. I delivered high-conversion landing experiences that focused on immediate results, like integrating WhatsApp ordering to streamline customer leads. Later, I performed a total system refactor to bring them up to enterprise standards. I migrated both projects to TypeScript for better stability and implemented a standardized, scalable folder architecture. By adding Framer Motion and Shadcn UI, I boosted the performance and 'feel' of the sites."
    },
    {
        role: "Phase 00: Initializing the System",
        company: "Zulfah Group & Zulfah Foundation",
        period: "2023 — 2025",
        description: "The foundation of my engineering journey. I started as a Full-Stack intern at Zulfah Group, learning the mechanics of SaaS platforms and API logic. I later stepped up as the Technical Lead for the Zulfah Foundation, where I bridged the gap between human impact and digital presence."
    }
];

const skillGroups = [
    {
        category: "Visual Architecture",
        skills: ["React", "Tailwind CSS", "Framer Motion", "Shadcn UI", "Chakra UI", "Ant Design"]
    },
    {
        category: "System Logic",
        skills: ["TypeScript", "Redux Toolkit", "Node.js", "REST APIs", "MongoDB/MySQL"]
    },
    {
        category: "Integrity & Quality",
        skills: ["TDD", "Git", "Postman"]
    }
];

const ExperienceSection: React.FC = () => {
    const { theme } = usePage();
    const [activePhase, setActivePhase] = React.useState(0);
    const [activeSkillTab, setActiveSkillTab] = React.useState("Visual Architecture");

    const contentVariants: Variants = {
        initial: { opacity: 0, x: 20 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -20 }
    };

    const borderColor = theme === 'dark' ? "border-white" : "border-[#364153]";
    const mutedText = theme === 'dark' ? "text-gray-500" : "text-gray-400";
    const bodyText = theme === 'dark' ? "text-gray-400" : "text-gray-600";
    const headingText = theme === 'dark' ? "text-white" : "text-[#364153]";

    return (
        <SectionContainer id="experience" className="pt-8 md:pt-16">

                <div className="grid grid-cols-1 py-8 md:grid-cols-12 gap-6 items-start">
                    {/* Left Side: Heading */}
                    <div className="md:col-span-4">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="flex items-baseline gap-3 md:gap-4 pb-2 flex-nowrap"
                        >
                            <span className="text-[#A9792B] font-black text-xs md:text-xl tracking-tighter whitespace-nowrap">02 /</span>
                            <h2 className={cn("text-xl md:text-2xl font-black uppercase tracking-tighter whitespace-nowrap", headingText)}>
                                EVOLUTION
                            </h2>
                        </motion.div>
                    </div>

                    {/* Right Side: Tabbed Interface */}
                    <div className="md:col-span-8">
                        {/* Tabs */}
                        <div className={cn("flex gap-8 md:gap-12 pb-4 mb-12 md:pt-10")}>
                            {experiences.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActivePhase(i)}
                                    className={cn(
                                        "relative group flex items-center gap-2 text-xs font-black tracking-widest uppercase transition-colors",
                                        activePhase === i
                                            ? "text-[#A9792B]"
                                            : theme === 'dark' ? "text-gray-300 hover:text-white" : "text-gray-400 hover:text-[#364153]"
                                    )}
                                >
                                    <span className="opacity-50 text-[10px]">XP</span>
                                    <span>0{3 - i}</span>
                                    {activePhase === i && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute -bottom-[17px] left-0 right-0 h-[2px] bg-[#A9792B]"
                                        />
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Phase Content */}
                        <div className="min-h-[300px] relative">
                            <motion.div
                                key={activePhase}
                                variants={contentVariants}
                                initial="initial"
                                animate="animate"
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="space-y-6"
                            >
                                <div className="space-y-2">
                                    <span className="text-xs font-black uppercase tracking-[0.2em] text-[#A9792B]/60">
                                        {experiences[activePhase].period}
                                    </span>
                                    <h3 className={cn(
                                        "text-2xl md:text-4xl font-bold tracking-tight",
                                        headingText
                                    )}>
                                        {experiences[activePhase].role.split(': ')[1]}
                                    </h3>
                                    <p className={cn("text-sm font-semibold uppercase tracking-widest", mutedText)}>
                                        {experiences[activePhase].company}
                                    </p>
                                </div>

                                <p className={cn(
                                    "text-base leading-relaxed max-w-2xl text-justify",
                                    bodyText
                                )}>
                                    {experiences[activePhase].description}
                                </p>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="mt-24 md:mt-32"
                        >
                            <h3 className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-[#A9792B] mb-8">
                                The Technical Arsenal
                            </h3>

                            <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                                {/* Category Sidebar/Tabs */}
                                <div className={cn(
                                    "flex md:flex-col gap-4 md:gap-6 border-b md:border-b-0 md:border-r pb-4 md:pb-0 md:pr-8 md:min-w-[200px]",
                                    borderColor
                                )}>
                                    {[
                                        "Visual Architecture",
                                        "System Logic",
                                        "Integrity & Quality"
                                    ].map((cat) => (
                                        <button
                                            key={cat}
                                            onClick={() => setActiveSkillTab(cat)}
                                            className={cn(
                                                "relative text-left text-[10px] md:text-xs font-black uppercase tracking-widest transition-colors",
                                                activeSkillTab === cat
                                                    ? "text-[#A9792B]"
                                                    : theme === 'dark' ? "text-gray-500 hover:text-gray-300" : "text-gray-500 hover:text-[#364153]"
                                            )}
                                        >
                                            {cat}
                                            {activeSkillTab === cat && (
                                                <motion.div
                                                    layoutId="activeSkillTab"
                                                    className="hidden md:block absolute -right-[33px] top-1/2 -translate-y-1/2 w-[2px] h-full bg-[#A9792B]"
                                                />
                                            )}
                                        </button>
                                    ))}
                                </div>

                                {/* Skill Content */}
                                <div className="flex-1 min-h-[100px]">
                                    <motion.div
                                        key={activeSkillTab}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4 }}
                                        className="flex flex-wrap gap-3"
                                    >
                                        {skillGroups.find(g => g.category === activeSkillTab)?.skills.map((skill, sIdx) => (
                                            <span
                                                key={sIdx}
                                                className={cn(
                                                    "text-[10px] md:text-xs font-semibold px-4 py-2 border rounded-full transition-all duration-300",
                                                    theme === 'dark'
                                                        ? "border-zinc-700 text-white hover:border-[#A9792B]/60 hover:text-[#A9792B] bg-[#1E2939]"
                                                        : "border-zinc-200 text-[#364153] hover:border-[#A9792B]/60 hover:text-[#A9792B] bg-white"
                                                )}
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>


            {/* Section Footer: Back to Home */}
            <div className={cn("mt-10 pt-8 border-t flex justify-center", borderColor)}>
                <Link
                    to="/"
                    className={cn(
                        "flex items-center gap-3 text-[9px] md:text-xs font-black uppercase tracking-[0.3em] transition-all group",
                        theme === 'dark' ? "text-white hover:text-[#A9792B]" : "text-[#364153] hover:text-[#A9792B]"
                    )}
                >
                    <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform text-[#A9792B]" />
                    <span>127.0.0.1 HOME</span>
                </Link>
            </div>
        </SectionContainer>
    );
};

export default ExperienceSection;
