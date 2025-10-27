import React from 'react';
import { motion } from 'framer-motion';
import './InteractiveCard.css';

interface InteractiveCardProps {
  children: React.ReactNode;
  className?: string;
  hoverScale?: number;
  hoverRotate?: number;
  glowColor?: string;
}

const InteractiveCard: React.FC<InteractiveCardProps> = ({
  children,
  className = '',
  hoverScale = 1.05,
  hoverRotate = 0,
  glowColor = '#00ff88',
}) => {
  return (
    <motion.div
      className={`interactive-card ${className}`}
      style={{ '--glow-color': glowColor } as React.CSSProperties}
      whileHover={{
        scale: hoverScale,
        rotate: hoverRotate,
        transition: {
          duration: 0.3,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      }}
      whileTap={{
        scale: 0.98,
        transition: {
          duration: 0.1,
        },
      }}
    >
      <div className="card-content">
        {children}
      </div>
      <div className="card-glow"></div>
    </motion.div>
  );
};

export default InteractiveCard;
