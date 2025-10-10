import { Home, Hammer, Construction, Wrench, Building2, TreePine } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: TreePine,
      title: 'Log House Construction',
      description: 'Authentic log homes built with traditional craftsmanship and modern techniques. We source premium timber and create beautiful, energy-efficient log houses that stand the test of time.',
      featured: true,
    },
    {
      icon: Building2,
      title: 'Frame House Building',
      description: 'Modern frame construction using quality materials and advanced building methods. Fast, efficient, and cost-effective solutions for your dream home with excellent insulation properties.',
      featured: true,
    },
    {
      icon: Hammer,
      title: 'Crown Replacement',
      description: 'Expert crown replacement services for log structures. We carefully remove deteriorated crowns and install new ones, preserving the integrity and beauty of your log home.',
      featured: false,
    },
    {
      icon: Construction,
      title: 'Roofing Services',
      description: 'Complete roofing solutions including installation, repair, and replacement. We work with all roofing materials and ensure your home is protected from the elements.',
      featured: false,
    },
    {
      icon: Wrench,
      title: 'Renovations & Repairs',
      description: 'Professional renovation and repair services for existing structures. From small fixes to major overhauls, we handle all aspects of home improvement.',
      featured: false,
    },
    {
      icon: Home,
      title: 'Custom Projects',
      description: 'Specialized construction projects tailored to your needs. Saunas, garages, workshops, and more - we bring your vision to life with expert craftsmanship.',
      featured: false,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">Our Services</h2>
        <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
          Comprehensive construction solutions from foundation to finish
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className={`p-8 rounded-xl border-2 transition-all hover:shadow-xl ${
              service.featured
                ? 'bg-gradient-to-br from-green-50 to-white border-green-300 shadow-lg'
                : 'bg-white border-neutral-200 hover:border-green-300'
            }`}
          >
            <div className={`inline-flex p-4 rounded-lg mb-6 ${
              service.featured ? 'bg-green-700' : 'bg-green-100'
            }`}>
              <service.icon className={`h-8 w-8 ${
                service.featured ? 'text-white' : 'text-green-700'
              }`} />
            </div>

            {service.featured && (
              <span className="inline-block px-3 py-1 bg-green-700 text-white text-xs font-semibold rounded-full mb-4">
                SPECIALTY
              </span>
            )}

            <h3 className="text-2xl font-bold text-neutral-900 mb-4">{service.title}</h3>
            <p className="text-neutral-600 leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-gradient-to-r from-green-700 to-green-800 rounded-2xl p-8 md:p-12 text-white text-center">
        <h3 className="text-3xl font-bold mb-4">Need a Custom Solution?</h3>
        <p className="text-xl mb-6 text-green-50">
          We're here to discuss your unique project requirements
        </p>
        <button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-8 py-4 bg-white text-green-800 rounded-lg font-semibold hover:bg-green-50 transition-all transform hover:scale-105"
        >
          Contact Us Today
        </button>
      </div>
    </div>
  );
}
