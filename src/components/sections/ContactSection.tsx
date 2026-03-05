import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../../lib/animations';
import { Mail, Github, Linkedin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 sm:py-28 px-6">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-80px' }}
        className="max-w-5xl mx-auto text-center"
      >
        <motion.h2
          variants={fadeIn}
          className="text-xs font-bold uppercase tracking-[0.25em] text-gold mb-10"
        >
          Contact
        </motion.h2>

        <motion.div variants={fadeIn} className="space-y-6">
          <a
            href="mailto:lawalqudus980@gmail.com"
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy dark:text-gray-200 hover:text-gold dark:hover:text-gold transition-colors"
          >
            <Mail size={18} /> lawalqudus980@gmail.com
          </a>

          <div className="flex items-center justify-center gap-5">
            <a
              href="https://github.com/AbuMahir980"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-500 hover:text-gold dark:hover:text-gold transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/qudus-lawal-adebola"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-500 hover:text-gold dark:hover:text-gold transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-600">
            Based in Lagos, Nigeria — open to remote roles.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
