import React from 'react';
import { EXPERIENCES } from '../constants';
import { motion } from 'framer-motion';

interface ExperienceProps {
  isDark: boolean;
}

export const Experience: React.FC<ExperienceProps> = ({ isDark }) => {
  const lineColor = isDark ? 'bg-white' : 'bg-black';
  const cardBg = isDark ? 'bg-zinc-900' : 'bg-white';
  const cardBorder = isDark ? 'border-white' : 'border-black';
  const textMuted = isDark ? 'text-gray-400' : 'text-gray-600';

  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="font-pixel text-2xl md:text-4xl mb-4 bg-clip-text">
            QUEST LOG
          </h2>
          <div className="inline-block px-4 py-1 border-2 font-mono text-sm uppercase" style={{ borderColor: isDark ? 'white' : 'black' }}>
             Career History
          </div>
        </div>

        <div className="relative space-y-12">
          {/* Vertical Timeline Line - Styled as a thick dashed line */}
          <div className={`absolute left-4 top-4 bottom-4 w-1 md:left-1/2 md:-ml-0.5 border-r-4 border-dotted ${isDark ? 'border-zinc-700' : 'border-zinc-300'}`} />

          {EXPERIENCES.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row gap-8 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Connector */}
              <div className={`
                absolute left-4 md:left-1/2 w-8 h-1 top-8
                ${isDark ? 'bg-white' : 'bg-black'}
                ${index % 2 === 0 ? 'md:-ml-4' : 'md:-ml-4'}
                hidden md:block
              `} />

              {/* Mobile Dot */}
              <div className={`md:hidden absolute left-[13px] top-8 w-3 h-3 ${isDark ? 'bg-green-400' : 'bg-indigo-600'} border-2 ${isDark ? 'border-white' : 'border-black'}`} />

              {/* Content Card */}
              <div className="md:w-1/2 pl-12 md:pl-0">
                <div className={`
                   relative p-6 border-4 ${cardBorder} ${cardBg}
                   shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)]
                   ${index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'}
                `}>
                   {/* Card Header Decoration */}
                   <div className={`absolute -top-4 left-4 px-2 ${cardBg} border-2 ${cardBorder} font-pixel text-[10px]`}>
                      {exp.period}
                   </div>

                  <div className="mb-4 pt-2">
                    <h3 className={`text-xl font-bold font-pixel mb-1 ${isDark ? 'text-green-400' : 'text-indigo-700'}`}>
                      {exp.company}
                    </h3>
                    <h4 className={`text-lg font-bold border-b-2 inline-block pb-1 ${isDark ? 'border-zinc-700' : 'border-zinc-200'}`}>
                      {exp.role}
                    </h4>
                  </div>

                  <p className={`font-mono text-lg mb-4 leading-snug ${textMuted}`}>
                    {exp.description}
                  </p>

                  <ul className="space-y-3 mb-6 font-mono">
                    {exp.achievements.map((ach, i) => (
                      <li key={i} className="flex gap-3 items-start">
                         <span className={`min-w-[12px] mt-1.5 h-3 w-3 ${isDark ? 'bg-white' : 'bg-black'}`}></span>
                         <span className="leading-tight">{ach}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map(tag => (
                      <span key={tag} className={`px-2 py-1 text-sm border-2 font-bold ${isDark ? 'border-zinc-600 text-zinc-400' : 'border-zinc-300 text-zinc-600'}`}>
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Empty side */}
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};