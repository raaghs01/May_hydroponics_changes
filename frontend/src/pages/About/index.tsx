import { type FC, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
// import { IoClose } from 'react-icons/io5'
import { BsArrowRightCircle } from 'react-icons/bs'

import LazyImage from '../../components/LazyImage'

const About: FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  

  const images = [
    {
      src: "\system11.png",
      alt: "Plant Growth in Hydroponic System",
      category: "Plant Growth"
    },
    {
      src: "\system12.png",
      alt: "Hydroponic Facility Interior",
      category: "Facility"
    },
    {
      src: "\system13.png",
      alt: "Seedling Development",
      category: "Plant Growth"
    },
    {
      src: "\system14.png",
      alt: "Hydroponic Setup",
      category: "Facility"
    },
    {
      src: "\system15.png",
      alt: "Mature Plants",
      category: "Plant Growth"
    },
    {
      src: "\system16.png",
      alt: "Seedling Tray",
      category: "Plant Growth"
    },
    {
      src: "\system17.png",
      alt: "NFT System",
      category: "Facility"
    },
    {
      src: "\system18.png",
      alt: "Plant Development",
      category: "Plant Growth"
    },
    {
      src: "\system6.png",
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
      <div className="relative min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] flex items-center justify-center">
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
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-7xl md:text-7xl lg:text-7xl font-montserrat text-white text-center mb-4 sm:mb-6 drop-shadow-lg"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-white/90 text-center max-w-3xl mx-auto drop-shadow"
          >
            Pioneering Sustainable Agriculture Through Innovation
          </motion.p>
        </div>
      </div>

      {/* Who are we? Section */}
      <div className="relative min-h-screen">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-montserrat text-[#0A3622] mb-8 sm:mb-12 text-center font-weight: 600">
              Who are we?
            </h2>
            <div className="bg-white/90 backdrop-blur-sm p-6 sm:p-8 md:p-12 rounded-lg space-y-4 sm:space-y-6 text-gray-800 font-montserrat text-left font-weight: 600">
              <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                Netaji Subhas University of Technology (NSUT) proudly unveils the Centre of Excellence in Hydroponics Horticulture Training and Research Facility—a visionary 709-square-meter marvel that stands at the forefront of agricultural innovation. This state-of-the-art hub, brought to life through a generous ₹78 lakh grant from the Delhi Knowledge Development Foundation (DKDF), is set to redefine the landscape of hydroponic crop production, blending cutting-edge technology with a passion for sustainability.
              </p>
              
              <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                Our facility is a beacon of progress, meticulously designed to foster both education and innovation. It features a modern classroom where students immerse themselves in the theoretical foundations of hydroponics, a sophisticated polyhouse showcasing five distinct hydroponic systems tailored to diverse horticultural plants, a specialized plant germination zone, and a fully equipped nursery for seamless packaging and storage. Every element of this facility reflects our commitment to excellence, providing an unparalleled environment for learning, experimentation, and growth.
              </p>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                The Centre of Excellence in Hydroponics Horticulture Training and Research Facility at NSUT is more than a facility; it is a movement—a testament to the transformative power of hydroponics in shaping a greener, healthier, and more sustainable future. Join us as we cultivate not just plants, but a legacy of innovation and impact.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="min-h-screen grid grid-cols-1 md:grid-cols-3">
        {/* Left Column - Title and Subtitle */}
        <div className="bg-[#e8f5e9] p-8 sm:p-12 md:p-16 flex flex-col justify-center items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-[300px] text-center font-montserrat font-weight: 600"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-montserrat text-[#0A3622] mb-6 sm:mb-8 font-weight: 600">
              Our
              <br />
              Story
            </h2>
            <div className="w-12 h-1 bg-[#0A3622] mb-6 sm:mb-8 mx-auto" />
            <p className="text-[#0A3622] text-lg sm:text-xl font-medium font-montserrat font-weight: 600">
              From Vision to Reality: Shaping
              <br />
              the Future of Sustainable
              <br />
              Agriculture
            </p>
          </motion.div>
        </div>

        {/* Middle Column - Image */}
        <div className="relative h-[300px] sm:h-[400px] md:h-auto">
          <LazyImage
            src="\system5.png"
            alt="Our Story"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Right Column - Content */}
        <div className="bg-[#0A3622] p-8 sm:p-12 md:p-16 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-[300px] mx-auto text-center font-montserrat font-weight: 600"
          >
            <p className="text-white/90 leading-relaxed text-base sm:text-lg font-montserrat font-weight: 600">
              Our journey began with a simple yet powerful vision: to revolutionize urban farming 
              through innovative hydroponic solutions. Today, we stand as a testament to that vision, 
              having created a state-of-the-art facility that serves as a beacon of sustainable agriculture.
            </p>
          </motion.div>
        </div>
      </section>

      
      {/* Research Papers Section */}
      <div className="py-12 sm:py-16 md:py-24 bg-[#e8f5e9]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 sm:gap-12 md:gap-16">
            {/* Title Section */}
            <div className="w-full md:w-1/3 font-montserrat font-weight: 600">
              <h2 className="text-[#003300] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-['Marcellus'] leading-tight sticky top-24 font-montserrat font-weight: 600">
                Our Published Research Papers
              </h2>
            </div>

            {/* Papers Grid */}
            <div className="w-full md:w-2/3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                {[
                  {
                    id: "paper1",
                    journal: "Journal of Functional Foods",
                    title: `This study investigates the use of tellurium-doped ZnO nanoparticles to boost phenolics, flavonoids, and antioxidants in buckwheat microgreens and sprouts. Optimal concentrations led to a 20–30% increase in key nutraceuticals, with FRAP activity reaching 203 mg Fe(II)/g FW. Results suggest nanoparticle elicitation as a novel method to enhance nutritional quality in hydroponic greens.`,
                    sourceUrl: "https://link.springer.com/article/10.1007/s11694-025-03163-3"
                  },
                  {
                    id: "paper2",
                    journal: "International Journal of Food Science",
                    title: `This study evaluates the effect of elicitors like citric acid, ascorbic acid, and NaCl on hydroponically grown buckwheat sprouts. Citric acid (10 mM) and NaCl (150 mM) significantly enhanced phenolics, flavonoids, rutin, and antioxidant activity—demonstrating up to 30% improvement. A strong correlation was observed between antioxidant potential and elevated levels of bioactives. These findings support the targeted use of natural elicitors to enhance nutritional profiles in hydroponic systems.`,
                    sourceUrl: "https://ifst.onlinelibrary.wiley.com/doi/abs/10.1111/ijfs.16119"
                  },
                  {
                    id: "paper3",
                    journal: "Journal of Applied Plant Physiology",
                    title: `This study analyzes the dynamic phytochemical profile of hydroponically grown buckwheat. Phenolic and flavonoid levels peaked at harvest, while antioxidant activity (DPPH) was highest during flowering. UPLC-DAD analysis showed that hydroponically cultivated seeds contained more rutin, quercetin, and ferulic acid than commercial seeds. These findings validate hydroponic methods as superior for enhancing nutritional content throughout buckwheat's growth cycle.`,
                    sourceUrl: "https://www.sciencedirect.com/science/article/abs/pii/S0305197823000303"
                  },
                  {
                    id: "paper4",
                    journal: "Journal of Sustainable Energy Systems",
                    title: `This study optimized a Canna indica-driven Plant Microbial Fuel Cell (PMFC) using wastewater as nutrient input and carbon cloth electrodes. After 30 days, the setup achieved a peak power density of 81 mW/m². Key influencing factors—wastewater pH, electrode surface area, and electrode spacing—were identified via Plackett-Burman and modeled using Response Surface Methodology. The strong synergy between pH and electrode area highlights potential for eco-friendly, wastewater-powered energy generation.`,
                    sourceUrl: "https://www.sciencedirect.com/science/article/abs/pii/S2214785323011574"
                  },
                ].map((paper, index) => (
                  <a
                    key={index}
                    href={paper.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#003300] p-6 sm:p-8 rounded-lg flex flex-col min-h-[250px] sm:min-h-[300px] justify-between group cursor-pointer hover:shadow-xl transition-all duration-300 relative font-montserrat font-weight: 600"
                  >
                    <div>
                      <h3 className=" text-xl sm:text-2xl font-medium mb-4 sm:mb-6 text-center font-['Marcellus'] font-montserrat font-weight: 600" style={{ color: "#C8F4B4" }}>
                        {paper.journal}
                      </h3>
                      <p className="text-white/90 text-sm sm:text-base line-clamp-4 text-center font-['Questrial'] font-montserrat font-weight: 600">
                        {paper.title}
                      </p>
                    </div>
                    <div className="mt-4 sm:mt-6">
                      <div className="flex items-center justify-center gap-2  group-hover:gap-4 transition-all duration-300" style={{ color: "#C8F4B4" }}>
                        <span className="text-sm font-medium flex items-center gap-2">
                          Read More <BsArrowRightCircle className="text-xl" />
                        </span>
                      </div>
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Facilities Section */}
      <section className="py-12 sm:py-16 md:py-20" id="facilities">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl font-montserrat text-[#0A3622] text-center mb-8 sm:mb-12 font-weight: 600"
          >
            Our Facilities
          </motion.h2>

          {/* NFT Horizontal Beds Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-20">
            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[300px] sm:h-[400px] lg:h-[500px]"
            >
              <LazyImage
                src="\hero-bg.jpg"
                alt="NFT Horizontal Beds"
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </motion.div>

            {/* Content Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4 sm:space-y-6 text-left font-montserrat font-weight: 600"
            >
              <h3 className="text-2xl sm:text-3xl font-montserrat text-[#0A3622] mb-6 sm:mb-8 font-weight: 600">
                NFT Horizontal Beds
              </h3>
              
              <ul className="space-y-3 sm:space-y-4 text-gray-700 font-montserrat font-weight: 600">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-20 bg-[#e8f5e9] p-8 sm:p-12 rounded-lg">
            {/* Content Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4 sm:space-y-6 text-left order-2 lg:order-1 font-montserrat font-weight: 600"
            >
              <h3 className="text-2xl sm:text-3xl font-montserrat text-[#0A3622] mb-6 sm:mb-8 font-weight: 600">
                A-Frame Systems
              </h3>
              
              <ul className="space-y-3 sm:space-y-4 text-gray-700 font-montserrat font-weight: 600">
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
              <LazyImage
                src="\system7.png"
                alt="A-Frame Systems"
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </motion.div>
          </div>

          {/* Vertical Towers Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-20">
            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] lg:h-[500px]"
            >
              <LazyImage
                src="\polyhouse.jpg"
                alt="Vertical Tower Systems"
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </motion.div>

            {/* Content Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4 sm:space-y-6 text-left font-montserrat font-weight: 600"
            >
              <h3 className="text-2xl sm:text-3xl font-montserrat text-[#0A3622] mb-6 sm:mb-8 font-weight: 600">
                Vertical Towers
              </h3>
              
              <ul className="space-y-3 sm:space-y-4 text-gray-700 font-montserrat font-weight: 600">
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
          <div className="mt-12 sm:mt-16 md:mt-20">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-3xl font-montserrat text-[#0A3622] text-center mb-8 sm:mb-12 font-weight: 600"
            >
              Our Gallery
            </motion.h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="aspect-[16/9] group relative overflow-hidden rounded-lg shadow-lg"
                  onClick={() => setSelectedImage(index)}
                >
                  <LazyImage
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center p-4 font-montserrat font-weight: 600">
                      <p className="text-xs sm:text-sm uppercase tracking-wider mb-2">{image.category}</p>
                      <p className="text-sm sm:text-lg font-medium">{image.alt}</p>
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
                className="absolute top-4 right-4 z-20 text-white bg-black/60 rounded-full p-2"
              >
                X
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
                className="relative max-w-3xl max-h-[80vh] mx-auto mt-8 flex items-center justify-center"
              >
                <LazyImage
                  src={images[selectedImage].src}
                  alt={images[selectedImage].alt}
                  className="w-full h-full object-contain"
                />
              </motion.div>

              {/* Image info */}
              <div className="absolute bottom-4 left-0 right-0 text-center text-white font-montserrat font-weight: 600">
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
      <section className="bg-[#e8f5e9] py-12 sm:py-16 md:py-24" id="team">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16 font-montserrat text-[#0A3622] font-weight: 600"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-montserrat text-[#0A3622] mb-4 font-weight: 600">
              MEET OUR TEAM
            </h2>
            <p className="text-lg sm:text-xl text-[#0A3622]/80 font-montserrat font-weight: 600">
              Our Driving Force
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto mb-12 sm:mb-16">
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
                className="text-center text-[#0A3622] font-montserrat font-weight: 600"
              >
                <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto mb-4 sm:mb-6 rounded-full overflow-hidden border-4 border-white/10">
                  <LazyImage
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-[#0A3622] text-lg sm:text-xl font-semibold mb-2 font-montserrat font-weight: 600">{member.name}</h3>
                <p className="text-[#0A3622]/80 text-sm sm:text-base font-montserrat font-weight: 600">{member.role}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
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
                className="text-center font-montserrat text-[#0A3622] font-weight: 600"
              >
                <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto mb-4 sm:mb-6 rounded-full overflow-hidden border-4 border-white/10">
                  <LazyImage
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-[#0A3622] text-lg sm:text-xl font-semibold mb-2 font-montserrat font-weight: 600">{member.name}</h3>
                <p className="text-[#0A3622]/80 text-sm sm:text-base font-montserrat font-weight: 600">{member.role}</p>
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

export default About
