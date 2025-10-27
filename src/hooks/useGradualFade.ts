import { useState, useEffect } from 'react';

interface FadeConfig {
  fadeStart: number; // Porcentagem da altura da tela para começar o fade
  fadeEnd: number;   // Porcentagem da altura da tela para terminar o fade
  maxUpwardMovement?: number; // Movimento máximo para cima em pixels
}

export const useGradualFade = (config: FadeConfig) => {
  const [opacity, setOpacity] = useState(1);
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;
      
      const fadeStart = heroHeight * config.fadeStart;
      const fadeEnd = heroHeight * config.fadeEnd;
      
      if (scrollY < fadeStart) {
        setOpacity(1);
        setTranslateY(0);
      } else if (scrollY > fadeEnd) {
        setOpacity(0);
        setTranslateY(-(config.maxUpwardMovement || 50));
      } else {
        // Interpolação linear entre 1 e 0
        const progress = (scrollY - fadeStart) / (fadeEnd - fadeStart);
        setOpacity(1 - progress);
        setTranslateY(-(config.maxUpwardMovement || 50) * progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [config.fadeStart, config.fadeEnd, config.maxUpwardMovement]);

  return { opacity, translateY };
};
