import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NavLink from './NavLink';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      setIsOpen(false);
      const offset = 80; // Height of the navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Update active section
      const sections = ['home', 'about', 'skills', 'education', 'projects', 'contact'];
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

      // Update scroll progress
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <motion.div
        className="scroll-progress"
        style={{ scaleX: scrollProgress / 100 }}
      />
      <div className="container navbar__container">
        <div className="navbar__logo">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Dheeraj Sai
          </motion.h1>
          <motion.span
            className="navbar__subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Data Scientist & MERN Stack Developer
          </motion.span>
        </div>

        {/* Desktop Menu */}
        <div className="navbar__menu desktop-menu">
          <NavLink href="#home" onClick={scrollToSection} active={activeSection === 'home'}>Home</NavLink>
          <NavLink href="#about" onClick={scrollToSection} active={activeSection === 'about'}>About Me</NavLink>
          <NavLink href="#skills" onClick={scrollToSection} active={activeSection === 'skills'}>Skills</NavLink>
          <NavLink href="#education" onClick={scrollToSection} active={activeSection === 'education'}>Education</NavLink>
          <NavLink href="#projects" onClick={scrollToSection} active={activeSection === 'projects'}>Projects</NavLink>
          <NavLink href="#contact" onClick={scrollToSection} active={activeSection === 'contact'}>Contact</NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="navbar__mobile-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${isOpen ? 'active' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="container mobile-menu__container">
              <NavLink href="#home" onClick={scrollToSection} active={activeSection === 'home'} mobile>Home</NavLink>
              <NavLink href="#about" onClick={scrollToSection} active={activeSection === 'about'} mobile>About Me</NavLink>
              <NavLink href="#skills" onClick={scrollToSection} active={activeSection === 'skills'} mobile>Skills</NavLink>
              <NavLink href="#education" onClick={scrollToSection} active={activeSection === 'education'} mobile>Education</NavLink>
              <NavLink href="#projects" onClick={scrollToSection} active={activeSection === 'projects'} mobile>Projects</NavLink>
              <NavLink href="#contact" onClick={scrollToSection} active={activeSection === 'contact'} mobile>Contact</NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
