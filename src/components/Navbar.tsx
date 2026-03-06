import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const navLinks = [
  { name: 'HOME', path: '/' },
  { name: 'O ESTÚDIO', path: '/estudio' },
  { name: 'SERVIÇOS', path: '/servicos' },
  { name: 'CURSOS', path: '/cursos' },
  { name: 'RESULTADOS', path: '/resultados' },
  { name: 'DEPOIMENTOS', path: '/depoimentos' },
  { name: 'CONTATO', path: '/contato' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex flex-col">
          <span className={`text-2xl font-serif tracking-widest transition-colors ${scrolled ? 'text-deep-black' : 'text-deep-black'}`}>
            CAÍQUE KENSON
          </span>
          <span className="text-[10px] tracking-[0.3em] uppercase opacity-60">Beauty & Aesthetic</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-xs tracking-widest hover:text-gold transition-colors relative group ${
                location.pathname === link.path ? 'text-gold' : 'text-deep-black'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full ${
                location.pathname === link.path ? 'w-full' : ''
              }`} />
            </Link>
          ))}
          <a 
            href={CONTACT_INFO.instagram} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-deep-black hover:text-gold transition-colors"
          >
            <Instagram size={18} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-deep-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-b border-black/5 lg:hidden shadow-xl"
          >
            <div className="flex flex-col p-8 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm tracking-widest ${
                    location.pathname === link.path ? 'text-gold font-semibold' : 'text-deep-black'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
