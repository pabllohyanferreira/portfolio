import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './ScrollReveal.css';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  distance?: number;
  triggerOnce?: boolean;
  className?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  distance = 50,
  triggerOnce = true,
  className = '',
}) => {
  const { isVisible, elementRef } = useScrollReveal({ triggerOnce });

  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: distance, x: 0 };
      case 'down':
        return { y: -distance, x: 0 };
      case 'left':
        return { y: 0, x: distance };
      case 'right':
        return { y: 0, x: -distance };
      default:
        return { y: distance, x: 0 };
    }
  };

  const initial = getInitialPosition();

  return (
    <motion.div
      ref={elementRef as React.RefObject<HTMLDivElement>}
      className={`scroll-reveal ${className}`}
      initial={{
        opacity: 0,
        ...initial,
      }}
      animate={isVisible ? {
        opacity: 1,
        y: 0,
        x: 0,
      } : {
        opacity: 0,
        ...initial,
      }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94], // Easing suave como no MN Studio
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
