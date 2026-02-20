import React from 'react';
import { motion, Variants } from 'framer-motion';
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
        <SectionContainer id="experience">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
                <div className="md:col-span-3 flex md:justify-end">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-row md:flex-col items-baseline md:items-end gap-4"
                    >
                        <span className="text-cyan-500 font-black text-2xl md:text-3xl tracking-tighter">02 /</span>
                        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mix-blend-difference md:[writing-mode:vertical-rl] md:rotate-180">
                            EVOLUTION
                        </h2>
                    </motion.div>
                </div>

                <div className="md:col-span-9">
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
        </SectionContainer>
    );
};

export default ExperienceSection;
