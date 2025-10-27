import React, { useEffect } from 'react';

const SmoothScroll: React.FC = () => {
  useEffect(() => {
    // Suavizar scroll para navegadores que não suportam CSS scroll-behavior
    const smoothScrollTo = (target: string) => {
      const element = document.querySelector(target);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    };

    // Adicionar event listeners para links de navegação
    const handleClick = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const href = target.getAttribute('href');
        if (href) {
          smoothScrollTo(href);
        }
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return null;
};

export default SmoothScroll;
