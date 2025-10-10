import { Calendar, MapPin, Clock } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Mountain Log Retreat',
      category: 'Log House Construction',
      location: 'Vermont',
      duration: '6 months',
      year: '2024',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Beautiful 2,500 sq ft log home featuring hand-crafted details and modern amenities.',
    },
    {
      title: 'Modern Frame Family Home',
      category: 'Frame House Building',
      location: 'New Hampshire',
      duration: '4 months',
      year: '2024',
      image: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Contemporary 3,200 sq ft frame house with open-concept design and energy-efficient features.',
    },
    {
      title: 'Historic Log Home Restoration',
      category: 'Crown Replacement',
      location: 'Maine',
      duration: '3 months',
      year: '2023',
      image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete crown replacement and restoration of a 100-year-old log cabin.',
    },
    {
      title: 'Lakeside Log Cabin',
      category: 'Log House Construction',
      location: 'New York',
      duration: '5 months',
      year: '2023',
      image: 'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Rustic 1,800 sq ft log cabin with stunning lake views and premium timber construction.',
    },
    {
      title: 'Premium Roofing Installation',
      category: 'Roofing Services',
      location: 'Massachusetts',
      duration: '2 weeks',
      year: '2023',
      image: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete roof replacement with architectural shingles and enhanced insulation.',
    },
    {
      title: 'Custom Frame Workshop',
      category: 'Frame House Building',
      location: 'Connecticut',
      duration: '2 months',
      year: '2023',
      image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Large 1,500 sq ft workshop with high ceilings and specialized ventilation.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">Featured Projects</h2>
        <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
          Explore our portfolio of completed construction projects
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
                  <span>Duration: {project.duration}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
