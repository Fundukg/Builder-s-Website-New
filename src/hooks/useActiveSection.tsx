import { useEffect, useState } from 'react'

// src/hooks/useActiveSection.ts
export const useScrollSpy = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100 // Смотрим на 100px ниже верха экрана

      let currentSection = 'home'

      // Идем по всем секциям с конца (снизу вверх)
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const sectionId = sectionIds[i]
        const element = document.getElementById(sectionId)

        // Если верх секции выше нашей текущей позиции прокрутки
        if (element && element.offsetTop <= scrollPosition) {
          currentSection = sectionId
          break // Нашли самую верхнюю видимую секцию - выходим
        }
      }

      setActiveSection(currentSection)
    }

    // Оптимизация: не вызываем функцию на КАЖДЫЙ пиксель прокрутки
    let ticking = false
    const updateActiveSection = () => {
      handleScroll()
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateActiveSection)
        ticking = true
      }
    }

    // Подписываемся на событие прокрутки
    window.addEventListener('scroll', onScroll, { passive: true })
    handleScroll() // Вызываем сразу при загрузке

    return () => window.removeEventListener('scroll', onScroll)
  }, [sectionIds])

  return activeSection
}
