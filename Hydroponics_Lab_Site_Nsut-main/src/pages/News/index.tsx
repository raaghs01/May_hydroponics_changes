import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const carouselItems = [
  {
    image: '/news1.jpg',
    title: 'Hydroponics Workshop: Empowering the Next Generation',
    desc: 'A hands-on event for students and faculty to learn about sustainable farming.'
  },
  {
    image: '/news2.jpg',
    title: 'Research Breakthrough: Water Efficiency',
    desc: 'Our latest research shows a 90% reduction in water usage with new systems.'
  },
  {
    image: '/news3.jpg',
    title: 'Community Outreach: Food Distribution Drive',
    desc: 'Delivering fresh, chemical-free produce to local communities.'
  }
];

const eventCategories = [
  'All',
  'Announcements',
  'Events',
  'Research'
];

const events = [
  {
    image: '/event1.jpg',
    title: 'Call for Interviews: TA and SSA Position',
    desc: 'The Centre is excited to announce interview calls for the positions of Teaching Assistant (TA) and Senior Scientific Associate (SSA). These roles are pivotal in supporting our training…',
    category: 'Announcements',
    link: 'https://nsut.ac.in/'
  },
  {
    image: '/event2.jpg',
    title: 'Hydroponics Training Program',
    desc: 'Join our comprehensive training program to master hydroponic techniques and sustainable agriculture. Open for students and professionals…',
    category: 'Events',
    link: 'https://nsut.ac.in/'
  },
  {
    image: '/event3.jpg',
    title: 'Research Paper Published',
    desc: 'Our team has published a new research paper on nutrient solutions for urban hydroponics. Read more about our findings and impact…',
    category: 'Research',
    link: 'https://nsut.ac.in/'
  },
  // Add more event objects as needed
];

export default function News() {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % carouselItems.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const filteredEvents = selectedCategory === 'All'
    ? events
    : events.filter(e => e.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      
      {/* Header & Intro */}
      <section className="relative min-h-[60vh] flex items-center justify-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/system5.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            filter: 'brightness(0.7)'
          }}
        />
        {/* Content Overlay */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl font-montserrat mb-4 text-white">News & Updates</h1>
          <p className="text-xl max-w-3xl mx-auto text-white/90">
            Stay connected with the latest happenings at the Centre of Excellence in Hydroponics! From groundbreaking research to inspiring events, we bring you updates that showcase our journey toward sustainable agricultural innovation. Explore our news and achievements to see how we're making an impact, one green initiative at a time.
          </p>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="w-full bg-[#E8F3E8] py-10 flex flex-col items-center justify-center">
        <div className="relative w-full max-w-4xl h-72 md:h-96 mx-auto overflow-hidden rounded-xl shadow-lg">
          <AnimatePresence initial={false}>
            <motion.img
              key={carouselItems[carouselIndex].image}
              src={carouselItems[carouselIndex].image}
              alt={carouselItems[carouselIndex].title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="object-cover w-full h-full"
            />
          </AnimatePresence>
          <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-6 text-white">
            <h2 className="text-2xl font-bold">{carouselItems[carouselIndex].title}</h2>
            <p className="text-md">{carouselItems[carouselIndex].desc}</p>
          </div>
          {/* Carousel Controls */}
          <div className="absolute top-1/2 left-4 -translate-y-1/2 flex items-center">
            <button
              onClick={() => setCarouselIndex((carouselIndex - 1 + carouselItems.length) % carouselItems.length)}
              className="bg-black/40 hover:bg-black/70 text-white rounded-full p-2"
              aria-label="Previous"
            >
              &#8592;
            </button>
          </div>
          <div className="absolute top-1/2 right-4 -translate-y-1/2 flex items-center">
            <button
              onClick={() => setCarouselIndex((carouselIndex + 1) % carouselItems.length)}
              className="bg-black/40 hover:bg-black/70 text-white rounded-full p-2"
              aria-label="Next"
            >
              &#8594;
            </button>
          </div>
        </div>
        {/* Carousel Dots */}
        <div className="flex space-x-2 mt-4">
          {carouselItems.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCarouselIndex(idx)}
              className={`w-3 h-3 rounded-full ${carouselIndex === idx ? 'bg-white' : 'bg-white/40'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Events Grid & Filter */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row gap-8">
          {/* Filter Menu */}
          <div className="md:w-1/5 mb-6 md:mb-0">
            <div className="bg-[#07300f] text-white rounded-lg p-4 sticky top-24">
              <h3 className="text-lg font-semibold mb-4">Filter</h3>
              <div className="flex md:flex-col gap-2">
                {eventCategories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-md text-left transition-colors ${selectedCategory === cat ? 'bg-[#0A3622] font-bold' : 'bg-[#07300f]/60 hover:bg-[#0A3622]/80'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
          {/* Events Grid */}
          <div className="md:w-4/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredEvents.map((event, idx) => (
              <a
                key={idx}
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#e8f5e9] rounded-lg shadow-lg hover:shadow-2xl transition-shadow overflow-hidden group"
              >
                <div className="h-40 w-full overflow-hidden">
                  <img src={event.image} alt={event.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-[#07300f] mb-2">{event.title}</h4>
                  <p className="text-gray-700 text-sm line-clamp-4">{event.desc}</p>
                </div>
              </a>
            ))}
            {filteredEvents.length === 0 && (
              <div className="col-span-full text-center text-gray-500 py-12">No events found in this category.</div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
} 
