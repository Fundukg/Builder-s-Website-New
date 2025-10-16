import { Home, Mail, Phone, MapPin } from 'lucide-react'
import { useEffect, useState } from 'react'
import { FaWhatsapp, FaTelegramPlane } from 'react-icons/fa'
import { MdOutlinePrivacyTip } from 'react-icons/md'
import { RiVkLine } from 'react-icons/ri'

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false)
  const openModel = () => {
    setIsOpen(true)
  }
  const closeModal = () => {
    setIsOpen(false)
  }
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      // Блокируем скролл страницы когда модальное окно открыто
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Закрытие при клике на фон
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal()
    }
  }

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
                <h3 className="text-xl font-bold text-white">Домpro</h3>
                <p className="text-xs text-neutral-400">С 2005 года</p>
              </div>
            </div>
            <p className="text-neutral-400 leading-relaxed mb-6">
              Опытные строители, специализирующиеся на бревенчатых домах, каркасном строительстве, замене венцов и
              кровельных работах. Высокое качество, которому можно доверять.
            </p>
            <div className="flex gap-4">
              <a
                href="https://vk.com/build_rus11"
                target="_blank"
                className="p-2 bg-neutral-800 rounded-lg hover:bg-green-700 transition-colors"
              >
                <RiVkLine className="h-7 w-7" />
              </a>
              <a
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('contact')
                }}
                className="p-2 bg-neutral-800 rounded-lg hover:bg-green-700 transition-colors"
              >
                <FaWhatsapp className="h-7 w-7" />
              </a>
              <a
                href="https://www.avito.ru/syktyvkar/predlozheniya_uslug/stroitelstvo_remont_otdelkakrovlyazaborydoma_2086818000?utm_campaign=native&utm_medium=item_page_android&utm_source=soc_sharing_seller"
                target='_blank'
                className="p-2 bg-neutral-800 rounded-lg hover:bg-green-700 transition-colors"
              >
                <img src="Images/avito.svg" className="h-7 w-7" />
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
              {/* <li>
                <button onClick={() => scrollToSection('videos')} className="hover:text-green-500 transition-colors">
                  Видео
                </button>
              </li> */}
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
            <a
              onClick={(e) => {
                e.preventDefault()
                openModel()
              }}
              className="hover:text-green-500 transition-colors"
            >
              Политика конфиденциальности
            </a>
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={handleBackdropClick}
        >
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-scale-in">
            {/* Заголовок модального окна */}
            <div className="flex justify-between items-center p-6 border-b border-neutral-200 bg-neutral-50">
              <div className="flex items-start gap-2">
                <MdOutlinePrivacyTip className="h-8 w-8 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-neutral-900 ">Политика конфиденциальности</h2>
                  <p className="text-sm text-neutral-600 mt-1">
                    Последнее обновление: {new Date().toLocaleDateString('ru-RU')}
                  </p>
                </div>
              </div>
            </div>

            {/* Контент модального окна */}
            <div className="p-6 overflow-y-auto max-h-[70vh]">
              <div className="prose prose-lg max-w-none">
                <div className="space-y-6 text-neutral-700 leading-relaxed">
                  <section className="border-b border-neutral-200 pb-6">
                    <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                      1. Информация пользователей, которую получает и обрабатывает Сайт
                    </h3>
                    <div className="space-y-4 ml-4">
                      <div>
                        <h4 className="font-medium text-neutral-900 mb-2">
                          1.1. В рамках настоящей Политики под информацией пользователя понимаются:
                        </h4>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                          <li>
                            Информация, которую пользователь предоставляет о себе самостоятельно заполнением форм
                            обратной связи.
                          </li>
                          <li>
                            Данные, которые автоматически передаются в процессе их использования с помощью
                            установленного на устройстве пользователя программного обеспечения, в том числе IP-адрес,
                            информация из cookie, время доступа и т.п.
                          </li>
                        </ul>
                      </div>
                      <p className="font-medium text-neutral-900">
                        1.2. Сайт не проверяет достоверность полученной от пользователя информации.
                      </p>
                    </div>
                  </section>

                  <section className="border-b border-neutral-200 pb-6">
                    <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                      2. Цели сбора и обработки информации пользователей
                    </h3>
                    <div className="space-y-4 ml-4">
                      <p className="font-medium text-neutral-900">
                        2.1. Сайт собирает и хранит только те данные, которые необходимы для обратной связи с
                        пользователем предоставившим свои данные.
                      </p>
                      <div>
                        <h4 className="font-medium text-neutral-900 mb-2">
                          2.2. Информацию пользователя Сайт может использовать в следующих целях:
                        </h4>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                          <li>
                            Связь с пользователем, в том числе направление уведомлений, запросов и информации,
                            касающихся использования сервисов Сайта, а также обработка запросов и заявок от
                            пользователя.
                          </li>
                          <li>Улучшения качества, удобства их использования, разработка услуг.</li>
                          <li>Таргетирование рекламных материалов.</li>
                          <li>Предоставление пользователю персонализированных услуг.</li>
                          <li>Проведение статистических и иных исследований на основе обезличенных данных.</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  <section className="border-b border-neutral-200 pb-6">
                    <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                      3. Условия обработки информации пользователей
                    </h3>
                    <div className="space-y-4 ml-4">
                      <p className="font-medium text-neutral-900">
                        3.1. Сайт хранит информацию пользователей в соответствии с внутренними регламентами конкретных
                        сервисов.
                      </p>
                      <p className="font-medium text-neutral-900">
                        3.2. В отношении информации пользователя сохраняется ее конфиденциальность.
                      </p>
                    </div>
                  </section>

                  <section className="border-b border-neutral-200 pb-6">
                    <h3 className="text-xl font-semibold text-neutral-900 mb-4">4. Изменение и защита информации</h3>
                    <div className="space-y-4 ml-4">
                      <p className="font-medium text-neutral-900">
                        4.1. Пользователь может в любой момент изменить (обновить, дополнить) предоставленную им
                        информацию или её часть, а также параметры её конфиденциальности.
                      </p>
                      <p className="font-medium text-neutral-900">
                        4.2. Сайт принимает необходимые и достаточные организационные и технические меры для защиты
                        информации пользователей от неправомерного или случайного доступа, уничтожения, изменения,
                        блокирования, копирования, распространения, а также от иных неправомерных действий с ней третьих
                        лиц.
                      </p>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                      5. Изменения в Политике конфиденциальности
                    </h3>
                    <div className="ml-4">
                      <p className="font-medium text-neutral-900">
                        Сайт имеет право вносить изменения в настоящую Политику конфиденциальности. При внесении
                        изменений в актуальной редакции указывается дата последнего обновления. Новая редакция Политики
                        вступает в силу с момента её размещения, если иное не предусмотрено новой редакцией Политики.
                      </p>
                    </div>
                  </section>
                </div>
              </div>
            </div>

            {/* Футер модального окна */}
            <div className="flex justify-between items-center p-6 border-t border-neutral-200 bg-neutral-50">
              <span className="text-sm text-neutral-600">Для закрытия нажмите кнопку или клавишу ESC</span>
              <button
                onClick={closeModal}
                className="px-8 py-3 bg-green-700 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Закрыть
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  )
}
