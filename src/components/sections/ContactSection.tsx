import React from 'react';
import { motion } from 'framer-motion';
import SectionContainer from '../layout/SectionContainer';

const ContactSection: React.FC = () => {
    return (
        <SectionContainer id="contact" className="text-center py-32 border-t border-zinc-900/50">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto space-y-12"
            >
                <div className="space-y-4">
                    <span className="text-cyan-500 font-black text-2xl tracking-tighter">03 / COLLABORATION</span>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase leading-[0.9]">
                        Ready to architect your <br />
                        <span className="text-cyan-500 italic">next solution?</span>
                    </h2>
                </div>

                <div className="pt-8">
                    <a
                        href="mailto:quduslawal@gmail.com"
                        className="group relative inline-block text-2xl md:text-4xl font-black tracking-tighter uppercase overflow-hidden"
                    >
                        <span className="relative z-10">Get in touch</span>
                        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-500 transform origin-left group-hover:scale-x-100 transition-transform duration-500" />
                        <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transform origin-left group-hover:w-full transition-all duration-500 delay-100" />
                    </a>
                </div>
            </motion.div>
        </SectionContainer>
    );
};

export default ContactSection;
