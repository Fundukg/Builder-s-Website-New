import { ArrowRight, Award, Users, Wrench } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative pt-20 pb-32 bg-gradient-to-br from-green-50 via-white to-neutral-50 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMDMiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 mb-6 leading-tight">
            Crafting Your Dream
            <span className="block text-green-700">Log & Frame Houses</span>
          </h2>

          <p className="text-xl md:text-2xl text-neutral-700 mb-12 max-w-3xl mx-auto leading-relaxed">
            Expert builders specializing in traditional log houses, modern frame construction,
            crown replacement, and professional roofing services
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-green-700 text-white rounded-lg font-semibold text-lg hover:bg-green-800 transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
            >
              Get Free Estimate
              <ArrowRight className="h-5 w-5" />
            </button>
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white text-green-800 border-2 border-green-700 rounded-lg font-semibold text-lg hover:bg-green-50 transition-all"
            >
              View Our Work
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Award className="h-12 w-12 text-green-700 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-neutral-900 mb-2">18+ Years</h3>
              <p className="text-neutral-600">Experience in Construction</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Users className="h-12 w-12 text-green-700 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-neutral-900 mb-2">200+</h3>
              <p className="text-neutral-600">Satisfied Clients</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Wrench className="h-12 w-12 text-green-700 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-neutral-900 mb-2">100%</h3>
              <p className="text-neutral-600">Quality Guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
