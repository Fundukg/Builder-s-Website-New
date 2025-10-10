import { Home, Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
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
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Home className="h-8 w-8 text-green-500" />
              <div>
                <h3 className="text-xl font-bold text-white">TimberCraft Builders</h3>
                <p className="text-xs text-neutral-400">Since 2005</p>
              </div>
            </div>
            <p className="text-neutral-400 leading-relaxed mb-6">
              Expert builders specializing in log houses, frame construction, crown replacement,
              and roofing services. Quality craftsmanship you can trust.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-neutral-800 rounded-lg hover:bg-green-700 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-neutral-800 rounded-lg hover:bg-green-700 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-neutral-800 rounded-lg hover:bg-green-700 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="hover:text-green-500 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-green-500 transition-colors"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="hover:text-green-500 transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('gallery')}
                  className="hover:text-green-500 transition-colors"
                >
                  Photo Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('videos')}
                  className="hover:text-green-500 transition-colors"
                >
                  Videos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('reviews')}
                  className="hover:text-green-500 transition-colors"
                >
                  Reviews
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="hover:text-green-500 transition-colors"
                >
                  About Us
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li className="hover:text-green-500 transition-colors cursor-pointer">
                Log House Construction
              </li>
              <li className="hover:text-green-500 transition-colors cursor-pointer">
                Frame House Building
              </li>
              <li className="hover:text-green-500 transition-colors cursor-pointer">
                Crown Replacement
              </li>
              <li className="hover:text-green-500 transition-colors cursor-pointer">
                Roofing Services
              </li>
              <li className="hover:text-green-500 transition-colors cursor-pointer">
                Renovations & Repairs
              </li>
              <li className="hover:text-green-500 transition-colors cursor-pointer">
                Custom Projects
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <div className="text-white font-medium mb-1">Address</div>
                  <div className="text-sm">
                    123 Timber Lane<br />
                    Mountain View, VT 05001
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <div className="text-white font-medium mb-1">Phone</div>
                  <a href="tel:+15551234567" className="hover:text-green-500 transition-colors text-sm">
                    (555) 123-4567
                  </a>
                  <br />
                  <a href="tel:+15557654321" className="hover:text-green-500 transition-colors text-sm">
                    (555) 765-4321
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <div className="text-white font-medium mb-1">Email</div>
                  <a href="mailto:info@timbercraftbuilders.com" className="hover:text-green-500 transition-colors text-sm">
                    info@timbercraftbuilders.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="text-sm text-neutral-400">
              <p className="font-semibold text-white mb-1">Licensed & Insured</p>
              <p>License #12345-VT</p>
            </div>
            <div className="text-sm text-neutral-400">
              <p className="font-semibold text-white mb-1">Business Hours</p>
              <p>Mon-Fri: 7AM-6PM | Sat: 8AM-4PM</p>
            </div>
            <div className="text-sm text-neutral-400">
              <p className="font-semibold text-white mb-1">Service Area</p>
              <p>Vermont, New Hampshire, Maine, NY</p>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-sm text-neutral-500">
          <p>&copy; {currentYear} TimberCraft Builders. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-green-500 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-green-500 transition-colors">Terms of Service</a>
            <span>•</span>
            <a href="#" className="hover:text-green-500 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
