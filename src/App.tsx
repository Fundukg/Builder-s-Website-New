import { useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer/Footer';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Reviews from './components/Reviews/Reviews';
import Services from './components/Services';
// import Videos from './components/Videos';
import { useScrollSpy  } from './hooks/useActiveSection';

// Выносим навигацию в константу
export const NAV_ITEMS = [
  { id: 'home', label: 'Главная' },
  { id: 'services', label: 'Услуги' },
  { id: 'projects', label: 'Проекты' },
  { id: 'gallery', label: 'Галерея' },
  // { id: 'videos', label: 'Видео' },
  { id: 'reviews', label: 'Отзывы' },
  { id: 'about', label: 'О нас' },
  { id: 'contact', label: 'Контакты' },
];

// Получаем массив ID секций
const sectionIds = NAV_ITEMS.map(item => item.id);

function App() {
  const activeSection = useScrollSpy (sectionIds);
  const [manualActiveSection, setManualActiveSection] = useState('home');

  // Объединяем автоматическое и ручное переключение
  const currentActiveSection = manualActiveSection || activeSection;

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Передаем currentActiveSection и setManualActiveSection */}
      <Header 
        activeSection={currentActiveSection} 
        setActiveSection={setManualActiveSection} 
      />

      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="services" className="py-20 bg-white">
          <Services />
        </section>

        <section id="projects" className="py-20 bg-neutral-50">
          <Projects />
        </section>

        <section id="gallery" className="py-20 bg-white">
          <Gallery />
        </section>

        {/* <section id="videos" className="py-20 bg-neutral-50">
          <Videos />
        </section> */}

        <section id="reviews" className="py-20 bg-white">
          <Reviews />
        </section>

        <section id="about" className="py-20 bg-neutral-50">
          <About />
        </section>

        <section id="contact" className="py-20 bg-neutral-50">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;