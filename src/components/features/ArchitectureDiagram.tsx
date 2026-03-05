import { motion } from 'framer-motion';
import { fadeIn } from '../../lib/animations';

const ArchitectureDiagram = () => {
  const boxBase =
    'rounded-lg border px-4 py-3 text-center text-xs font-semibold transition-colors';
  const goldBox =
    'border-gold/40 bg-gold/10 text-gold dark:border-gold/30 dark:bg-gold/5';
  const moduleBox =
    'border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-dark-card text-navy dark:text-gray-200';
  const dataBox =
    'border-green/40 bg-green/10 text-green dark:border-green/30 dark:bg-green/5 dark:text-emerald-400';

  return (
    <motion.div
      variants={fadeIn}
      className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-dark-bg p-5 sm:p-6"
    >
      <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 dark:text-gray-500 mb-4">
        System Architecture
      </p>

      <div className="flex flex-col items-center gap-3">
        {/* Shared Template */}
        <div className={`${boxBase} ${goldBox} w-full max-w-[220px]`}>
          Shared Template
        </div>

        {/* Connector */}
        <div className="w-px h-4 bg-zinc-300 dark:bg-zinc-700" />

        {/* Modules row */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3 w-full">
          <div className={`${boxBase} ${moduleBox} flex flex-col items-center gap-1.5`}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-current opacity-60">
              <rect x="1" y="3" width="14" height="2" rx="0.5" fill="currentColor" />
              <rect x="1" y="7" width="14" height="2" rx="0.5" fill="currentColor" />
              <rect x="1" y="11" width="14" height="2" rx="0.5" fill="currentColor" />
            </svg>
            <span>Fleet Status</span>
          </div>
          <div className={`${boxBase} ${moduleBox} flex flex-col items-center gap-1.5`}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-current opacity-60">
              <path d="M8 2L8 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="8" cy="12" r="2" fill="currentColor" />
            </svg>
            <span>Fleet Map</span>
          </div>
          <div className={`${boxBase} ${moduleBox} flex flex-col items-center gap-1.5`}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-current opacity-60">
              <rect x="2" y="8" width="3" height="6" rx="0.5" fill="currentColor" />
              <rect x="6.5" y="5" width="3" height="9" rx="0.5" fill="currentColor" />
              <rect x="11" y="2" width="3" height="12" rx="0.5" fill="currentColor" />
            </svg>
            <span>Fleet Statistics</span>
          </div>
        </div>

        {/* Connector */}
        <div className="w-px h-4 bg-zinc-300 dark:bg-zinc-700" />

        {/* Data flow */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 w-full">
          <div className={`${boxBase} ${dataBox} px-2 sm:px-4 text-[10px] sm:text-xs flex-1`}>
            REST API
          </div>
          <span className="text-gray-400 dark:text-gray-600 text-xs shrink-0">→</span>
          <div className={`${boxBase} ${dataBox} px-2 sm:px-4 text-[10px] sm:text-xs flex-1`}>
            TanStack Query
          </div>
          <span className="text-gray-400 dark:text-gray-600 text-xs shrink-0">→</span>
          <div className={`${boxBase} ${dataBox} px-2 sm:px-4 text-[10px] sm:text-xs flex-1`}>
            React Components
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ArchitectureDiagram;
