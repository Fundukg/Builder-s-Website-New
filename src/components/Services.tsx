import { useEffect, useState } from 'react'
import { getIconComponent, IconName } from '../utils/iconMapper'

type Services = {
  icon: IconName
  title: string
  description: string
  featured: string
}
export default function Services() {
  const [services, setServices] = useState<Services[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadServices = async () => {
      try {
        const response = await fetch('/Data/Services.json')
        if (!response.ok) {
          throw new Error('Failed to load services')
        }
        const data = await response.json()

        // ВАЖНО: Проверяем структуру данных
        if (data.services && Array.isArray(data.services)) {
          setServices(data.services)
        } else if (Array.isArray(data)) {
          // Если JSON содержит сразу массив, а не объект с полем services
          setServices(data)
        } else {
          console.error('Unexpected data structure:', data)
          setServices([])
        }
      } catch (err) {
        setError('Error loading services')
        console.error('Error loading services:', err)
        setServices([]) // Всегда устанавливаем массив даже при ошибке
      } finally {
        setLoading(false)
      }
    }

    loadServices()
  })
  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-16">
          <div className="animate-pulse">Загрузка проектов...</div>
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
        Наши услуги
      </h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">Наши услуги</h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Комплексные строительные решения от фундамента до отделки
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = getIconComponent(service.icon)
            return (
              <div
                key={index}
                className={`p-8 rounded-xl border-2 transition-all hover:shadow-xl ${
                  service.featured
                    ? 'bg-gradient-to-br from-green-50 to-white border-green-300 shadow-lg'
                    : 'bg-white border-neutral-200 hover:border-green-300'
                }`}
              >
                <div
                  className={`inline-flex p-4 rounded-lg mb-6 ${service.featured ? 'bg-green-700' : 'bg-green-100'}`}
                >
                  <IconComponent className={`h-8 w-8 ${service.featured ? 'text-white' : 'text-green-700'}`} />
                </div>

                {service.featured && (
                  <span className="inline-block px-3 py-1 bg-green-700 text-white text-xs font-semibold rounded-full mb-4">
                    СПЕЦИАЛЬНОСТЬ
                  </span>
                )}

                <h3 className="text-2xl font-bold text-neutral-900 mb-4">{service.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-green-700 to-green-800 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Вам нужно индивидуальное решение?</h3>
          <p className="text-xl mb-6 text-green-50">Мы здесь, чтобы обсудить ваши уникальные требования к проекту</p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-white text-green-800 rounded-lg font-semibold hover:bg-green-50 transition-all transform hover:scale-105"
          >
            Свяжитесь с нами сегодня
          </button>
        </div>
      </div>
    </section>
  )
}
