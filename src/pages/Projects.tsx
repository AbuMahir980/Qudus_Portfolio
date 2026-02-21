import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { usePage } from '../context/PageContext';
import SectionContainer from '../components/layout/SectionContainer';
import PowerHopSection from '../components/features/PowerHopSection';
import LearningPlatformSection from '../components/features/LearningPlatformSection';
import PerformanceRefactorSection from '../components/features/PerformanceRefactorSection';
import ConversionEngineSection from '../components/features/ConversionEngineSection';
import SaaSIntegrationSection from '../components/features/SaaSIntegrationSection';
import SEOHead from '../lib/SEOHead';
import { seoConfig } from '../data/seo';

const Projects: React.FC = () => {
    const { theme } = usePage();

    return (
        <div className="pt-4">
            <SEOHead {...seoConfig.home} title="Projects | Qudus Lawal" />

            <SectionContainer id="projects-header" className="pt-8 md:pt-16">
                <div className="space-y-12 mb-12 md:mb-16">
                    {/* Navigation Row */}
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
                            <span>127.0.0.1</span>
                        </Link>

                        <Link
                            to="/contact"
                            className={cn(
                                "flex items-center gap-2 text-[8px] md:text-sm font-bold uppercase tracking-[0.2em] transition-all group text-right",
                                theme === 'dark' ? "text-zinc-500 hover:text-cyan-500" : "text-zinc-400 hover:text-cyan-600"
                            )}
                        >
                            <span>Get in touch</span>
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
                                <span className="text-cyan-500 font-black text-sm md:text-xl tracking-tighter whitespace-nowrap">03 /</span>
                                <h2 className="text-xl md:text-3xl lg:text-4xl font-black uppercase tracking-tighter whitespace-nowrap mix-blend-difference">
                                    SOLUTIONS
                                </h2>
                            </motion.div>
                        </div>

                        {/* Right Side: Intro */}
                        <div className="md:col-span-8 md:pt-16 lg:pt-24">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="max-w-2xl"
                            >
                                <p className={cn(
                                    "text-lg md:text-2xl font-medium leading-relaxed italic",
                                    theme === 'dark' ? "text-zinc-400" : "text-zinc-600"
                                )}>
                                    A selection of recent engineering work, focusing on performance, scalability, and intuitive user interfaces.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </SectionContainer>

            <PowerHopSection />
            <LearningPlatformSection />
            <PerformanceRefactorSection />
            <ConversionEngineSection />
            <SaaSIntegrationSection />

            {/* Page Footer: Back to Home */}
            <SectionContainer id="projects-footer" className="pb-24">
                <div className="pt-12 border-t border-zinc-900/30 flex justify-center">
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
        </div>
    );
};

export default Projects;
