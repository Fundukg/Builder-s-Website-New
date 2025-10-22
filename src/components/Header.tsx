// components/Header.tsx
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { NAV_ITEMS } from '../App'

type HeaderProps = {
  activeSection: string // Только для отображения
}

export default function Header({ activeSection }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Функция для плавной прокрутки к секции
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      // Вычисляем позицию для прокрутки с учетом высоты header
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      // Плавно прокручиваем к секции
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
    // Закрываем мобильное меню после клика
    setMobileMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50" role="navigation">
      <nav role="navigation" aria-label="Основная навигация">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Логотип - при клике прокручиваем к главной */}
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('home')}>
              <img src="/LogoB.png" alt="Logo" className="w-20 h-19" />
              <div>
                <h1 className="text-2xl font-bold text-neutral-900">Домpro</h1>
                <p className="text-xs text-neutral-600">Качественное строительство с 2005 года</p>
              </div>
            </div>

            {/* Десктопное меню */}
            <nav className="hidden min-[901px]:flex space-x-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    // Если эта кнопка соответствует активной секции - подсвечиваем её
                    activeSection === item.id
                      ? 'bg-green-700 text-white'
                      : 'text-neutral-700 hover:bg-green-50 hover:text-green-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Кнопка мобильного меню */}
            <button
              className="min-[901px]:hidden p-2 rounded-lg hover:bg-neutral-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Мобильное меню */}
        {mobileMenuOpen && (
          <div className="min-[901px]:hidden border-t border-neutral-200 bg-white">
            <nav className="px-4 py-4 space-y-2">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    // Та же логика подсветки для мобильного меню
                    activeSection === item.id ? 'bg-green-700 text-white' : 'text-neutral-700 hover:bg-green-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </nav>
    </header>
  )
}
