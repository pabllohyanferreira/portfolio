import React from 'react';
import { motion } from 'framer-motion';
import { useGradualFade } from '../hooks/useGradualFade';
import './ProgrammingElements.css';

const ProgrammingElements: React.FC = () => {
  const { opacity, translateY } = useGradualFade({ 
    fadeStart: 0.1, 
    fadeEnd: 0.5, 
    maxUpwardMovement: 40 
  });

  return (
    <div 
      className="programming-elements"
      style={{ 
        opacity,
        transform: `translateY(${translateY}px)`
      }}
    >
      {/* Código flutuante */}
      <motion.div
        className="floating-code"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <pre className="code-snippet">
{`function createPortfolio() {
  const skills = ['React', 'TypeScript', 'Node.js'];
  return <Developer {...skills} />;
}`}
        </pre>
      </motion.div>

      {/* Terminal flutuante */}
      <motion.div
        className="floating-terminal"
        animate={{
          y: [0, -15, 0],
          opacity: [0.4, 0.9, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <div className="terminal">
          <div className="terminal-header">
            <div className="terminal-buttons">
              <span className="btn red"></span>
              <span className="btn yellow"></span>
              <span className="btn green"></span>
            </div>
            <span className="terminal-title">terminal</span>
          </div>
          <div className="terminal-body">
            <div className="terminal-line">
              <span className="prompt">$</span>
              <span className="command">npm run dev</span>
            </div>
            <div className="terminal-line">
              <span className="output">Server running on port 3000</span>
            </div>
            <div className="terminal-line">
              <span className="prompt">$</span>
              <span className="cursor">_</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Matrix rain effect */}
      <div className="matrix-rain">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="matrix-column"
            style={{
              left: `${i * 5}%`,
              animationDelay: `${i * 0.2}s`,
            }}
            animate={{
              y: [0, 100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "linear",
            }}
          >
            {[...Array(10)].map((_, j) => (
              <div key={j} className="matrix-char">
                {Math.random() > 0.5 ? '1' : '0'}
              </div>
            ))}
          </motion.div>
        ))}
      </div>

      {/* Hexágonos flutuantes */}
      <motion.div
        className="floating-hex"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="hexagon">
          <div className="hex-content">JS</div>
        </div>
      </motion.div>

      <motion.div
        className="floating-hex"
        animate={{
          rotate: [360, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
          delay: 2,
        }}
      >
        <div className="hexagon">
          <div className="hex-content">TS</div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProgrammingElements;

