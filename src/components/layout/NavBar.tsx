import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { cn } from '../../lib/utils';
import { usePage } from '../../context/PageContext';

const NavBar = () => {
  const { theme, toggleTheme } = usePage();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
        isScrolled
          ? 'bg-white/95 dark:bg-dark-bg/90 backdrop-blur-md py-2 border-zinc-200 dark:border-zinc-800'
          : 'bg-transparent py-4 border-transparent'
      )}
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#top"
          className="text-xl font-black tracking-tighter text-navy dark:text-white hover:text-gold dark:hover:text-gold transition-colors"
        >
          QL<span className="text-gold">.</span>
        </a>

        <div className="flex items-center gap-6">
          <a
            href="#projects"
            className="hidden sm:block text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gold dark:hover:text-gold transition-colors"
          >
            Projects
          </a>
          <a
            href="#stack"
            className="hidden sm:block text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gold dark:hover:text-gold transition-colors"
          >
            Stack
          </a>
          <a
            href="#experience"
            className="hidden sm:block text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gold dark:hover:text-gold transition-colors"
          >
            Experience
          </a>
          <a
            href="#contact"
            className="hidden sm:block text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gold dark:hover:text-gold transition-colors"
          >
            Contact
          </a>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-gray-600 dark:text-gray-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
