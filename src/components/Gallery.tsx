import { X } from 'lucide-react'
import { useEffect, useState } from 'react'

type Images = {
  url: string
  title: string
  category: string
}
export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [images, setImages] = useState<Images[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadImages = async () => {
      try {
        const response = await fetch('/Data/Gallery.json')
        if (!response.ok) {
          throw new Error('Failed to load images')
        }
        const data = await response.json()

        // ВАЖНО: Проверяем структуру данных
        if (data.images && Array.isArray(data.images)) {
          setImages(data.images)
        } else if (Array.isArray(data)) {
          // Если JSON содержит сразу массив, а не объект с полем images
          setImages(data)
        } else {
          console.error('Unexpected data structure:', data)
          setImages([])
        }
      } catch (err) {
        setError('Error loading images')
        console.error('Error loading images:', err)
        setImages([]) // Всегда устанавливаем массив даже при ошибке
      } finally {
        setLoading(false)
      }
    }

    loadImages()
  })
  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-16">
          <div className="animate-pulse">Загрузка галереи...</div>
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">Галерея</h2>
        <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
          Просмотрите нашу коллекцию завершенных проектов и текущих работ
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all"
            onClick={() => setSelectedImage(image.url)}
          >
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-64 object-cover transition-transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white font-semibold text-lg">{image.title}</p>
                <p className="text-green-300 text-sm">{image.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-6 w-6 text-white" />
          </button>
          <img
            src={selectedImage}
            alt="Full size"
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}
