import React from 'react';
import { ArrowRight, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  isDark: boolean;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ isDark, onContactClick }) => {
  const containerBorder = isDark ? 'border-white' : 'border-black';
  const shadowClass = isDark ? 'shadow-retro-dark' : 'shadow-retro';
  const textHighlight = isDark ? 'text-green-400' : 'text-indigo-600';

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-10 pb-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="order-2 md:order-1 relative">
          {/* Decorative floating bits */}
          <div className={`hidden md:block absolute -left-12 top-0 text-4xl animate-bounce`}>👾</div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className={`inline-block px-2 py-1 mb-6 border-2 font-mono font-bold text-sm tracking-widest uppercase ${
              isDark ? 'border-green-400 text-green-400 bg-green-400/10' : 'border-indigo-600 text-indigo-600 bg-indigo-100'
            }`}>
              System Ready
            </div>
            
            <h1 className="font-pixel text-3xl md:text-5xl lg:text-6xl leading-tight mb-6">
              HELLO WORLD,<br/> I'M <span className={textHighlight}>LESLIE</span>
            </h1>
            
            <div className={`p-4 border-l-4 mb-8 ${isDark ? 'border-green-500 bg-zinc-800' : 'border-indigo-600 bg-gray-50'}`}>
              <p className="text-xl md:text-2xl font-mono leading-relaxed">
                <span className="font-bold">&gt; Product Manager</span><br/>
                <span className="opacity-70">&gt; Web3 / DePIN / RWA</span><br/>
                <span className="opacity-70">&gt; Yield Protocols</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#experience" 
                className={`
                  group flex items-center justify-center gap-2 px-6 py-4 font-pixel text-xs
                  border-2 transition-all duration-100
                  ${isDark 
                    ? 'bg-transparent border-white text-white hover:bg-white hover:text-black' 
                    : 'bg-black border-black text-white hover:bg-white hover:text-black'}
                `}
              >
                VIEW LOGS
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <button 
                onClick={onContactClick}
                className={`
                  flex items-center justify-center gap-2 px-6 py-4 font-pixel text-xs
                  border-2 transition-all duration-100 ${shadowClass} active:translate-y-[4px] active:shadow-none hover:-translate-y-1
                  ${isDark 
                    ? 'bg-zinc-800 border-white text-white hover:bg-zinc-700' 
                    : 'bg-white border-black text-black hover:bg-gray-50'}
                `}
              >
                <Terminal className="w-4 h-4" />
                INITIATE CONTACT
              </button>
            </div>
          </motion.div>
        </div>

        {/* Visual/Decoration */}
        <div className="order-1 md:order-2 flex justify-center relative">
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.7, delay: 0.2 }}
             className={`relative w-full max-w-sm aspect-square border-4 ${containerBorder} ${shadowClass} bg-transparent overflow-hidden`}
          >
             {/* Simple Pixel Art Composition */}
             <div className={`absolute inset-0 flex flex-col ${isDark ? 'bg-zinc-800' : 'bg-gray-100'}`}>
                {/* Header Bar */}
                <div className={`h-8 border-b-4 ${containerBorder} flex items-center px-2 gap-2 ${isDark ? 'bg-zinc-900' : 'bg-white'}`}>
                   <div className="w-3 h-3 bg-red-500 border-2 border-black" />
                   <div className="w-3 h-3 bg-yellow-400 border-2 border-black" />
                   <div className="w-3 h-3 bg-green-500 border-2 border-black" />
                   <div className="ml-auto font-mono text-xs">LZ_PROFILE.EXE</div>
                </div>
                
                {/* Content */}
                <div className="flex-1 flex items-center justify-center p-8">
                   <div className="text-center space-y-4">
                      {/* Avatar Placeholder */}
                      <div className={`w-32 h-32 mx-auto border-4 ${containerBorder} relative flex items-center justify-center`}>
                        <div className={`absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/pixel-weave.png')]`}></div>
                        <span className="text-6xl">👨‍💻</span>
                      </div>
                      
                      <div className="font-pixel text-[10px] space-y-2">
                        <div className="flex justify-between gap-4">
                          <span>STR:</span>
                          <div className={`w-24 h-3 border-2 ${containerBorder} p-0.5`}>
                             <div className={`h-full w-[90%] ${isDark ? 'bg-green-400' : 'bg-indigo-600'}`}></div>
                          </div>
                        </div>
                         <div className="flex justify-between gap-4">
                          <span>INT:</span>
                          <div className={`w-24 h-3 border-2 ${containerBorder} p-0.5`}>
                             <div className={`h-full w-[95%] ${isDark ? 'bg-green-400' : 'bg-indigo-600'}`}></div>
                          </div>
                        </div>
                         <div className="flex justify-between gap-4">
                          <span>DEX:</span>
                          <div className={`w-24 h-3 border-2 ${containerBorder} p-0.5`}>
                             <div className={`h-full w-[85%] ${isDark ? 'bg-green-400' : 'bg-indigo-600'}`}></div>
                          </div>
                        </div>
                      </div>
                   </div>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
