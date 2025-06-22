import { type FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { BsHourglassSplit } from 'react-icons/bs'
import LazyImage from '../../components/LazyImage'


export const Home: FC = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const courseItems = [
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-16 h-16 mx-auto mb-4 fill-[#0A3622]">
          <path d="M12 2C8 2 4 3 4 6c0 2 2 3 2 3s-2 1-2 3c0 3 4 4 8 4s8-1 8-4c0-2-2-3-2-3s2-1 2-3c0-3-4-4-8-4zm0 2c3.3 0 6 .7 6 2 0 1.3-2.7 2-6 2s-6-.7-6-2c0-1.3 2.7-2 6-2zm0 12c-3.3 0-6-.7-6-2 0-1.3 2.7-2 6-2s6 .7 6 2c0 1.3-2.7 2-6 2z" />
        </svg>
      ),
      title: "Two Day Course",
      description: "An introductory course providing foundational knowledge and basic operational skills in hydroponic farming, perfect for beginners."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-16 h-16 mx-auto mb-4 fill-[#0A3622]">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
          <path d="M12 5.5v6.5h6.5c0-3.58-2.92-6.5-6.5-6.5z" />
        </svg>
      ),
      title: "1-Week Course",
      description: "A more in-depth training program covering various hydroponic systems, nutrient management, and environmental control techniques."
    },
    {
      icon: (
        <BsHourglassSplit className="w-16 h-16 mx-auto mb-4 text-[#0A3622]" />
      ),
      title: "8-Week Course",
      description: "A comprehensive course offering extensive hands-on experience, focusing on advanced hydroponic practices, troubleshooting, and commercial applications."
    }
  ];

  return (
    <div className="min-h-screen">
     

    
      {/* Hero Section */}
      <div className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] flex items-center justify-center">
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
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-montserrat text-white text-center mb-4 sm:mb-6 drop-shadow-lg"
          >
            Hydroponics Horticulture
            Training and Research Facility
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-white/90 text-center max-w-3xl mx-auto drop-shadow"
          >
            Cultivating Knowledge, Growing Green Solutions
          </motion.p>
        </div>
      </div>


      {/* 2. About Us Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#e8f5e9]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl font-weight: 600 font-montserrat text-[#0A3622] text-left mb-8 sm:mb-12"
            >
              About Us
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4 sm:space-y-6"
            >
              <p className="text-left text-gray-700 leading-relaxed text-base sm:text-lg">
                The Centre of Excellence in Hydroponics at NSUT is a pioneering initiative designed to drive innovation, research, and 
                education in hydroponic farming practices. Established with support from DKDF, our center aims to be a hub for 
                sustainable agriculture, advanced horticultural training, and community outreach. With a state-of-the-art polyhouse, 
                germination area, and a spacious classroom for theoretical learning, we are committed to nurturing future leaders in 
                sustainable cultivation.
              </p>

              {/* Social Media Links */}
              <div className="flex justify-start space-x-4 sm:space-x-6 my-6 sm:my-8">
                
                <a href="https://www.instagram.com/coe_hhtrf_nsut?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-[#0A3622] hover:text-[#07370f] transition-colors" target="_blank" rel="noopener noreferrer">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/centre-of-excellence-hydroponic-horticulture-training-and-research-facility/posts/?feedView=all" className="text-[#0A3622] hover:text-[#07370f] transition-colors" target="_blank" rel="noopener noreferrer">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>

              {/* Read More Button */}
              <div className="mt-6 sm:mt-8 flex justify-start">
                <Link
                  to="/about"
                  className="inline-block px-6 sm:px-8 py-2 sm:py-3 bg-[#0A3622] text-white font-medium hover:bg-[#07370f] transition-colors font-weight: 600 duration-300 rounded-md"
                >
                  Read More
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      
      {/* Vision and Mission Section */}
      <section className="flex flex-col md:flex-row min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh]">
        {/* Left Side - Dark Green Background with Title */}
        <div className="w-full md:w-[30%] bg-[#0A3622] text-white flex items-center justify-center p-6 sm:p-8 md:p-12">
          <div className="max-w-[400px] text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl font-montserrat leading-tight"
            >
              Our 
              <br />
              Ambition
              <br />
              
            </motion.h2>
          </div>
        </div>

        {/* Right Side - Video Background with Content */}
        <div className="w-full md:w-[70%] relative min-h-[40vh] sm:min-h-[50vh] md:min-h-[70vh] overflow-hidden">
          {/* Video Background */}
          <div className="absolute inset-0 w-full h-full">
            <iframe
              src="https://www.youtube.com/embed/Woo-9cduWiE?autoplay=1&mute=1&loop=1&playlist=Woo-9cduWiE&controls=0&showinfo=0&rel=0&modestbranding=1&enablejsapi=1&version=3&playsinline=1&playlist=Woo-9cduWiE"
              title="Hydroponics Video Background"
              className="absolute w-[300%] h-[300%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ 
                pointerEvents: 'none',
                border: 'none'
              }}
            />
          </div>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Content Over Video */}
          <div className="relative z-10 h-full flex items-center justify-center p-6 sm:p-8 md:p-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-[600px] text-left"
            >
              <p className="text-base sm:text-lg leading-relaxed font-montserrat text-white mb-6 sm:mb-8">
                To transform the future of agriculture by empowering individuals and communities through 
                sustainable and innovative hydroponic practices.
              </p>

              <div>
                <p className="text-sm sm:text-base mb-4 font-montserrat text-white">Our mission is to:</p>
                <ul className="space-y-3 sm:space-y-4">
                  <li className="flex items-start gap-2 font-montserrat text-white">
                    <span className="mt-1.5">•</span>
                    <span className="text-sm sm:text-base">Advance research in hydroponics and sustainable agriculture.</span>
                  </li>
                  <li className="flex items-start gap-2 font-montserrat text-white">
                    <span className="mt-1.5">•</span>
                    <span className="text-sm sm:text-base">Educate and train the next generation of hydroponics experts, from students to local farmers 
                    and entrepreneurs.</span>
                  </li>
                  <li className="flex items-start gap-2 font-montserrat text-white">
                    <span className="mt-1.5">•</span>
                    <span className="text-sm sm:text-base">Create a positive social impact by promoting sustainable agricultural practices.</span>
                  </li>
                </ul>
              </div>
              {/* Know More Button */}
              <div className="mt-6 sm:mt-8 flex justify-start">
                <Link
                  to="/Ambition"
                  className="inline-block px-6 sm:px-8 py-2 sm:py-3 bg-[#0A3622] text-white rounded-md font-weight: 600 hover:bg-[#0A3622] transition-colors duration-300"
                >
                  Read More
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* 4. Facility Highlights Section */}
      <section className="bg-[#e8f5e9] py-12 sm:py-16 md:py-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Highlights Grid */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
              {[
                {
                  image: "/hero-bg.jpg",
                  title: "709 square metres area",
                  subtitle: "facility"
                },
                {
                  image: "/polyhouse.jpg",
                  title: "Polyhouse with 5",
                  subtitle: "hydroponics systems"
                },
                {
                  image: "/germination.jpg",
                  title: "Dedicated Germination",
                  subtitle: "and Cold room"
                },
                {
                  image: "/classroom.jpg",
                  title: "Classroom for theoretical",
                  subtitle: "sessions"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center bg-white/10 backdrop-blur-md rounded-lg p-4 sm:p-6 shadow-lg"
                >
                  <div className="aspect-square rounded-full overflow-hidden mb-4 mx-auto max-w-[150px] sm:max-w-[200px] border-4 border-white shadow-lg">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-[#0A3622] font-medium font-montserrat mb-1 text-sm sm:text-base">
                    {item.title}
                  </h3>
                  <p className="text-[#0A3622]/80 text-sm sm:text-base">
                    {item.subtitle}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Title and Button */}
            <div className="md:w-1/4 text-middle mt-8 sm:mt-12 md:mt-0">
              <motion.h2
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-weight: 600 text-[#0A3622] mb-6 sm:mb-8"
              >
                Facility
                <br />
                Highlights
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Link
                  to="/about#facilities"
                  className="inline-block bg-[#0A3622] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-md font-weight: 600 hover:bg-[#0A3622]/90 transition-colors duration-300"
                >
                  Know More
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

       {/* What do we offer? Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#0A3622] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-weight: 600 text-center mb-8 sm:mb-12"
          >
            What do we offer?
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {[
              // {
              //   icon: (
              //     <svg viewBox="0 0 24 24" className="w-16 h-16 mx-auto mb-6 fill-[#0A3622]">
              //       <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              //     </svg>
              //   ),
              //   title: "Comprehensive Training Programs",
              //   description: "From beginners to advanced practitioners, we offer tailored training programs that provide theoretical knowledge and practical experience in hydroponics",
              //   link: "/training"
              // },
              {
                icon: (
                  <svg viewBox="0 0 24 24" className="w-16 h-16 mx-auto mb-6 fill-[#0A3622]">
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                ),
                title: "Cutting-Edge Research",
                description: "Our facility is equipped with modern technology for conducting in-depth research on plant growth, nutrient optimization, and abiotic stress management.",
                link: "/projects#researchpapers"
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" className="w-16 h-16 mx-auto mb-6 fill-[#0A3622]">
                    <path d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z" />
                  </svg>
                ),
                title: "Space for Cultivation",
                description: "We provide individuals and organizations with dedicated spaces within the center to grow plants of their choice using hydroponic systems.",
                link: "/about#facilities"
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" className="w-16 h-16 mx-auto mb-6 fill-[#0A3622]">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                    <path d="M12 8l-4 4h3v4h2v-4h3z" />
                  </svg>
                ),
                title: "Industry and Community Engagement",
                description: "We collaborate with industries, academic institutions, and local communities to promote the adoption of hydroponic farming.",
                link: "/get-involved"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#e8f5e9] rounded-lg shadow-lg overflow-hidden p-6 text-center flex flex-col"
              >
                <div className="flex-shrink-0 mb-4">
                 {item.icon}
                </div>
                <div className="flex-1">
                  <Link to={item.link} className="block group">
                    <h3 className="text-[#0A3622] font-montserrat font-weight: 600 text-xl font-semibold mb-4 group-hover:underline">
                      {item.title}
                    </h3>
                  </Link>
                  <p className="text-gray-700 font-montserrat font-weight: 600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs Section */}
      <section className="bg-[#e8f5e9] py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-weight: 600 text-[#0A3622] text-center mb-4 sm:mb-6"
          >
            Our Training Programs
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center font-montserrat font-weight: 600 text-gray-700 max-w-3xl mx-auto mb-12 sm:mb-16 text-sm sm:text-base"
          >
            Gain practical skills and scientific insight into sustainable hydroponics. Our training programs empower you to 
            lead in innovative, soil-free agriculture.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto mb-8 sm:mb-12">
            {courseItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-lg shadow-lg font-montserrat font-weight: 600 overflow-hidden p-6 text-center flex flex-col"
              >
                <div className="flex-shrink-0 mb-4">
                 {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-[#0A3622] text-xl font-montserrat font-weight: 600 font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Know More Button */}
          <div className="text-center mt-6 sm:mt-8">
            <Link
              to="/get-involved"
              className="inline-block px-6 sm:px-8 py-2 sm:py-3 bg-[#0A3622] text-white font-medium font-montserrat font-weight: 600 hover:bg-[#0A3622]/90 transition-colors duration-300 rounded"
            >
              Know More
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Events and News Section
      <section className="bg-[#0A3622] py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-weight: 600 text-[#FFFFFF] text-left">
              Events and
              News
            </h2>
            <br />
            <Link
              to="/news"
              className="inline-block x-6 sm:px-8 py-2 sm:py-3 bg-green-700 text-white rounded-md font-weight: 600 hover:bg-green-200 transition-colors duration-300"
            >
              View More
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"> */}
            {/* Event 1 - Facility Inauguration
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-lg overflow-hidden group relative"
            >
              <div className="p-8 flex-1 flex flex-col items-start"> */}
                {/* <span className="text-white/90 font-montserrat font-weight: 600 text-sm">Event</span>
                <h3 className="text-2xl font-montserrat font-weight: 600 font-light mt-2 mb-4 text-white text-left">
                  Facility Inauguration
                </h3>
                <p className="text-white/90 leading-relaxed font-montserrat font-weight: 600 text-sm text-left">
                  The grand opening of the Centre of Excellence in Hydroponics was a resounding success! 
                  We were thrilled to officially unveil our state-of-the-art facility dedicated to advancing 
                  sustainable agriculture and hydroponic research.
                </p>
                <Link
                  to="/news/facility-inauguration"
                  className="mt-auto pt-4 inline-flex font-montserrat font-weight: 600 items-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:underline"
                >
                  Read More <BsArrowRight />
                </Link>
              </div>
              <div className="w-full md:w-1/2">
                <LazyImage 
                  src="\inauguration.avif"
                  alt="Facility Inauguration"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Event 2 - School Students Event */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col md:flex-row bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-lg overflow-hidden group relative"
            >
              <div className="p-8 flex-1 flex flex-col items-start">
                {/* <span className="text-white/90 text-sm">Event</span> */}
                {/* <h3 className="text-2xl font-montserrat font-weight: 600 font-light mt-2 mb-4 text-white text-left">
                  Hydroponics Event for School Students
                </h3> */}
                {/* <p className="text-white/90 font-montserrat font-weight: 600 leading-relaxed text-sm text-left">
                  As part of our commitment to inspiring the next generation of sustainable 
                  agriculture leaders, we recently hosted a special event for school students 
                  at the Centre of Excellence in Hydroponics.
                </p> */}
                {/* <Link
                  to="/news/school-students-event"
                  className="mt-auto pt-4 inline-flex font-montserrat font-weight: 600 items-center  gap-2 text-white opacity-0 group-hover:opacity-100 transition-colors duration-300 hover:underline"
                > */}
                  {/* Read More <BsArrowRight /> */}
                {/* </Link> */} 
              {/* </div>
              <div className="w-full md:w-1/2">
                <img 
                  src="\students-event.avif"
                  alt="School Students Event"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div> */}
      {/* </section> */} 

      {/* FAQ Section */}
      <section className="bg-[#e8f5e9] py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl text-[#0A3622] font-montserrat font-weight: 600  mb-4 text-center"
          >
            Growing Clarity:
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl font-montserrat text-[#0A3622] font-weight: 600 mb-8 text-center"
          >
            Your Questions, Our Answers
          </motion.p>
            <div className="space-y-3 sm:space-y-4">
              {[
                {
                  question: "What is hydroponics?",
                  answer: "Hydroponic gardening is the process of growing plants and vegetables via a mineral-rich water solution, whereby the plants continuously draw on nutrients dissolved in water."
                },
                {
                  question: "Is hydroponics a newer technology?",
                  answer: "While modern hydroponics has evolved significantly, the basic concept dates back to ancient civilizations. The Hanging Gardens of Babylon, one of the Seven Wonders of the Ancient World, is believed to have used hydroponic principles."
                },
                {
                  question: "What are the applications of hydroponics?",
                  answer: "Hydroponics has wide-ranging applications including urban farming, commercial agriculture, research facilities, educational purposes, and even space farming experiments by NASA."
                },
                {
                  question: "Can hydroponics produce all types of plants?",
                  answer: "While many plants can be grown hydroponically, some are more suitable than others. Leafy greens, herbs, tomatoes, and strawberries are particularly well-suited for hydroponic systems."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#0A3622] backdrop-blur-sm rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                    className="w-full font-montserrat font-weight: 600 px-6 py-4 text-left flex justify-between items-center text-white hover:bg-white/5 transition-colors"
                  >
                    <span className="font-medium">{item.question}</span>
                    <svg
                      className={`w-5 h-5 transform transition-transform ${openQuestion === index ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {openQuestion === index && (
                    <div className="px-6 py-4 font-montserrat font-weight: 600 text-gray-200">
                      {item.answer}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* More Button */}
            <div className="text-center mt-6 sm:mt-8">
              <Link
                to="/contactus#faq"
                className="inline-block px-6 sm:px-8 py-2 sm:py-3 bg-[#07370f] text-white rounded-md font-weight: 600 hover:bg-[#0A3622] transition-colors duration-300"
              >
                More Questions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
