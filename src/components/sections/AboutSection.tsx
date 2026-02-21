import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from '../../lib/utils';
import { usePage } from '../../context/PageContext';
import SectionContainer from '../layout/SectionContainer';

const AboutSection: React.FC = () => {
    const { theme } = usePage();
    const [quoteTyped, setQuoteTyped] = React.useState("");
    const fullQuote = "Code is logical, but software is human.";

    React.useEffect(() => {
        let i = 0;
        const speed = 50; // ms per char
        const timer = setInterval(() => {
            setQuoteTyped(fullQuote.slice(0, i + 1));
            i++;
            if (i >= fullQuote.length) clearInterval(timer);
        }, speed);
        return () => clearInterval(timer);
    }, []);

    const education = [
        {
            degree: "Diploma in Software Engineering",
            institution: "Zulfah Software Academy",
            year: "2023"
        },
        {
            degree: "M.Sc. Industrial Relations & Personnel Management",
            institution: "University of Lagos",
            year: "2020"
        },
        {
            degree: "B.Sc. Industrial Relations & Personnel Management",
            institution: "University of Lagos",
            year: "2016"
        },
    ];

    const containerVariants: Variants = {
        animate: {
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants: Variants = {
        initial: { opacity: 0, y: 20 },
        animate: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }
        }
    };

    const listItemVariants: Variants = {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 }
    };

    return (
        <SectionContainer id="about" className="pt-8 md:pt-16">
            <div className="space-y-12">
                {/* Full-width Navigation Row */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex justify-between items-center border-b border-zinc-900/30 pb-6"
                >
                    <Link
                        to="/"
                        className={cn(
                            "flex items-center gap-2 text-[8px] md:text-sm font-bold uppercase tracking-[0.2em] transition-all group",
                            theme === 'dark' ? "text-zinc-500 hover:text-cyan-500" : "text-zinc-400 hover:text-cyan-600"
                        )}
                    >
                        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform text-cyan-500" />
                        <span>127.0.0.1 no place like home</span>
                    </Link>

                    <Link
                        to="/experience"
                        className={cn(
                            "flex items-center gap-2 text-[8px] md:text-sm font-bold uppercase tracking-[0.2em] transition-all group text-right",
                            theme === 'dark' ? "text-zinc-500 hover:text-cyan-500" : "text-zinc-400 hover:text-cyan-600"
                        )}
                    >
                        <span>See how I've evolved</span>
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
                            <span className="text-cyan-500 font-black text-sm md:text-xl tracking-tighter whitespace-nowrap">01 /</span>
                            <h2 className="text-xl md:text-3xl lg:text-4xl font-black uppercase tracking-tighter whitespace-nowrap mix-blend-difference">
                                PERSPECTIVE
                            </h2>
                        </motion.div>
                    </div>

                    {/* Right Side: Narrative */}
                    <div className="md:col-span-8 md:pt-16 lg:pt-24">
                        <motion.div
                            variants={containerVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            className="space-y-12 md:space-y-20"
                        >
                            <div className="space-y-8 md:space-y-6">
                                <div className={cn(
                                    "text-lg md:text-2xl lg:text-3xl font-medium leading-relaxed md:leading-snug min-h-[1em]",
                                    theme === 'dark' ? "text-zinc-300" : "text-zinc-700"
                                )}>
                                    "{quoteTyped.split(',').map((part, i) => (
                                        <React.Fragment key={i}>
                                            {part.includes('logical') ? (
                                                part.replace('logical', '').concat('')
                                            ) : part.includes('human') ? (
                                                part.replace('human', '').concat('')
                                            ) : part}

                                            {/* Highlight logic/human */}
                                            {part.includes('logical') && (
                                                <span className="text-cyan-500">logical</span>
                                            )}
                                            {part.includes('human') && (
                                                <span className="text-cyan-500">human</span>
                                            )}
                                            {i === 0 && quoteTyped.includes(',') ? ', ' : ''}
                                        </React.Fragment>
                                    ))}"
                                    <span className="inline-block w-[2px] h-[0.8em] bg-cyan-500 ml-1 animate-pulse" />
                                </div>

                                <motion.div
                                    variants={containerVariants}
                                    className={cn(
                                        "text-base md:text-lg leading-relaxed max-w-3xl space-y-6",
                                        theme === 'dark' ? "text-zinc-500" : "text-zinc-600"
                                    )}
                                >
                                    <motion.p variants={itemVariants}>
                                        My path to software engineering was a natural next step from my background in Industrial Relations. Studying how people interact within complex organizations gave me a unique perspective on how they should interact with digital ones.
                                    </motion.p>
                                    <motion.p variants={itemVariants}>
                                        Today, I specialize in <span className="text-cyan-500 font-semibold">Frontend Engineering</span> with a <span className="text-cyan-500 font-semibold">Fullstack heart</span>.
                                        Because I have a solid foundation in how the entire stack works, I’m just as comfortable talking about how data is structured as I am making sure a page moves smoothly.
                                    </motion.p>
                                    <motion.p variants={itemVariants}>
                                        My goal is simple: <span className="text-cyan-500 font-bold italic">To build high-quality web experiences where the technology is powerful, but the use is easy.</span> I focus on clean code and natural movement to make sure the data actually helps the person using it, rather than getting in their way.
                                    </motion.p>
                                </motion.div>
                            </div>

                            {/* Education Sub-section */}
                            <motion.div variants={itemVariants} className="pt-8 md:pt-12">
                                <h3 className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-cyan-500 mb-6 md:mb-10">
                                    Educational Foundation
                                </h3>

                                <div className="border-b border-zinc-900">
                                    {education.map((item, i) => (
                                        <motion.div
                                            key={i}
                                            variants={listItemVariants}
                                            className="group relative py-6 md:py-8 border-t border-zinc-900 transition-all duration-500 hover:pl-4"
                                        >
                                            <div className="absolute top-[-1px] left-0 right-0 h-[1px] bg-cyan-500 opacity-0 group-hover:opacity-100 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.8)] transition-all duration-500" />

                                            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 md:gap-4">
                                                <div>
                                                    <h4 className={cn(
                                                        "text-base md:text-xl font-bold mb-1 group-hover:text-white transition-colors",
                                                        theme === 'dark' ? "text-zinc-200" : "text-zinc-800"
                                                    )}>
                                                        {item.degree}
                                                    </h4>
                                                    <p className="text-[10px] md:text-sm font-medium text-zinc-500 uppercase tracking-wider">
                                                        {item.institution}
                                                    </p>
                                                </div>
                                                <span className="text-[10px] md:text-sm font-black text-cyan-500/50">
                                                    {item.year}
                                                </span>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
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

export default AboutSection;
