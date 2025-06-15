import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const carouselItems = [
  {
    image: '/students-event.avif',
    title: 'Hydroponics Workshop: Empowering the Next Generation',
    desc: 'A hands-on event for students and faculty to learn about sustainable farming.'
  },
  {
    image: '/system2.jpg',
    title: 'Research Breakthrough: Water Efficiency',
    desc: 'Our latest research shows a 90% reduction in water usage with new systems.'
  },
  {
    image: '/vegetation-drive.jpg',
    title: 'Community Outreach: Food Distribution Drive',
    desc: 'Delivering fresh, chemical-free produce to local communities.'
  }
];

const eventCategories = [
  'All',
  'Announcements',
  'Events & Workshops',
  'Research'
];

// const events = [
//   {
//     image: 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=800&q=80',
//     title: 'Call for Interviews: TA and SSA Position',
//     desc: 'The Centre is excited to announce interview calls for the positions of Teaching Assistant (TA) and Senior Scientific Associate (SSA). These roles are pivotal in supporting our training…',
//     category: 'Announcements',
//     link: 'https://nsut.ac.in/'
//   },
//   {
//     image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
//     title: 'Hydroponics Training Program',
//     desc: 'Join our comprehensive training program to master hydroponic techniques and sustainable agriculture. Open for students and professionals…',
//     category: 'Events',
//     link: 'https://nsut.ac.in/'
//   },
//   {
//     image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80',
//     title: 'Research Paper Published',
//     desc: 'Our team has published a new research paper on nutrient solutions for urban hydroponics. Read more about our findings and impact…',
//     category: 'Research',
//     link: 'https://nsut.ac.in/'
//   },
//   // Add more event objects as needed
// ];

export default function News() {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filterOpen, setFilterOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % carouselItems.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  // const filteredEvents = selectedCategory === 'All'
  //   ? events
  //   : events.filter(e => e.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      
      {/* Header & Intro */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] flex items-center justify-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/bg2.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            filter: 'brightness(0.7)'
          }}
        />
        {/* <div className="absolute inset-0 bg-gradient-to-b from-[#0A3622]/80 to-transparent z-0" /> */}
        {/* Content Overlay */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-weight: 600 mb-4 sm:mb-6 text-white">News & Updates</h1>
          <p className="text-base sm:text-lg md:text-xl font-montserrat font-weight: 600 max-w-3xl mx-auto text-white/90">
            Stay connected with the latest happenings at the Centre of Excellence in Hydroponics! From groundbreaking research to inspiring events, we bring you updates that showcase our journey toward sustainable agricultural innovation. 
          </p>
        </div>
      </section>
        
      {/* Carousel Section */}
      <section className="w-full bg-[#e8f5e9] py-8 sm:py-10 flex flex-col items-center justify-center">
        <div className="relative w-full max-w-4xl h-56 sm:h-72 md:h-96 mx-auto overflow-hidden rounded-xl shadow-lg">
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
          <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 sm:p-6 text-white">
            <h2 className="text-xl sm:text-2xl font-montserrat font-weight: 600">{carouselItems[carouselIndex].title}</h2>
            <p className="text-sm sm:text-md font-montserrat font-weight: 600">{carouselItems[carouselIndex].desc}</p>
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
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${carouselIndex === idx ? 'bg-white' : 'bg-white/40'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Events Grid & Filter */}
      <section className="bg-white py-8 sm:py-12 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6 sm:mb-8">
            {/* Hamburger Filter */}
            <div className="relative">
              <button
                className="md:hidden p-2 rounded bg-[#0A3622] text-white focus:outline-none font-montserrat font-weight: 600"
                onClick={() => setFilterOpen(!filterOpen)}
                aria-label="Open filter menu"
              >
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              {/* Dropdown for mobile */}
              {filterOpen && (
                <div className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg z-20">
                  {eventCategories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => { setSelectedCategory(cat); setFilterOpen(false); }}
                      className={`w-full text-left px-4 py-2 hover:bg-[#e8f5e9] font-montserrat text-sm sm:text-base ${selectedCategory === cat ? 'font-weight: 600 text-[#0A3622]' : ''}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              )}
            </div>
            {/* Inline filter for desktop */}
            <div className="hidden md:flex gap-2 ml-2">
              {eventCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-md text-left transition-colors font-montserrat text-sm sm:text-base ${selectedCategory === cat ? 'bg-[#0A3622] text-white font-weight: 600' : 'bg-[#e8f5e9] text-[#07300f] hover:bg-[#0A3622]/10'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                image: '/system8.png',
                title: 'Hydroponics at NSUT: A Hub for Innovation',
                desc: 'Our facility continues to lead the way in sustainable agriculture, offering hands-on training and research opportunities for students and professionals.'
              },
              {
              image: '/inauguration.avif',
                title: 'Recent Event: Inauguration of New Research Wing',
                desc: 'The new research wing was inaugurated last month, expanding our capacity for advanced hydroponics research and student projects.'
              },
              {
                image: '/system6.png',
                title: 'Innovation: Automated Nutrient Delivery System',
                desc: 'Our team has developed an automated system for precise nutrient delivery, improving crop yields and reducing resource use.'
              },
              {
                image: '/system7.png',
                title: 'Recruitment: Join Our Research Team',
                desc: 'We are recruiting passionate students and researchers for upcoming projects in climate-resilient agriculture and smart farming.'
              },
              {
                image: '/fooddistributions2.jpg',
                title: 'Community Outreach: Food Distribution Drive',
                desc: 'Our latest food distribution drive provided fresh, chemical-free produce to over 300 families in need.'
              },
              {
                image: '/system9.png',
                title: 'Upcoming Workshop: Hydroponics for Beginners',
                desc: 'Sign up for our next workshop to learn the basics of hydroponic farming and sustainable food production.'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-[#e8f5e9] rounded-lg shadow-lg overflow-hidden flex flex-col">
                <img src={item.image} alt={item.title} className="w-full h-40 sm:h-48 object-cover" />
                <div className="p-4 sm:p-6 flex-1 flex flex-col">
                  <h3 className="text-lg sm:text-xl font-montserrat font-weight: 600 text-[#07300f] mb-2">{item.title}</h3>
                  <p className="text-sm sm:text-base text-gray-700 font-montserrat font-weight: 600 mb-4 flex-1">{item.desc}</p>
                  <button
                    className="inline-block px-6 sm:px-8 py-2 sm:py-3 bg-[#07370f] text-white rounded-md font-weight: 600 hover:bg-[#0A3622] transition-colors duration-300"
                    onClick={() => navigate('/pdf-viewer')}
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      

      
      
    </div>
  );
} 
