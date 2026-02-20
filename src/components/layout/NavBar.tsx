import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { cn } from '../../lib/utils';
import { usePage } from '../../context/PageContext';
import { Link, useLocation } from 'react-router-dom';

const NavBar: React.FC = () => {
    const { theme, toggleTheme, isMenuOpen, setIsMenuOpen } = usePage();
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navItems = [
        { name: 'About', href: '/about' },
        { name: 'Experience', href: '/experience' },
        { name: 'Projects', href: '/projects' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 right-0 z-[100] transition-all duration-300 border-b',
                isScrolled
                    ? theme === 'dark'
                        ? 'bg-zinc-950/80 border-zinc-900 backdrop-blur-md py-2'
                        : 'bg-white/80 border-zinc-100 backdrop-blur-md py-2'
                    : 'bg-transparent border-transparent py-4'
            )}
        >
            <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
                <Link to="/" className="text-xl font-black tracking-tighter hover:text-cyan-500 transition-colors">
                    QL<span className="text-cyan-500">.</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.href}
                            className={cn(
                                'text-sm font-medium transition-colors hover:text-cyan-500',
                                location.pathname === item.href
                                    ? 'text-cyan-500'
                                    : theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}

                    <button
                        onClick={toggleTheme}
                        className={cn(
                            'p-2 rounded-full transition-colors',
                            theme === 'dark' ? 'hover:bg-zinc-800 text-zinc-400' : 'hover:bg-zinc-100 text-zinc-600'
                        )}
                    >
                        {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex items-center space-x-4">
                    <button
                        onClick={toggleTheme}
                        className={cn(
                            'p-2 rounded-full transition-colors',
                            theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
                        )}
                    >
                        {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={cn(
                            'p-2 rounded-full transition-colors z-[210]',
                            theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600',
                            isMenuOpen && "text-cyan-500"
                        )}
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Modal */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className={cn(
                            "fixed inset-0 z-[200] flex flex-col items-center justify-center",
                            theme === 'dark' ? "bg-zinc-950" : "bg-white"
                        )}
                    >
                        {/* Background Deco */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
                            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyan-500/20 blur-[100px] rounded-full" />
                        </div>

                        <div className="relative z-10 flex flex-col items-center space-y-8">
                            <Link
                                to="/"
                                onClick={() => setIsMenuOpen(false)}
                                className={cn(
                                    "text-5xl font-black uppercase tracking-tighter hover:text-cyan-500 transition-colors",
                                    location.pathname === '/' ? "text-cyan-500" : (theme === 'dark' ? "text-white" : "text-zinc-950")
                                )}
                            >
                                Home
                            </Link>
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={cn(
                                        "text-5xl font-black uppercase tracking-tighter hover:text-cyan-500 transition-colors",
                                        location.pathname === item.href ? "text-cyan-500" : (theme === 'dark' ? "text-zinc-400" : "text-zinc-600")
                                    )}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default NavBar;
