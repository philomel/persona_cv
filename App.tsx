import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Advantages } from './components/Advantages';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
import { PixelBackground } from './components/DottedBackground';
import { ContactModal } from './components/ContactModal';

const App: React.FC = () => {
  // Default to light mode as requested
  const [isDark, setIsDark] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Toggle Dark Mode Class on HTML element
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);
  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  return (
    <div className={`relative min-h-screen font-sans transition-colors duration-0 ${isDark ? 'bg-retro-dark-bg text-white' : 'bg-white text-black'}`}>
      
      {/* Background Grid */}
      <PixelBackground isDark={isDark} />
      
      {/* Content Layer */}
      <div className="relative z-10 flex flex-col">
        <Navbar 
          isDark={isDark} 
          toggleTheme={toggleTheme} 
          onContactClick={openContact}
        />
        <main className="flex-grow pt-24 px-4 md:px-0">
          <Hero isDark={isDark} onContactClick={openContact} />
          <Advantages isDark={isDark} />
          <Experience isDark={isDark} />
        </main>
        <Footer onContactClick={openContact} isDark={isDark} />
      </div>

      {/* Modal */}
      <ContactModal 
        isOpen={isContactOpen} 
        onClose={closeContact} 
        isDark={isDark} 
      />
    </div>
  );
};

export default App;