import { Star, User, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';

interface Review {
  name: string;
  location: string;
  rating: number;
  date: string;
  text: string;
  project: string;
}

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadReviews = async () => {
      try {
        const response = await fetch('/Data/Reviews.json');
        if (!response.ok) {
          throw new Error('Failed to load reviews');
        }
        const data = await response.json();
        
        // ВАЖНО: Проверяем структуру данных
        if (data.reviews && Array.isArray(data.reviews)) {
          setReviews(data.reviews);
        } else if (Array.isArray(data)) {
          // Если JSON содержит сразу массив, а не объект с полем reviews
          setReviews(data);
        } else {
          console.error('Unexpected data structure:', data);
          setReviews([]);
        }
      } catch (err) {
        setError('Error loading reviews');
        console.error('Error loading reviews:', err);
        setReviews([]); // Всегда устанавливаем массив даже при ошибке
      } finally {
        setLoading(false);
      }
    };

    loadReviews();
  }); 

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`h-5 w-5 ${
              index < rating
                ? 'fill-yellow-400 text-yellow-400'
                : 'fill-neutral-200 text-neutral-200'
            }`}
          />
        ))}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-16">
          <div className="animate-pulse">Загрузка отзывов...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-16 text-red-500">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">Отзывы клиентов</h2>
        <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
          Посмотрите, что говорят наши довольные клиенты о нашей работе
        </p>
        <div className="flex items-center justify-center gap-3 mt-6">
          <div className="flex gap-1">
            {[...Array(5)].map((_, index) => (
              <Star key={index} className="h-8 w-8 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="text-3xl font-bold text-neutral-900">5.0</span>
          {/* ИСПРАВЛЕННАЯ СТРОКА: */}
          <span className="text-neutral-600">На основе {reviews?.length || 0} отзывов</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* ИСПРАВЛЕННАЯ СТРОКА: */}
        {reviews?.map((review, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all border-2 border-neutral-100 hover:border-green-200"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center">
                  <User className="h-6 w-6 text-green-700" />
                </div>
                <div>
                  <h3 className="font-bold text-neutral-900">{review.name}</h3>
                  <p className="text-sm text-neutral-500">{review.location}</p>
                </div>
              </div>
              {renderStars(review.rating)}
            </div>

            <div className="flex items-center gap-2 text-sm text-neutral-500 mb-4">
              <Clock className="h-4 w-4" />
              <span>{review.date}</span>
            </div>

            <p className="text-neutral-700 leading-relaxed mb-4">{review.text}</p>

            <div className="pt-4 border-t border-neutral-200">
              <span className="inline-block px-3 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded-full">
                {review.project}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 md:p-12 border-2 border-green-200 text-center">
        <h3 className="text-2xl font-bold text-neutral-900 mb-4">Готовы начать свой проект?</h3>
        <p className="text-lg text-neutral-600 mb-6">
          Присоединяйтесь к нашим довольным клиентам и позвольте нам воплотить вашу идею строительства в жизнь
        </p>
        <button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-8 py-4 bg-green-700 text-white rounded-lg font-semibold text-lg hover:bg-green-800 transition-all transform hover:scale-105 shadow-lg"
        >
          Получить бесплатный расчет стоимости
        </button>
      </div>
    </div>
  );
}