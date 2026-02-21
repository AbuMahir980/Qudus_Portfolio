import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { usePage } from '../../context/PageContext';
import { cn } from '../../lib/utils';
import SectionContainer from '../layout/SectionContainer';

const experiences = [
    {
        role: "Phase 03: The Lead Architect (Current)",
        company: "PowerHop (via VN Technologies ApS)",
        period: "Jan 2025 — Present",
        description: "I’m currently leading the frontend for PowerHop’s launch into Nigeria's energy sector. It’s been an intense journey-we spent 9 months building under the name PlugNPower before a total rebrand forced us to pivot. During that shift, I was tasked with building a custom telemetry dashboard from scratch to prove I could handle complex data like charging, usage metrics, grid availability analysis and station metrics. That personal deep-dive is now the foundation for the official Ops dashboard I’m currently architecting."
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

const ExperienceSection: React.FC = () => {
    const { theme } = usePage();

    const cardVariants: Variants = {
        initial: { opacity: 0, x: -20 },
        animate: { opacity: 1, x: 0 }
    };

    return (
        <SectionContainer id="experience" className="pt-8 md:pt-16">
            <div className="space-y-12 mb-12 md:mb-16">
                {/* Full-width Navigation Row */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex justify-between items-center border-b border-zinc-900/30 pb-6"
                >
                    <Link
                        to="/about"
                        className={cn(
                            "flex items-center gap-2 text-[8px] md:text-sm font-bold uppercase tracking-[0.2em] transition-all group",
                            theme === 'dark' ? "text-zinc-500 hover:text-cyan-500" : "text-zinc-400 hover:text-cyan-600"
                        )}
                    >
                        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform text-cyan-500" />
                        <span>Back to knowing me</span>
                    </Link>

                    <Link
                        to="/projects"
                        className={cn(
                            "flex items-center gap-2 text-[8px] md:text-sm font-bold uppercase tracking-[0.2em] transition-all group text-right",
                            theme === 'dark' ? "text-zinc-500 hover:text-cyan-500" : "text-zinc-400 hover:text-cyan-600"
                        )}
                    >
                        <span>Enter into my mind</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-cyan-500" />
                    </Link>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
                    {/* Left Side: Heading */}
                    <div className="md:col-span-4">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="flex items-baseline gap-3 md:gap-4 border-b border-zinc-900/50 pb-4 md:pb-8 flex-nowrap"
                        >
                            <span className="text-cyan-500 font-black text-sm md:text-xl tracking-tighter whitespace-nowrap">02 /</span>
                            <h2 className="text-xl md:text-3xl lg:text-4xl font-black uppercase tracking-tighter whitespace-nowrap mix-blend-difference">
                                EVOLUTION
                            </h2>
                        </motion.div>
                    </div>

                    {/* Right Side: Timeline */}
                    <div className="md:col-span-8 md:pt-16 lg:pt-24">
                        <div className="space-y-12">
                            {experiences.map((exp, i) => (
                                <motion.div
                                    key={i}
                                    variants={cardVariants}
                                    initial="initial"
                                    whileInView="animate"
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="group relative border-l border-cyan-500/20 pl-8 md:pl-12 py-2"
                                >
                                    <div className="absolute left-[-5px] top-4 w-[9px] h-[9px] rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)] group-hover:scale-150 transition-transform duration-500" />

                                    <div className="space-y-4">
                                        <span className="text-xs font-black uppercase tracking-[0.2em] text-cyan-500/50">
                                            {exp.period}
                                        </span>
                                        <div>
                                            <h3 className={cn(
                                                "text-2xl md:text-3xl font-bold tracking-tight mb-2",
                                                theme === 'dark' ? "text-white" : "text-zinc-950"
                                            )}>
                                                {exp.role}
                                            </h3>
                                            <p className="text-sm font-semibold text-zinc-500 uppercase tracking-widest">
                                                {exp.company}
                                            </p>
                                        </div>
                                        <p className={cn(
                                            "text-lg leading-relaxed max-w-2xl",
                                            theme === 'dark' ? "text-zinc-400" : "text-zinc-600"
                                        )}>
                                            {exp.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Technical Arsenal Sub-section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="mt-24 md:mt-32"
                        >
                            <h3 className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-cyan-500 mb-10 md:mb-16">
                                The Technical Arsenal
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8">
                                {[
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
                                ].map((group, idx) => (
                                    <div key={idx} className="space-y-6">
                                        <h4 className={cn(
                                            "text-sm font-bold uppercase tracking-wider",
                                            theme === 'dark' ? "text-zinc-200" : "text-zinc-800"
                                        )}>
                                            {group.category}
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {group.skills.map((skill, sIdx) => (
                                                <span
                                                    key={sIdx}
                                                    className={cn(
                                                        "text-[10px] md:text-xs font-medium px-3 py-1 border rounded-full transition-colors duration-300",
                                                        theme === 'dark'
                                                            ? "border-zinc-800 text-zinc-500 hover:border-cyan-500/50 hover:text-cyan-400"
                                                            : "border-zinc-200 text-zinc-500 hover:border-cyan-500/50 hover:text-cyan-600"
                                                    )}
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Section Footer: Back to Home */}
            <div className="mt-10 md:pt-12 border-t border-zinc-900/30 flex justify-center">
                <Link
                    to="/"
                    className={cn(
                        "flex items-center gap-3 text-[9px] md:text-sm font-black uppercase tracking-[0.3em] transition-all group",
                        theme === 'dark' ? "text-zinc-500 hover:text-cyan-500" : "text-zinc-400 hover:text-cyan-600"
                    )}
                >
                    <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform text-cyan-500" />
                    <span>127.0.0.1 No Place like Home</span>
                </Link>
            </div>
        </SectionContainer>
    );
};

export default ExperienceSection;
