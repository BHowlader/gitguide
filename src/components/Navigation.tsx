import React from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface NavigationProps {
    darkMode: boolean;
    toggleTheme: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ darkMode, toggleTheme }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const location = useLocation();

    const navItems = [
        { label: 'Quick Start', href: '/quick-start' },
        { label: 'Basics', href: '/basics' },
        { label: 'Commands', href: '/commands' },
        { label: 'Branching', href: '/branching' },
        { label: 'GitHub', href: '/github' },
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 z-50 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <Link to="/" className="flex-shrink-0 flex items-center gap-2">
                        <img src="/logo.svg" alt="GitGuide Logo" className="h-8 w-8 object-contain" />
                        <span className="font-bold text-xl text-slate-900 dark:text-white">GitGuide</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                to={item.href}
                                className={`font-medium transition-colors ${isActive(item.href)
                                    ? 'text-indigo-600 dark:text-indigo-400'
                                    : 'text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400'
                                    }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                            aria-label="Toggle theme"
                        >
                            {darkMode ? (
                                <Sun className="h-5 w-5 text-amber-400" />
                            ) : (
                                <Moon className="h-5 w-5 text-slate-600" />
                            )}
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                to={item.href}
                                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive(item.href)
                                    ? 'text-indigo-600 dark:text-indigo-400 bg-slate-50 dark:bg-slate-800'
                                    : 'text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                                    }`}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <button
                            onClick={() => {
                                toggleTheme();
                                setIsOpen(false);
                            }}
                            className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center gap-2"
                        >
                            {darkMode ? (
                                <>
                                    <Sun className="h-5 w-5 text-amber-400" />
                                    <span>Light Mode</span>
                                </>
                            ) : (
                                <>
                                    <Moon className="h-5 w-5 text-slate-600" />
                                    <span>Dark Mode</span>
                                </>
                            )}
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navigation;
