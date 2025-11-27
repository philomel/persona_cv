import React, { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme, onContactClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'ABOUT', href: '#about' },
    { name: 'EXP', href: '#experience' },
  ];

  const buttonClass = isDark 
    ? 'bg-zinc-900 border-2 border-white shadow-retro-dark text-white hover:translate-y-1 hover:shadow-retro-dark-hover active:translate-y-[4px] active:shadow-none' 
    : 'bg-white border-2 border-black shadow-retro text-black hover:translate-y-1 hover:shadow-retro-hover active:translate-y-[4px] active:shadow-none';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 border-b-4 transition-colors duration-0 ${
      isDark ? 'bg-zinc-900 border-white' : 'bg-white border-black'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className={`font-pixel text-xl md:text-2xl tracking-tighter cursor-pointer select-none`}>
          LESLIE.ZHANG<span className="animate-pulse">_</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`font-pixel text-xs hover:underline decoration-4 underline-offset-4 ${isDark ? 'decoration-green-400' : 'decoration-indigo-500'}`}
            >
              {link.name}
            </a>
          ))}
          
          <button 
            onClick={onContactClick}
            className={`font-pixel text-xs px-4 py-2 transition-all duration-75 ${buttonClass}`}
          >
            CONTACT
          </button>

          <button
            onClick={toggleTheme}
            className={`p-2 border-2 transition-all duration-75 flex items-center justify-center ${
              isDark 
                ? 'border-white bg-zinc-800 hover:bg-zinc-700 text-yellow-300' 
                : 'border-black bg-gray-100 hover:bg-gray-200 text-indigo-600'
            }`}
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className={`p-1 border-2 ${isDark ? 'border-white text-yellow-300' : 'border-black text-indigo-600'}`}
          >
             {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          
          <button 
            className={`border-2 p-1 ${isDark ? 'border-white' : 'border-black'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={`md:hidden absolute top-full left-0 w-full border-b-4 p-6 flex flex-col gap-6 ${
          isDark ? 'bg-zinc-900 border-white' : 'bg-white border-black'
        }`}>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="font-pixel text-sm hover:translate-x-2 transition-transform"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {'>'} {link.name}
            </a>
          ))}
           <button 
            onClick={() => {
              onContactClick();
              setIsMobileMenuOpen(false);
            }}
            className={`font-pixel text-xs px-4 py-3 text-left w-full ${buttonClass}`}
          >
            CONTACT ME
          </button>
        </div>
      )}
    </nav>
  );
};