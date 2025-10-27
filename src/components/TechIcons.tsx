import React from 'react';
import { motion } from 'framer-motion';
import { useGradualFade } from '../hooks/useGradualFade';
import './TechIcons.css';

interface TechIconProps {
  icon: string;
  label: string;
  position: { x: number; y: number };
  delay?: number;
}

const TechIcon: React.FC<TechIconProps> = ({ icon, label, position, delay = 0 }) => {
  return (
    <motion.div
      className="tech-icon"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.6,
        delay,
        ease: "easeOut",
      }}
      whileHover={{
        scale: 1.05,
        transition: { 
          duration: 0.3,
          ease: [0.25, 0.46, 0.45, 0.94]
        },
      }}
    >
      <div className="icon-content">
        <span className="icon-emoji">{icon}</span>
        <span className="icon-label">{label}</span>
      </div>
      <div className="icon-glow"></div>
    </motion.div>
  );
};

const TechIcons: React.FC = () => {
  const { opacity, translateY } = useGradualFade({ 
    fadeStart: 0.2, 
    fadeEnd: 0.6, 
    maxUpwardMovement: 80 
  });
  
  const icons = [
    { icon: '⚛️', label: 'React', position: { x: 15, y: 25 } },
    { icon: '🔷', label: 'TypeScript', position: { x: 80, y: 20 } },
    { icon: '🎨', label: 'CSS3', position: { x: 20, y: 70 } },
    { icon: '⚡', label: 'Vite', position: { x: 75, y: 75 } },
    { icon: '🚀', label: 'Performance', position: { x: 50, y: 10 } },
  ];

  return (
    <div 
      className="tech-icons-container"
      style={{ 
        opacity,
        transform: `translateY(${translateY}px)`
      }}
    >
      {icons.map((iconData, index) => (
        <TechIcon
          key={iconData.label}
          {...iconData}
          delay={index * 0.1}
        />
      ))}
    </div>
  );
};

export default TechIcons;
