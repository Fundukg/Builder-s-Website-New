import { Mail, Phone, MapPin, Clock } from 'lucide-react'
// import { useState } from 'react'

export default function Contact() {
  //   const [formData, setFormData] = useState({
  //     name: '',
  //     email: '',
  //     phone: '',
  //     service: '',
  //     message: '',
  //   })

  //   const handleSubmit = (e: React.FormEvent) => {
  //     e.preventDefault()
  //     alert('Thank you for your inquiry! We will contact you soon.')
  //     setFormData({ name: '', email: '', phone: '', service: '', message: '' })
  //   }

  //   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  //     setFormData({
  //       ...formData,
  //       [e.target.name]: e.target.value,
  //     })
  // }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">Свяжитесь с нами</h2>
        <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
          Готовы начать свой проект? Свяжитесь с нами для бесплатной консультации и расчета стоимости.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-neutral-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-green-700 focus:outline-none transition-colors"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-green-700 focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-neutral-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-green-700 focus:outline-none transition-colors"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-neutral-700 mb-2">
                  Service Needed *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-green-700 focus:outline-none transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="log-house">Log House Construction</option>
                  <option value="frame-house">Frame House Building</option>
                  <option value="crown-replacement">Crown Replacement</option>
                  <option value="roofing">Roofing Services</option>
                  <option value="renovation">Renovations & Repairs</option>
                  <option value="other">Other / Consultation</option>
                </select>
              </div> 
            </div> 

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-semibold text-neutral-700 mb-2">
                Project Details *
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-green-700 focus:outline-none transition-colors resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-700 text-white py-4 rounded-lg font-semibold text-lg hover:bg-green-800 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              Send Message
              <Send className="h-5 w-5" />
            </button>
          </form>
        </div> */}
        <div className="lg:col-span-2">
          <img src="/Images/Contact.jpeg" alt="Проект дома" className="rounded-2xl shadow-2xl" />
        </div>
        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">Контактная информация</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Phone className="h-6 w-6 text-green-700" />
                </div>
                <div>
                  <div className="font-semibold text-neutral-900 mb-1">Номер телефона</div>
                  <a href="tel:+88212558880" className="text-neutral-600 hover:text-green-700 transition-colors">
                    8 (8212) 55-88-80
                  </a>
                  <div className="text-sm text-neutral-500 mt-1">Короткий номер телефона</div>
                  <a href="tel:+79009758880" className="text-neutral-600 hover:text-green-700 transition-colors">
                    8 (900) 975-88-80
                  </a>
                  <div className="text-sm text-neutral-500 mt-1">Номер телефона</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Mail className="h-6 w-6 text-green-700" />
                </div>
                <div>
                  <div className="font-semibold text-neutral-900 mb-1">Email</div>
                  <a
                    href="mailto:info@timbercraftbuilders.com"
                    className="text-neutral-600 hover:text-green-700 transition-colors"
                  >
                    domapro11@gmail.com
                  </a>
                  <div className="text-sm text-neutral-500 mt-1">Рабочая почта</div>
                  {/* <a
                    href="mailto:projects@timbercraftbuilders.com"
                    className="text-neutral-600 hover:text-green-700 transition-colors"
                  >
                    Тут будет электронная почта
                  </a>
                  <div className="text-sm text-neutral-500">Личная почта</div> */}
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <MapPin className="h-6 w-6 text-green-700" />
                </div>
                <div>
                  <div className="font-semibold text-neutral-900 mb-1">Зоны обслуживания</div>
                  <div className="text-neutral-600">
                    {/* <div className="text-sm text-neutral-500">Работаем (Сыктывкар и 100+ км): </div> */}
                    Республика Коми
                    {/* <br />
                    Дыронс
                    <br />
                    Выльгорт
                    <br />
                    Максаковка */}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Clock className="h-6 w-6 text-green-700" />
                </div>
                <div>
                  <div className="font-semibold text-neutral-900 mb-1">Рабочие часы</div>
                  <div className="text-neutral-600">
                    Понедельник - Пятница: 7:00 - 18:00
                    <br />
                    Суббота: 8:00 - 16:00
                    <br />
                    Воскресенье: Выходной
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-700 to-green-800 rounded-2xl shadow-xl p-8 text-white">
            <h3 className="text-xl font-bold mb-3">Бсплатная консультация</h3>
            <p className="text-green-50 mb-4">
              Не знаете, с чего начать? Запишитесь на бесплатную консультацию с нашими специалистами, чтобы обсудить ваш
              проект.
            </p>
            {/* <button className="w-full bg-white text-green-800 py-3 rounded-lg font-semibold hover:bg-green-50 transition-all">
              Запланируйте сейчас
            </button> */}
          </div>
        </div>
      </div>
    </div>
  )
}
