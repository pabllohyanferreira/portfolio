import React from 'react';
import { motion } from 'framer-motion';
import { getPerformanceConfig } from '../utils/performance';
import { useGradualFade } from '../hooks/useGradualFade';
import './BackgroundParticles.css';

const BackgroundParticles: React.FC = () => {
  const { opacity, translateY } = useGradualFade({ 
    fadeStart: 0.1, 
    fadeEnd: 0.4, 
    maxUpwardMovement: 60 
  });
  const config = getPerformanceConfig();
  
  const particles = Array.from({ length: config.particles }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    delay: Math.random() * 2,
    duration: Math.random() * 6 + 4,
  }));

  return (
    <div 
      className="background-particles"
      style={{ 
        opacity,
        transform: `translateY(${translateY}px)`
      }}
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundParticles;
