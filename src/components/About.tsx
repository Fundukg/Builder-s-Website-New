import { useEffect, useState } from 'react'
import { getIconComponent, IconName } from '../utils/iconMapper'
type About = {
  icon: IconName
  title: string
  description: string
}
export default function About() {
  const [about, setAbout] = useState<About[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadabout = async () => {
      try {
        const response = await fetch('/Data/About.json')
        if (!response.ok) {
          throw new Error('Failed to load About')
        }
        const data = await response.json()

        // ВАЖНО: Проверяем структуру данных
        if (data.about && Array.isArray(data.about)) {
          setAbout(data.about)
        } else if (Array.isArray(data)) {
          // Если JSON содержит сразу массив, а не объект с полем about
          setAbout(data)
        } else {
          console.error('Unexpected data structure:', data)
          setAbout([])
        }
      } catch (err) {
        setError('Error loading about')
        console.error('Error loading about:', err)
        setAbout([]) // Всегда устанавливаем массив даже при ошибке
      } finally {
        setLoading(false)
      }
    }

    loadabout()
  })
  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-16">
          <div className="animate-pulse">Загрузка отзывов...</div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-16 text-red-500">{error}</div>
      </div>
    )
  }

  return (
    <section aria-labelledby="services-heading">
      <h2 id="services-heading" className="sr-only">
        О нас
      </h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">О нас</h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Воплощаем мечты в реальность с высоким качеством с 2005 года
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img src="/Images/About.jpeg" alt="Наша команда на работе" className="rounded-2xl shadow-2xl" />
          </div>

          <div>
            <h3 className="text-3xl font-bold text-neutral-900 mb-6">Наша исторя</h3>
            <div className="space-y-4 text-neutral-700 leading-relaxed text-lg">
              <p>
                Компания Домpro была основана в 2005 году благодаря страсти к традиционному строительству бревенчатых
                домов и приверженности к качественному мастерству. Начав с небольшого семейного предприятия, мы
                превратились в надежного производителя бревенчатых и каркасных домов.
              </p>
              <p>
                Наш опыт в замене венцов и кровельных работах основан на многолетнем опыте обслуживания и реставрации
                исторических бревенчатых построек. Мы понимали, что сохранение этих прекрасных зданий требует
                специальных знаний и технологий.
              </p>
              <p>
                Наша работа с реставрацией старых домов дала нам бесценный опыт. Мы изучили все типичные ошибки
                строительства, которые приводят к преждевременному разрушению зданий. Это знание позволяет нам заранее
                предусматривать и устранять скрытые риски в новых проектах.
              </p>
              <p>
                Мы создаем конструкции, устойчивые к влаге и гниению, с самого начала. Таким образом, мы гарантируем,
                что ваш дом будет служить долгие десятилетия без проблем. Наша цель — максимально продлить срок его
                эксплуатации и защитить ваши инвестиции.
              </p>
              <p className="font-semibold text-green-800">
                Более 200 выполненных проектов и бесчисленное количество довольных клиентов позволяют нам укреплять
                репутацию ведущих специалистов по строительству в регионе.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold text-neutral-900 mb-12 text-center">Наши ценности</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {about.map((value, index) => {
              const IconComponent = getIconComponent(value.icon)
              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-xl bg-gradient-to-b from-green-50 to-white border border-green-200 hover:shadow-lg transition-shadow"
                >
                  <div className="inline-flex p-4 bg-green-700 rounded-full mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-neutral-900 mb-3">{value.title}</h4>
                  <p className="text-neutral-600 leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-green-400 mb-2">18+</div>
              <div className="text-xl text-neutral-300">Лет опыта</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-green-400 mb-2">200+</div>
              <div className="text-xl text-neutral-300">Выполненных проектов</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-green-400 mb-2">100%</div>
              <div className="text-xl text-neutral-300">Удовлетворенных клиентов</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
