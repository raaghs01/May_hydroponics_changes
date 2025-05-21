import { type FC, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IoClose } from 'react-icons/io5'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { BsArrowRightCircle } from 'react-icons/bs'

export const About: FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const images = [
    {
      src: "/system11.png",
      alt: "Plant Growth in Hydroponic System",
      category: "Plant Growth"
    },
    {
      src: "/system12.jpg",
      alt: "Hydroponic Facility Interior",
      category: "Facility"
    },
    {
      src: "/system13.png",
      alt: "Seedling Development",
      category: "Plant Growth"
    },
    {
      src: "/system14.png",
      alt: "Hydroponic Setup",
      category: "Facility"
    },
    {
      src: "/system15.png",
      alt: "Mature Plants",
      category: "Plant Growth"
    },
    {
      src: "/system16.png",
      alt: "Seedling Tray",
      category: "Plant Growth"
    },
    {
      src: "/system17.png",
      alt: "NFT System",
      category: "Facility"
    },
    {
      src: "/system18.png",
      alt: "Plant Development",
      category: "Plant Growth"
    },
    {
      src: "/system11.png",
      alt: "Research Area",
      category: "Facility"
    },
  ]

  const handlePrevious = () => {
    if (selectedImage === null) return
    setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1)
  }

  const handleNext = () => {
    if (selectedImage === null) return
    setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1)
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedImage === null) return
    if (e.key === 'ArrowLeft') handlePrevious()
    if (e.key === 'ArrowRight') handleNext()
    if (e.key === 'Escape') setSelectedImage(null)
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage])

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <div className="relative min-h-[60vh] flex items-center justify-center">
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
        <div className="relative z-10 container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-montserrat text-white text-center mb-6"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 text-center max-w-3xl mx-auto"
          >
            Pioneering Sustainable Agriculture Through Innovation
          </motion.p>
        </div>
      </div>

      {/* Who are we? Section */}
      <div className="relative min-h-screen">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/hydroponic-plants-bg.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />

        {/* Content Overlay */}
        <div className="relative z-10 container mx-auto px-4 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl md:text-6xl font-montserrat text-[#07300f] mb-12 text-center">
              Who are we?
            </h2>
            
            <div className="bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-lg space-y-6 text-gray-800">
              <p className="text-lg md:text-xl leading-relaxed">
                Netaji Subhas University of Technology (NSUT) is proud to announce the launch of its 709 square meter cutting-edge "Hydroponic Horticulture and Research Facility," a groundbreaking initiative aimed at advancing training and research in hydroponic crop production. This project, funded by the Delhi Knowledge Development Foundation (DKDF) with a grant of ₹78 lakhs is poised to revolutionize horticultural education and innovation. The facility boasts a state-of-the-art setup for various training and research activities. Key features include a classroom designed to accommodate students for theoretical sessions on hydroponics, a polyhouse equipped with five distinct hydroponic systems tailored to different groups of horticultural plants, a dedicated area for plant germination, and a well-equipped nursery for packaging and storage.
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed">
                The primary goals of the Hydroponic Horticulture Facility are to establish a premier training and research hub, empower aspiring entrepreneurs and local farmers with the skills needed to set up, operate, and maintain hydroponic horticulture systems, focus on researching and developing innovative hydroponic cultivation methods for new horticultural crops, and build an ecosystem that significantly contributes to pollution control, water conservation, and the supply of fresh, healthy produce to the local community.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="min-h-screen grid grid-cols-1 md:grid-cols-3">
        {/* Left Column - Title and Subtitle */}
        <div className="bg-[#E8F3E8] p-12 md:p-16 flex flex-col justify-center items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-[300px] text-center"
          >
            <h2 className="text-5xl font-montserrat text-[#0A3622] mb-8">
              Our
              <br />
              Story
            </h2>
            <div className="w-12 h-1 bg-[#0A3622] mb-8 mx-auto" />
            <p className="text-[#0A3622] text-xl font-medium">
              From Vision to Reality: Shaping
              <br />
              the Future of Sustainable
              <br />
              Agriculture
            </p>
          </motion.div>
        </div>

        {/* Middle Column - Image */}
        <div className="relative h-[400px] md:h-auto">
          <img 
            src="/system5.png"
            alt="Our Story"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Right Column - Content */}
        <div className="bg-[#0A3622] p-12 md:p-16 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-[300px] mx-auto text-center"
          >
            <p className="text-white/90 leading-relaxed">
              Our journey began with a simple yet powerful vision: to revolutionize urban farming 
              through innovative hydroponic solutions. Today, we stand as a testament to that vision, 
              having created a state-of-the-art facility that serves as a beacon of sustainable agriculture.
            </p>
          </motion.div>
        </div>
      </section>

      
      {/* Research Papers Section */}
      <div className="py-24 bg-[#f5f9f5]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row gap-16">
            {/* Title Section */}
            <div className="w-full md:w-1/3">
              <h2 className="text-[#003300] text-6xl font-['Marcellus'] leading-tight sticky top-24">
                Our Published Research Papers
              </h2>
            </div>

            {/* Papers Grid */}
            <div className="w-full md:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    journal:
                      "International Journal of Sustainable Agriculture",
                    title:
                      `Optimizing Nutrient Delivery in Hydroponic Systems: Enhancing Yield and Quality of Leafy Greens.
                      This groundbreaking study explores the impact of tailored nutrient solutions on the growth and nutritional quality 
                      of hydroponically cultivated leafy greens. By fine-tuning mineral compositions, our research achieved a 20% increase 
                      in yield while enhancing the antioxidant properties of the produce, paving the way for more efficient and nutrient-rich farming practices.`,
                  },
                  {
                    journal: "Journal of Hydroponic Innovations",
                    title:
                      `Comparative Analysis of Hydroponic and Soil-Based Cultivation: Growth Metrics and Resource Efficiency in Tomato Production

Our research delves into the comparative advantages of hydroponic systems over traditional soil-based methods for tomato cultivation. The study highlights a 30% reduction in water usage and a significant boost in growth rates, demonstrating hydroponics' potential to revolutionize resource-efficient farming for high-value crops.
`,
                  },
                  {
                    journal: "JEnvironmental Science & Technology",
                    title:
                      `Hydroponics as a Tool for Urban Sustainability: Reducing Carbon Footprints Through Local Food Production

This paper examines the role of hydroponics in urban agriculture, focusing on its capacity to reduce transportation-related carbon emissions by enabling local food production. Our findings underscore how hydroponic systems can support sustainable city ecosystems, providing fresh produce while minimizing environmental impact.
`,
                  },
                  {
                    journal: "Advances in Horticultural Research",
                    title:
                      `Phytoremediation Potential of Hydroponically Grown Herbs: Mitigating Water Contamination with Basil and Mint

Our research investigates the ability of hydroponically grown basil and mint to absorb and mitigate heavy metal contaminants in water. The study reveals their impressive 
phytoremediation potential, offering a dual benefit of water purification and the production of safe, edible herbs—an innovative step 
toward sustainable farming solutions.`,
                  },
                ].map((paper, index) => (
                  <div
                    key={index}
                    className="bg-[#003300] p-8 rounded-lg flex flex-col min-h-[300px] justify-between group cursor-pointer hover:shadow-xl transition-all duration-300 relative"
                  >
                    <div>
                      <h3 className="text-yellow-400 text-2xl font-medium mb-6 text-center font-['Marcellus']">
                        {paper.journal}
                      </h3>
                      <p className="text-white/90 text-base line-clamp-4 text-center font-['Questrial']">
                        {paper.title}
                      </p>
                    </div>
                    <div className="mt-6">
                      <div className="flex items-center justify-center gap-2 text-yellow-400 group-hover:gap-4 transition-all duration-300">
                        <span className="text-sm font-medium">Read More</span>
                        <BsArrowRightCircle className="text-xl" />
                      </div>
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Facilities Section */}
      <section className="py-20" id="facilities">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-montserrat text-[#0A3622] text-center mb-12"
          >
            Our Facilities
          </motion.h2>

          {/* NFT Horizontal Beds Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] lg:h-[500px]"
            >
              <img
                src="/system6.png"
                alt="NFT Horizontal Beds"
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </motion.div>

            {/* Content Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 text-left"
            >
              <h3 className="text-3xl font-montserrat text-[#0A3622] mb-8">
                NFT Horizontal Beds
              </h3>
              
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start space-x-3">
                  <span className="text-primary text-xl">•</span>
                  <span>Plants are grown in long horizontal beds or troughs filled with a growing medium or in nutrient-rich water.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary text-xl">•</span>
                  <span>Nutrient solution flows evenly across the beds.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary text-xl">•</span>
                  <span>Suitable for crops with larger root systems.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary text-xl">•</span>
                  <span>Ideal for larger areas, allowing more plant varieties.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary text-xl">•</span>
                  <span>Easy to manage and scale up in greenhouses or large areas.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary text-xl">•</span>
                  <span>Best For: Tomatoes, cucumbers, peppers.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary text-xl">•</span>
                  <span>Advantages: Higher plant yield, easy monitoring of plant health.</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* A-Frame Systems Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 bg-[#E8F3E8] p-12 rounded-lg">
            {/* Content Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 text-left order-2 lg:order-1"
            >
              <h3 className="text-3xl font-montserrat text-[#0A3622] mb-8">
                A-Frame Systems
              </h3>
              
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start space-x-3">
                  <span className="text-primary text-xl">•</span>
                  <span>Plants are arranged on angled, triangular frames, allowing vertical stacking</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary text-xl">•</span>
                  <span>Maximizes light exposure for all plants.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary text-xl">•</span>
                  <span>Ideal for compact spaces or greenhouses.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary text-xl">•</span>
                  <span>Efficient water flow from the top to bottom rows.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary text-xl">•</span>
                  <span>Multiple levels increase growing capacity per square foot.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary text-xl">•</span>
                  <span>Easy access for maintenance and harvesting.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary text-xl">•</span>
                  <span>Best For: Leafy greens, herbs, and strawberries.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary text-xl">•</span>
                  <span>Advantages: Cost-effective, good for high-density planting.</span>
                </li>
              </ul>
            </motion.div>

            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] lg:h-[500px] order-1 lg:order-2"
            >
              <img
                src="/system7.png"
                alt="A-Frame Systems"
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </motion.div>
          </div>

          {/* Vertical Towers Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] lg:h-[500px]"
            >
              <img
                src="/system8.png"
                alt="Vertical Tower Systems"
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </motion.div>

            {/* Content Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 text-left"
            >
              <h3 className="text-3xl font-montserrat text-[#0A3622] mb-8">
                Vertical Towers
              </h3>
              
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start space-x-3">
                  <span className="text-primary text-xl">•</span>
                  <span>Plants are grown in stacked vertical columns or towers, with nutrient-rich water pumped from the base to the top and trickling down to all levels.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary text-xl">•</span>
                  <span>Maximizes vertical space and reduces footprint.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary text-xl">•</span>
                  <span>Gravity-fed nutrient flow reduces energy consumption.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary text-xl">•</span>
                  <span>Allows for high-density planting in urban settings.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary text-xl">•</span>
                  <span>Best For: Lettuce, herbs, and small vegetables.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary text-xl">•</span>
                  <span>Advantages: Space-saving, energy-efficient, and sustainable.</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Gallery Section */}
          <div className="mt-20">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl font-montserrat text-[#0A3622] text-center mb-12"
            >
              Our Gallery
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="aspect-[16/9] group relative overflow-hidden rounded-lg shadow-lg"
                  onClick={() => setSelectedImage(index)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center p-4">
                      <p className="text-sm uppercase tracking-wider mb-2">{image.category}</p>
                      <p className="text-lg font-medium">{image.alt}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          >
            <div className="relative w-full max-w-6xl">
              {/* Close button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors"
              >
                <IoClose size={32} />
              </button>

              {/* Navigation buttons */}
              <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
              >
                <IoIosArrowBack size={32} />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
              >
                <IoIosArrowForward size={32} />
              </button>

              {/* Image */}
              <motion.div
                key={selectedImage}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-w-16 aspect-h-9"
              >
                <img
                  src={images[selectedImage].src}
                  alt={images[selectedImage].alt}
                  className="w-full h-full object-contain"
                />
              </motion.div>

              {/* Image info */}
              <div className="absolute bottom-4 left-0 right-0 text-center text-white">
                <p className="text-sm uppercase tracking-wider mb-1">
                  {images[selectedImage].category}
                </p>
                <p className="text-lg font-medium">
                  {images[selectedImage].alt}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Meet Our Team Section */}
      <section className="bg-[#07300f] py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-montserrat text-white mb-4">
              MEET OUR TEAM
            </h2>
            <p className="text-xl text-white/80">
              Our Driving Force
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
            {[
              {
                name: "Dr. Akhilesh Dubey",
                role: "Coordinator",
                image: "/system25.png"
              },
              {
                name: "Prof. Sushma Nagpal",
                role: "Member",
                image: "/system26.png"
              },
              {
                name: "Prof. Jyotsna Singh",
                role: "Member",
                image: "/system27.png"
              },
              {
                name: "Dr. Akhilesh K. Dubey",
                role: "Member",
                image: "/system28.png"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white/10">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-white text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-white/80">{member.role}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Dr. Nisha Kandhoul",
                role: "Member",
                image: "/system29.png"
              },
              {
                name: "Dr. Gaurav Singal",
                role: "Member",
                image: "/system30.png"
              },
              {
                name: "Dr. Jyoti Yadav",
                role: "Member",
                image: "/system31.png"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white/10">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-white text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-white/80">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inspirational Quote Section */}
      {/* <section className="bg-[#e8f5e9] py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center"
          >
            <p 
              className="text-[#07300f] text-2xl md:text-3xl lg:text-4xl leading-relaxed md:leading-relaxed 
                font-dancing-script italic" 
            >
              In every seed of innovation, there lies the promise of a sustainable future. 
              Together, we cultivate the change the world needs
            </p>
          </motion.div>
        </div>
      </section> */}

    </div>
  )
}
