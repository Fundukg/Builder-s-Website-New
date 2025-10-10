import { Target, Heart, Award, Users } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Quality First',
      description: 'We never compromise on quality. Every project receives the same attention to detail and craftsmanship.',
    },
    {
      icon: Heart,
      title: 'Client Focused',
      description: 'Your satisfaction is our priority. We work closely with you from concept to completion.',
    },
    {
      icon: Award,
      title: 'Expert Craftsmen',
      description: 'Our team brings decades of combined experience in traditional and modern construction techniques.',
    },
    {
      icon: Users,
      title: 'Trusted Partner',
      description: 'Building lasting relationships with our clients through honesty, transparency, and reliability.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">About Us</h2>
        <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
          Building dreams with quality craftsmanship since 2005
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <img
            src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Our team at work"
            className="rounded-2xl shadow-2xl"
          />
        </div>

        <div>
          <h3 className="text-3xl font-bold text-neutral-900 mb-6">Our Story</h3>
          <div className="space-y-4 text-neutral-700 leading-relaxed text-lg">
            <p>
              TimberCraft Builders was founded in 2005 with a passion for traditional log house construction
              and a commitment to quality craftsmanship. What started as a small family operation has grown
              into a trusted name in both log and frame house construction.
            </p>
            <p>
              Our expertise in crown replacement and roofing services came from years of maintaining and
              restoring historic log structures. We understood that preserving these beautiful buildings
              required specialized knowledge and techniques.
            </p>
            <p>
              Today, we're proud to offer comprehensive construction services, from building new log and
              frame houses to maintaining and restoring existing structures. Every project reflects our
              dedication to quality, attention to detail, and respect for the craft.
            </p>
            <p className="font-semibold text-green-800">
              With over 200 completed projects and countless satisfied clients, we continue to build on
              our reputation as the region's premier construction specialists.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-20">
        <h3 className="text-3xl font-bold text-neutral-900 mb-12 text-center">Our Values</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-gradient-to-b from-green-50 to-white border border-green-200 hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex p-4 bg-green-700 rounded-full mb-4">
                <value.icon className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-neutral-900 mb-3">{value.title}</h4>
              <p className="text-neutral-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl p-8 md:p-12 text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-5xl font-bold text-green-400 mb-2">18+</div>
            <div className="text-xl text-neutral-300">Years in Business</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-green-400 mb-2">200+</div>
            <div className="text-xl text-neutral-300">Projects Completed</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-green-400 mb-2">100%</div>
            <div className="text-xl text-neutral-300">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </div>
  );
}
