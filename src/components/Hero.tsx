import React from 'react';
import { motion } from 'framer-motion';
import { useTypewriter } from '../hooks/useTypewriter';
import TypewriterCursor from './TypewriterCursor';
import TerminalWindow from './TerminalWindow';
import './Hero.css';

const Hero: React.FC = () => {
  const words = ['Web Developer', 'Creative Designer', 'Digital Creator'];
  const colors = ['#00ff88', '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4'];
  
  const { currentText, isDeleting, currentWordIndex } = useTypewriter({
    words,
    typeSpeed: 120,
    deleteSpeed: 60,
    pauseTime: 2000,
    loop: true,
  });

  return (
    <section id="hero" className="hero">
      <TerminalWindow />
      <div className="hero-content">
        <div className="hero-layout">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
          <h1 className="hero-title">
            <motion.span 
              className="static-text"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              I Am A
            </motion.span>
            <div className="dynamic-text-container">
              <motion.span
                className="dynamic-text"
                style={{ 
                  color: colors[currentWordIndex % colors.length],
                  minHeight: '1.2em',
                  display: 'inline-block'
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {currentText}
                <TypewriterCursor 
                  isActive={!isDeleting || currentText.length > 0}
                  color={colors[currentWordIndex % colors.length]}
                />
              </motion.span>
            </div>
          </h1>
          
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Transformando ideias em experiências digitais extraordinárias
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <a href="#projects" className="btn-primary">
              Ver Meu Trabalho
            </a>
            <a 
              href="https://www.linkedin.com/in/pabllo-hyan-34943a357" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              LinkedIn
            </a>
          </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
