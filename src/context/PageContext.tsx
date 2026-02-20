import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { cn } from '../lib/utils';

type Theme = 'dark' | 'light';

interface PageContextType {
    theme: Theme;
    toggleTheme: () => void;
    isMenuOpen: boolean;
    setIsMenuOpen: (open: boolean) => void;
}

const PageContext = createContext<PageContextType | undefined>(undefined);

export const PageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>('dark');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    };

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove('light', 'dark');
        root.classList.add(theme);
    }, [theme]);

    return (
        <PageContext.Provider value={{ theme, toggleTheme, isMenuOpen, setIsMenuOpen }}>
            {children}
        </PageContext.Provider>
    );
};



export const usePage = () => {
    const context = useContext(PageContext);
    if (context === undefined) {
        throw new Error('usePage must be used within a PageProvider');
    }
    return context;
};
