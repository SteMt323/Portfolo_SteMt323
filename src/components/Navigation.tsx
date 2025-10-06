import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronUp } from "lucide-react";

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export function Navigation({ activeSection, onNavigate }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'galeria', label: 'Galería' },
    { id: 'sobre-mi', label: 'Sobre Mí' },
    { id: 'redes', label: 'Redes' },
    { id: 'proyectos', label: 'Proyectos' },
    
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Navigation Bar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass-dark' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-white text-xl tracking-wider"
            >
              <a className="sidebar-links">SteMt323</a>
              
            </motion.div>
            
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  onClick={() => onNavigate(item.id)}
                  className={`relative px-3 py-2 text-white transition-colors duration-300 ${
                    activeSection === item.id ? 'text-blue-400' : 'hover:text-blue-300'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400"
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-white p-2">
                <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                  <div className="w-full h-0.5 bg-white"></div>
                  <div className="w-full h-0.5 bg-white"></div>
                  <div className="w-full h-0.5 bg-white"></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Scroll to top button */}
      {isScrolled && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 glass-dark p-3 rounded-full text-white hover:bg-white/20 transition-colors duration-300"
        >
          <ChevronUp size={24} />
        </motion.button>
      )}
    </>
  );
}