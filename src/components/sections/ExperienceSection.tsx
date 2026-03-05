import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { fadeIn, staggerContainer } from '../../lib/animations';
import { experiences } from '../../data';

const ExperienceSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 60%'],
  });
  const lineHeight = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section id="experience" className="py-20 sm:py-28 px-6">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-80px' }}
        className="max-w-5xl mx-auto"
      >
        <motion.h2
          variants={fadeIn}
          className="text-xs font-bold uppercase tracking-[0.25em] text-gold mb-14"
        >
          Experience
        </motion.h2>

        <div ref={containerRef} className="relative">
          {/* Center line (desktop) / Left line (mobile) */}
          <div className="absolute top-0 bottom-0 left-3 md:left-1/2 md:-translate-x-px w-0.5 bg-gray-200 dark:bg-white/10" />

          {/* Animated overlay that grows with scroll */}
          <motion.div
            style={{ scaleY: lineHeight, transformOrigin: 'top' }}
            className="absolute top-0 bottom-0 left-3 md:left-1/2 md:-translate-x-px w-0.5 bg-gold/40"
          />

          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={exp.company}
                  variants={fadeIn}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, margin: '-60px' }}
                  className="relative"
                >
                  {/* Dot */}
                  <div className="absolute left-3 md:left-1/2 top-1 -translate-x-1/2 z-10">
                    <div className="w-3 h-3 rounded-full bg-gold ring-4 ring-white dark:ring-dark-bg" />
                  </div>

                  {/* Content — mobile: always right; desktop: alternates */}
                  <div
                    className={`
                      pl-10
                      md:pl-0 md:w-[calc(50%-2rem)]
                      ${isLeft ? 'md:mr-auto md:text-right md:pr-2' : 'md:ml-auto md:text-left md:pl-2'}
                    `}
                  >
                    <h3 className="text-sm font-bold text-navy dark:text-white leading-snug">
                      {exp.company}
                    </h3>
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mt-0.5">
                      {exp.role}
                    </p>
                    <p className="text-[11px] text-gray-400 dark:text-gray-600 mt-1 font-medium">
                      {exp.period}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
