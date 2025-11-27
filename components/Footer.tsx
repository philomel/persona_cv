import React from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

interface FooterProps {
  isDark: boolean;
  onContactClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ isDark, onContactClick }) => {
  const borderClass = isDark ? 'border-white' : 'border-black';
  const bgClass = isDark ? 'bg-zinc-900' : 'bg-zinc-100';

  return (
    <footer id="contact" className={`relative z-10 border-t-4 ${borderClass} pt-16 pb-8 ${isDark ? 'bg-zinc-950' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-pixel text-2xl md:text-3xl mb-8">
          INSERT COIN TO CONTINUE
        </h2>
        
        <p className="font-mono text-xl mb-10 max-w-xl mx-auto opacity-80">
          Ready to build the Web3 future together?
        </p>

        <button 
          onClick={onContactClick}
          className={`
            inline-flex items-center gap-3 px-8 py-4 font-pixel text-xs uppercase
            border-4 ${borderClass} shadow-retro hover:shadow-retro-hover active:translate-y-[4px] active:shadow-none transition-all
            ${isDark ? 'bg-green-600 text-white shadow-retro-dark' : 'bg-indigo-600 text-white'}
          `}
        >
          <Mail className="w-4 h-4" />
          START GAME (CONTACT)
        </button>

        <div className="flex justify-center gap-6 mt-12 mb-12">
           {[Github, Linkedin, Twitter].map((Icon, i) => (
             <a 
               key={i} 
               href="#" 
               className={`
                 w-12 h-12 border-2 ${borderClass} flex items-center justify-center 
                 hover:-translate-y-1 transition-transform
                 ${isDark ? 'bg-zinc-800 hover:bg-zinc-700' : 'bg-white hover:bg-gray-100'}
               `}
             >
               <Icon className="w-6 h-6" />
             </a>
           ))}
        </div>

        <div className="font-mono text-sm opacity-50">
          <p>PLAYER: LESLIE ZHANG</p>
          <p className="mt-2">SCORE: {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
};