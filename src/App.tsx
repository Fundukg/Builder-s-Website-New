import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Videos from './components/Videos';
import Projects from './components/Projects';
import Reviews from './components/Reviews/Reviews';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-neutral-50">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />

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

        <section id="videos" className="py-20 bg-neutral-50">
          <Videos />
        </section>

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
