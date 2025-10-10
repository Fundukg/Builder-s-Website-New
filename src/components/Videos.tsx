import { Play } from 'lucide-react';


export default function Videos() {
  const videos = [
    {
      title: 'Log House Construction Process',
      description: 'Watch how we build a traditional log house from foundation to finish',
      thumbnail: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '8:45',
    },
    {
      title: 'Frame House Building Timelapse',
      description: 'See a complete frame house construction in just 3 minutes',
      thumbnail: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '3:20',
    },
    {
      title: 'Crown Replacement Technique',
      description: 'Professional demonstration of crown replacement in log structures',
      thumbnail: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '12:15',
    },
    {
      title: 'Roofing Installation Guide',
      description: 'Step-by-step process of our premium roofing installation',
      thumbnail: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '6:30',
    },
    {
      title: 'Log Selection and Preparation',
      description: 'Learn how we select and prepare quality logs for construction',
      thumbnail: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '5:55',
    },
    {
      title: 'Client Testimonials',
      description: 'Hear what our satisfied clients have to say about our work',
      thumbnail: 'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '4:10',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">Video Gallery</h2>
        <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
          Watch our construction processes and completed projects in action
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group cursor-pointer"
          >
            <div className="relative h-56 overflow-hidden bg-neutral-900">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-green-700 rounded-full flex items-center justify-center group-hover:bg-green-600 transition-colors transform group-hover:scale-110">
                  <Play className="h-8 w-8 text-white ml-1" />
                </div>
              </div>
              <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-sm font-medium">
                {video.duration}
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-neutral-900 mb-2">{video.title}</h3>
              <p className="text-neutral-600 leading-relaxed">{video.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center bg-neutral-100 rounded-2xl p-12">
        <h3 className="text-2xl font-bold text-neutral-900 mb-4">Want to See More?</h3>
        <p className="text-lg text-neutral-600 mb-6">
          Follow us on social media for regular updates, behind-the-scenes content, and construction tips
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button className="px-6 py-3 bg-green-700 text-white rounded-lg font-semibold hover:bg-green-800 transition-all">
            YouTube Channel
          </button>
          <button className="px-6 py-3 bg-neutral-800 text-white rounded-lg font-semibold hover:bg-neutral-900 transition-all">
            Instagram
          </button>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all">
            Facebook
          </button>
        </div>
      </div>
    </div>
  );
}
