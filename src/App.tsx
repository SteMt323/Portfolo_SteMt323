import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { GallerySection } from './components/GallerySection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';

export default function App() {
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    // Set the page to dark mode
    document.documentElement.classList.add('dark');
    
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    const handleScroll = () => {
      const sections = ['inicio', 'galeria', 'sobre-mi', 'proyectos'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />
      <HeroSection />
      <GallerySection />
      <AboutSection />
      <ProjectsSection />
    </div>
  );
}