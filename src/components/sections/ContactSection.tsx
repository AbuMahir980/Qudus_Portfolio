import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { usePage } from '../../context/PageContext';
import { cn } from '../../lib/utils';
import SectionContainer from '../layout/SectionContainer';

const ContactSection: React.FC = () => {
    const { theme } = usePage();

    return (
        <SectionContainer id="contact" className="py-24 md:py-32 border-t border-zinc-900/50">
            <div className="flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto space-y-12 mb-24 md:mb-32"
                >
                    <div className="space-y-4">
                        <span className="text-cyan-500 font-black text-xl md:text-2xl tracking-tighter uppercase whitespace-nowrap">04 / COLLABORATION</span>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase leading-[0.9] mix-blend-difference">
                            Ready to architect your <br />
                            <span className="text-cyan-500 italic">next solution?</span>
                        </h2>
                    </div>

                    <div className="pt-8">
                        <a
                            href="mailto:lawalqudus980@gmail.com"
                            className="group relative inline-block text-2xl md:text-4xl font-black tracking-tighter uppercase overflow-hidden"
                        >
                            <span className="relative z-10 transition-colors group-hover:text-cyan-500">Get in touch</span>
                            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-500 transform origin-left group-hover:scale-x-100 transition-transform duration-500" />
                        </a>
                    </div>
                </motion.div>

                {/* Section Footer: Back to Home */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="w-full md:pt-12 border-t border-zinc-900/30 flex justify-center"
                >
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
                </motion.div>
            </div>
        </SectionContainer>
    );
};

export default ContactSection;
