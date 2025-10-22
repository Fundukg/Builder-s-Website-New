import { MapPin, Clock } from 'lucide-react'
import { useEffect, useState } from 'react'

type Projects = {
  title: string
  category: string
  location: string
  duration: string
  year: string
  image: string
  description: string
}
export default function Projects() {
  const [projects, setProjects] = useState<Projects[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const response = await fetch('/Data/Projects.json')
        if (!response.ok) {
          throw new Error('Failed to load projects')
        }
        const data = await response.json()

        // ВАЖНО: Проверяем структуру данных
        if (data.projects && Array.isArray(data.projects)) {
          setProjects(data.projects)
        } else if (Array.isArray(data)) {
          // Если JSON содержит сразу массив, а не объект с полем projects
          setProjects(data)
        } else {
          console.error('Unexpected data structure:', data)
          setProjects([])
        }
      } catch (err) {
        setError('Error loading projects')
        console.error('Error loading projects:', err)
        setProjects([]) // Всегда устанавливаем массив даже при ошибке
      } finally {
        setLoading(false)
      }
    }

    loadProjects()
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
        Рекомендуемые проекты
      </h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">Рекомендуемые проекты</h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Ознакомьтесь с нашим портфолио завершенных строительных проектов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-green-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {project.year}
                </div>
              </div>

              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full mb-3">
                  {project.category}
                </span>

                <h3 className="text-xl font-bold text-neutral-900 mb-3">{project.title}</h3>
                <p className="text-neutral-600 mb-4 leading-relaxed">{project.description}</p>

                <div className="space-y-2 text-sm text-neutral-500">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-green-700" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-green-700" />
                    <span>Продолжительность: {project.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
