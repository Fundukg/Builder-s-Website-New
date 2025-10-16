// src/hooks/useScrollSpy.ts
import { useState, useEffect } from 'react';

export const useScrollSpy = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Отступ от верха

      // Находим текущую секцию
      let currentSection = 'home';
      
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const sectionId = sectionIds[i];
        const element = document.getElementById(sectionId);
        
        if (element && element.offsetTop <= scrollPosition) {
          currentSection = sectionId;
          break;
        }
      }
      
      setActiveSection(currentSection);
    };

    // Троттлинг для производительности
    let ticking = false;
    const updateActiveSection = () => {
      handleScroll();
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateActiveSection);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll(); // Вызываем сразу для установки начального состояния

    return () => window.removeEventListener('scroll', onScroll);
  }, [sectionIds]);

  return activeSection;
};