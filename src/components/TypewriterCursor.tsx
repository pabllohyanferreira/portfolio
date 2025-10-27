import React from 'react';
import { motion } from 'framer-motion';
import './TypewriterCursor.css';

interface TypewriterCursorProps {
  isActive?: boolean;
  color?: string;
}

const TypewriterCursor: React.FC<TypewriterCursorProps> = ({ 
  isActive = true, 
  color = '#00ff88' 
}) => {
  return (
    <motion.span
      className="typewriter-cursor"
      style={{ color }}
      animate={{
        opacity: isActive ? [1, 0, 1] : 1,
      }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      |
    </motion.span>
  );
};

export default TypewriterCursor;
