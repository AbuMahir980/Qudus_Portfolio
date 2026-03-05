import { ReactNode } from 'react';
import NavBar from './NavBar';

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative min-h-screen flex flex-col bg-white dark:bg-dark-bg text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <NavBar />
      <main className="flex-1 pt-14">
        {children}
      </main>

      {/* Minimal footer */}
      <footer className="py-8 px-6 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-5xl mx-auto text-center text-xs text-gray-400 dark:text-gray-600">
          &copy; {new Date().getFullYear()} Qudus Lawal
        </div>
      </footer>
    </div>
  );
};

export default RootLayout;
