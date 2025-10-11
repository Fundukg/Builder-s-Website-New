import { Home, Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react'
import { FaWhatsapp,FaTelegramPlane   } from "react-icons/fa";
import { RiVkLine } from "react-icons/ri";
export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Home className="h-8 w-8 text-green-500" />
              <div>
                <h3 className="text-xl font-bold text-white">Тут будет название компании</h3>
                <p className="text-xs text-neutral-400">С 2005 года</p>
              </div>
            </div>
            <p className="text-neutral-400 leading-relaxed mb-6">
              Опытные строители, специализирующиеся на бревенчатых домах, каркасном строительстве, замене венцов и
              кровельных работах. Высокое качество, которому можно доверять.
            </p>
            <div className="flex gap-4">
              <a href="https://vk.com/build_rus11" target="_blank" className="p-2 bg-neutral-800 rounded-lg hover:bg-green-700 transition-colors">
                <RiVkLine className="h-7 w-7" />
              </a>
              <a onClick={() => scrollToSection('contact')} className="p-2 bg-neutral-800 rounded-lg hover:bg-green-700 transition-colors">
                <FaWhatsapp className="h-7 w-7" />
              </a>
              <a onClick={() => scrollToSection('contact')} className="p-2 bg-neutral-800 rounded-lg hover:bg-green-700 transition-colors">
                <FaTelegramPlane className="h-7 w-7" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Навигация</h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection('home')} className="hover:text-green-500 transition-colors">
                  Главная
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-green-500 transition-colors">
                  Услуги
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('projects')} className="hover:text-green-500 transition-colors">
                  Проекты
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('gallery')} className="hover:text-green-500 transition-colors">
                  Галерия
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('videos')} className="hover:text-green-500 transition-colors">
                  Видео
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('reviews')} className="hover:text-green-500 transition-colors">
                  Отзывы
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-green-500 transition-colors">
                  О нас
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Услуги</h4>
            <ul className="space-y-3">
              <li className="hover:text-green-500 transition-colors cursor-pointer">
                <a onClick={() => scrollToSection('services')}>Строительство бревенчатых домов</a>
              </li>
              <li className="hover:text-green-500 transition-colors cursor-pointer">
                <a onClick={() => scrollToSection('services')}>Строительство каркасных домов</a>
              </li>
              <li className="hover:text-green-500 transition-colors cursor-pointer">
                <a onClick={() => scrollToSection('services')}>Замена венцов</a>
              </li>
              <li className="hover:text-green-500 transition-colors cursor-pointer">
                <a onClick={() => scrollToSection('services')}>Кровельные работы</a>
              </li>
              <li className="hover:text-green-500 transition-colors cursor-pointer">
                <a onClick={() => scrollToSection('services')}>Ремонт и ремонт</a>
              </li>
              <li className="hover:text-green-500 transition-colors cursor-pointer">
                <a onClick={() => scrollToSection('services')}>Индивидуальные проекты</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Контактная информация</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <div className="text-white font-medium mb-1">Адрес</div>
                  <div className="text-sm">Сыктывкар</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <div className="text-white font-medium mb-1">Номер телефона</div>
                  <a href="tel:+78212558880" className="hover:text-green-500 transition-colors text-sm">
                    +7 (821) 255-88-80
                  </a>
                  <br />
                  <a href="tel:+79009758880" className="hover:text-green-500 transition-colors text-sm">
                    +7 (900) 975-88-80
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <div className="text-white font-medium mb-1">Email</div>
                  <a href="mailto:max.arendaruk@gmail.com" className="hover:text-green-500 transition-colors text-sm">
                    Тут будет адрес электронной почты
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center ">
            <div className="text-sm text-neutral-400">
              <p className="font-semibold text-white mb-1">Часы работы</p>
              <p>Пн-Пт: 7:00–18:00 | Сб: 8:00–16:00</p>
            </div>
            <div className="text-sm text-neutral-400">
              <p className="font-semibold text-white mb-1">Зоны обслуживания</p>
              <p>Сыктывкар, Выльгорт, Давпон, Дырнос, Максаковка</p>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-sm text-neutral-500">
          <p>&copy; {currentYear} Тут будет название компании. Все права защищены.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-green-500 transition-colors">
              Политика конфиденциальности
            </a>
            <span>•</span>
            <a href="#" className="hover:text-green-500 transition-colors">
              Карта сайта
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
