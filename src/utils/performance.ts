// Utilitários de performance
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: number | undefined;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Verificar se o dispositivo é móvel para reduzir animações
export const isMobile = () => {
  return window.innerWidth < 768;
};

// Reduzir animações em dispositivos com baixa performance
export const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Configurações de performance baseadas no dispositivo
export const getPerformanceConfig = () => {
  const mobile = isMobile();
  const reducedMotion = prefersReducedMotion();
  
  return {
    particles: mobile ? 5 : 15,
    animations: reducedMotion ? false : true,
    complexEffects: !mobile && !reducedMotion,
  };
};
