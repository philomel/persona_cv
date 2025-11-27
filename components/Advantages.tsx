import React from 'react';
import { Target, Zap, Brain, Globe, LucideIcon } from 'lucide-react';
import { ADVANTAGES } from '../constants';
import { motion } from 'framer-motion';

const iconMap: Record<string, LucideIcon> = {
  Target,
  Zap,
  Brain,
  Globe
};

interface AdvantagesProps {
  isDark: boolean;
}

export const Advantages: React.FC<AdvantagesProps> = ({ isDark }) => {
  const cardBorder = isDark ? 'border-white' : 'border-black';
  const shadowClass = isDark ? 'shadow-retro-dark hover:shadow-retro-dark-hover' : 'shadow-retro hover:shadow-retro-hover';

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 border-b-4 pb-4 border-dashed border-opacity-50" style={{ borderColor: isDark ? 'white' : 'black' }}>
          <h2 className="font-pixel text-2xl md:text-3xl mb-4 uppercase">
            <span className="mr-2 text-3xl">#</span>
            Character Stats
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ADVANTAGES.map((item, index) => {
            const Icon = iconMap[item.iconName];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`
                  group p-6 border-4 ${cardBorder} ${shadowClass} transition-all duration-200
                  ${isDark ? 'bg-zinc-900' : 'bg-white'}
                `}
              >
                <div className={`
                  w-12 h-12 flex items-center justify-center mb-6 border-2
                  ${isDark ? 'border-white bg-zinc-800' : 'border-black bg-gray-100'}
                `}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className={`text-sm font-bold mb-4 font-pixel uppercase ${isDark ? 'text-green-400' : 'text-indigo-600'}`}>
                  {item.title}
                </h3>
                <p className="text-lg leading-tight font-mono">
                  {item.content}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};