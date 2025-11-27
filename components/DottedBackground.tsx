import React from 'react';

interface PixelBackgroundProps {
  isDark: boolean;
}

export const PixelBackground: React.FC<PixelBackgroundProps> = ({ isDark }) => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Base Color handled by App wrapper, this layer adds pattern */}
      
      {/* Grid Pattern */}
      <div 
        className={`absolute inset-0 opacity-[0.2] pointer-events-none`}
        style={{
          backgroundImage: isDark 
            ? `linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)`
            : `linear-gradient(#ccc 1px, transparent 1px), linear-gradient(90deg, #ccc 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Crosshairs at intersections (optional decoration) */}
      <div 
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `radial-gradient(${isDark ? '#4ade80' : '#000'} 2px, transparent 2px)`,
          backgroundSize: '40px 40px',
          backgroundPosition: '20px 20px'
        }}
      />
    </div>
  );
};