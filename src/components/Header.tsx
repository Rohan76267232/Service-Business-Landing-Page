import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, ChevronDown } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              BusinessTracker
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 transition-colors">
              Pricing
            </a>
            <a href="#testimonials" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 transition-colors">
              Testimonials
            </a>
            <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <a
              href="https://superprofile.bio/vp/66fd6d642a7c60001380464c"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
            >
              Get Started
            </a>
          </nav>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <a href="#features" className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">
              Features
            </a>
            <a href="#pricing" className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">
              Pricing
            </a>
            <a href="#testimonials" className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">
              Testimonials
            </a>
            <div className="px-3 py-2 flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-300">Dark Mode</span>
              <button 
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {isDarkMode ? <Sun className="w-5 h-5 text-gray-600 dark:text-gray-300" /> : <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />}
              </button>
            </div>
            <a
              href="https://superprofile.bio/vp/66fd6d642a7c60001380464c"
              target="_blank"
              rel="noopener noreferrer"
              className="block mx-3 py-2 px-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full text-center font-semibold hover:shadow-lg"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}