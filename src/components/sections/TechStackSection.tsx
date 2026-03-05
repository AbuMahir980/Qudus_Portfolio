import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../../lib/animations';
import { techStack } from '../../data';

const TechStackSection = () => {
  return (
    <section id="stack" className="py-20 sm:py-28 px-6">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-80px' }}
        className="max-w-5xl mx-auto"
      >
        <motion.h2
          variants={fadeIn}
          className="text-xs font-bold uppercase tracking-[0.25em] text-gold mb-10"
        >
          Tech Stack
        </motion.h2>

        <motion.div
          variants={fadeIn}
          className="flex flex-wrap gap-2.5"
        >
          {techStack.map((item) => (
            <span
              key={item.name}
              className="px-3.5 py-2 rounded-full text-xs font-semibold border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-dark-card text-gray-700 dark:text-gray-300 hover:border-gold/40 hover:text-gold dark:hover:border-gold/30 dark:hover:text-gold transition-colors"
            >
              {item.name}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TechStackSection;
