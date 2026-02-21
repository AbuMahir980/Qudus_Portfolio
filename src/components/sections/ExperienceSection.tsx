import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { usePage } from '../../context/PageContext';
import { cn } from '../../lib/utils';
import SectionContainer from '../layout/SectionContainer';

const experiences = [
    {
        role: "Senior Frontend Engineer",
        company: "Global Tech Solutions",
        period: "2021 — Present",
        description: "Leading frontend architecture for enterprise-scale React applications. Focused on performance optimization and scalable design patterns."
    },
    {
        role: "Full Stack Developer",
        company: "Innovate Digital",
        period: "2019 — 2021",
        description: "Developed and maintained multiple client projects using React, Node.js, and PostgreSQL. Implemented automated testing and CI/CD pipelines."
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
