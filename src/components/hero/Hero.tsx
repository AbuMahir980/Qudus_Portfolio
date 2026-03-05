import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../lib/animations';
import { Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="top"
      className="min-h-[85vh] flex items-center justify-center px-6"
    >
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="max-w-2xl text-center"
      >
        <motion.h1
          variants={fadeIn}
          className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-4 text-navy dark:text-white"
        >
          Hi, I'm <span className="text-gold">Qudus Lawal.</span>
        </motion.h1>

        <motion.p
          variants={fadeIn}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 font-medium"
        >
          I build data-intensive React applications.
        </motion.p>

        <motion.div
          variants={fadeIn}
          className="flex items-center justify-center gap-5 mb-8"
        >
          <a
            href="https://github.com/AbuMahir980"
            target="_blank"
            rel="noopener noreferrer"
            className="text-navy dark:text-gray-400 hover:text-gold dark:hover:text-gold transition-colors"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>
          <a
            href="https://linkedin.com/in/qudus-lawal-adebola"
            target="_blank"
            rel="noopener noreferrer"
            className="text-navy dark:text-gray-400 hover:text-gold dark:hover:text-gold transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="mailto:lawalqudus980@gmail.com"
            className="text-navy dark:text-gray-400 hover:text-gold dark:hover:text-gold transition-colors"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
        </motion.div>

        <motion.div variants={fadeIn}>
          <a
            href="https://drive.google.com/file/d/1npPv3vtDymaV15Oe-KHTF_1MbZLjb5Wg/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green text-white text-xs font-bold uppercase tracking-widest hover:bg-green/90 transition-colors shadow-lg shadow-black/10 active:scale-95"
          >
            Download Resume <Download size={16} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
