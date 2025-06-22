import { type FC } from 'react'
import { motion } from 'framer-motion'
// import { BsArrowRightCircle } from 'react-icons/bs'
import { BsArrowRightCircle } from 'react-icons/bs'

export const Projects: FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
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
        {/* <div className="absolute inset-0 bg-gradient-to-b from-[#0A3622]/80 to-transparent z-0" /> */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-montserrat font-weight: 600 text-white text-center mb-4 sm:mb-6 drop-shadow-lg"
          >
            Our Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl font-montserrat font-weight: 600 text-white/90 text-center max-w-3xl mx-auto drop-shadow"
          >
            Pioneering Sustainable Agriculture Through Innovation
          </motion.p>
        </div>
      </div>

      {/* Ongoing Projects Section */}
      <div className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 sm:gap-12 md:gap-16">
            {/* Title Section */}
            <div className="w-full md:w-1/3 flex flex-col justify-center items-center">
              <h2
                className="text-4xl sm:text-5xl md:text-6xl font-['Marcellus'] leading-tight sticky top-24 self-center font-montserrat font-weight: 600"
              >
                Ongoing R&D Projects
              </h2>
            </div>

            {/* Projects Grid */}
            <div className="w-full md:w-2/3">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {[
                  {
                    title: "Focus on Medicinal Plants",
                    description:
                      "Efficiently cultivating key Indian medicinal plants.",
                  },
                  {
                    title: "Abiotic Stress Response Studies",
                    description:
                      "Analyzing plant responses to environmental stress in hydroponics.",
                  },
                  {
                    title: "Hyperspectral Imaging",
                    description:
                      "Using predictive models for non-destructive plant health analysis.",
                  },
                  {
                    title: "Comprehensive Database",
                    description:
                      "Building a database of medicinal plant images and growth data.",
                  },
                  {
                    title: "Plant Microbe Interaction",
                    description:
                      "Exploring beneficial microbes for enhanced plant growth and nutrient uptake.",
                  },
                  {
                    title: "Plant Interactions on Animal Models",
                    description:
                      "Evaluating therapeutic effects of our medicinal plants on animal models.",
                  },
                ].map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-[#0A3622] p-4 sm:p-6 flex flex-col min-h-[180px] sm:min-h-[200px] group cursor-pointer hover:shadow-xl transition-all duration-300 font-montserrat font-weight: 600"
                  >
                    <div>
                      <h3 className="text-white text-lg sm:text-xl font-medium mb-3 sm:mb-4 font-['Marcellus'] font-montserrat font-weight: 600">
                        {project.title}
                      </h3>
                      <p className="text-white text-sm font-['Questrial'] font-montserrat font-weight: 600">
                        {project.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Completed Projects Section */}
      {/* <section className="py-20 bg-[#0A3622]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-montserrat text-[#FFFFFF] mb-8 text-center font-weight: 600">
               Completed Projects
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Urban Farm Initiative",
                  description: "Successfully established 5 urban farms across Delhi"
                },
                {
                  title: "Educational Hub",
                  description: "Created a training center for hydroponic farming"
                },
                {
                  title: "Research Facility",
                  description: "Built a state-of-the-art research laboratory"
                },
                {
                  title: "Community Garden",
                  description: "Developed a community-based hydroponic garden"
                }
              ].map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-lg font-montserrat font-weight: 600"
                >
                  <h3 className="text-xl font-semibold text-[#0A3622] mb-4 font-montserrat font-weight: 600">{project.title}</h3>
                  <p className="text-gray-700 font-montserrat font-weight: 600">{project.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section> */}

      {/* Project Locations Section */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-montserrat text-[#0A3622] mb-8 text-center">
              📍 Project Locations
            </h2>
            <p className="text-lg text-gray-700 text-center mb-12">
              Discover where our hydroponic systems are making a difference.
            </p>
            <div className="bg-[#E8F3E8] p-8 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "NSUT Campus, Delhi",
                  "Community Centers",
                  "Educational Institutions",
                  "Urban Farms",
                  "Research Facilities",
                  "Commercial Installations"
                ].map((location, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="text-[#0A3622] text-xl">•</span>
                    <span className="text-gray-700">{location}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section> */}

      {/* Research Papers Section */}
        <section id = "researchpapers">
      <div className="py-12 sm:py-16 md:py-24 bg-[#e8f5e9]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 sm:gap-12 md:gap-16">
            {/* Title Section */}
            <div className="w-full md:w-1/3 flex flex-col justify-center items-center font-montserrat font-weight: 600">
              <h2 className="text-[#003300] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-['Marcellus'] leading-tight font-montserrat font-weight: 600 text-center">
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
      </section>

      


      {/* Innovations & Technologies Section */}
      {/* <section className="py-12 sm:py-16 md:py-20 bg-[#e8f5e9]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-montserrat text-[#0A3622] mb-6 sm:mb-8 text-center font-weight: 600">
             Innovations & Technologies Used
            </h2>
            <p className="text-lg text-gray-700 text-center mb-12">
              Learn about the tools and systems powering our green revolution.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {[
                {
                  title: "Smart Monitoring Systems",
                  description: "IoT-based sensors for real-time monitoring"
                },
                {
                  title: "Automated Nutrient Delivery",
                  description: "Precision-controlled nutrient management"
                },
                {
                  title: "LED Grow Lights",
                  description: "Energy-efficient lighting solutions"
                },
                {
                  title: "Climate Control",
                  description: "Advanced environmental management systems"
                }
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#003300] p-4 sm:p-6 rounded-lg shadow-lg font-montserrat font-weight: 600"
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-[#FFFFFF] mb-3 sm:mb-4 font-montserrat font-weight: 600">{tech.title}</h3>
                  <p className="text-sm sm:text-base text-white font-montserrat font-weight: 600">{tech.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section> */}

      {/* Research & Development Section */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-montserrat text-[#0A3622] mb-8 text-center">
              👩‍🔬 Research & Development
            </h2>
            <p className="text-lg text-gray-700 text-center mb-12">
              How we are pushing the boundaries of sustainable agriculture.
            </p>
            <div className="bg-[#E8F3E8] p-8 rounded-lg">
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  Our R&D team is continuously working on innovative solutions to improve hydroponic farming efficiency, 
                  sustainability, and yield. Current research focuses on:
                </p>
                <ul className="space-y-4">
                  {[
                    "Advanced nutrient formulations",
                    "Energy-efficient growing systems",
                    "Crop optimization techniques",
                    "Sustainable resource management"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="text-[#0A3622] text-xl">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section> */}

      {/* Impact Metrics Section */}
      {/* <section className="py-20 bg-[#003300]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-montserrat text-[#FFFFFF] mb-8 text-center">
               Impact Metrics
            </h2>
            <p className="text-lg text-gray-100 text-center mb-12">
              Measuring growth, yield, water savings, and sustainability impact.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  metric: "Water Savings",
                  value: "90%",
                  description: "Reduction in water usage compared to traditional farming"
                },
                {
                  metric: "Yield Increase",
                  value: "3x",
                  description: "Higher crop yield per square meter"
                },
                {
                  metric: "Energy Efficiency",
                  value: "40%",
                  description: "Reduction in energy consumption"
                },
                {
                  metric: "Space Utilization",
                  value: "5x",
                  description: "More efficient use of growing space"
                }
              ].map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-lg text-center"
                >
                  <h3 className="text-3xl font-bold text-[#0A3622] mb-2">{metric.value}</h3>
                  <p className="text-xl font-semibold text-gray-700 mb-2">{metric.metric}</p>
                  <p className="text-gray-600">{metric.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section> */}

      {/* Collaborations & Partnerships Section */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-montserrat text-[#0A3622] mb-8 text-center">
              🤝 Collaborations & Partnerships
            </h2>
            <p className="text-lg text-gray-700 text-center mb-12">
              Working with institutions, startups, and communities to expand our reach.
            </p>
            <div className="bg-[#E8F3E8] p-8 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Educational Institutions",
                  "Research Organizations",
                  "Government Agencies",
                  "Agricultural Startups",
                  "Community Groups",
                  "Technology Partners"
                ].map((partner, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="text-[#0A3622] text-xl">•</span>
                    <span className="text-gray-700">{partner}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section> */}

      {/* Project Gallery Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#FFFFFF]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-montserrat text-[#0A3622] mb-6 sm:mb-8 text-center font-weight: 600">
             Project Gallery
            </h2>
            <p className="text-base sm:text-lg text-gray-700 text-center mb-8 sm:mb-12 font-montserrat font-weight: 600">
              Visual highlights from our farms, labs, and installations.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {[
                "system9.png",
                "classroom.avif",
                "hero-bg.jpg",
                "system6.png",
                "system11.png",
                "germination.jpg"
              ].map((img, idx) => (
                <motion.div
                  key={img}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="aspect-square bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <img
                    src={`/${img}`}
                    alt={`Project ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pilot Programs Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#e8f5e9]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-montserrat text-[#0A3622] mb-6 sm:mb-8 text-center font-weight: 600">
               Pilot Programs
            </h2>
            <p className="text-base sm:text-lg text-[#0A3622] text-center mb-8 sm:mb-12 font-montserrat font-weight: 600">
              Testing new systems and techniques before large-scale rollouts.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {[
                {
                  title: "Vertical Farming System",
                  description: "Testing new vertical growing techniques"
                },
                {
                  title: "Smart Irrigation",
                  description: "AI-powered water management system"
                },
                {
                  title: "Crop Optimization",
                  description: "New nutrient formulations for specific crops"
                },
                {
                  title: "Energy Efficiency",
                  description: "Renewable energy integration in farming"
                }
              ].map((program, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-4 sm:p-6 rounded-lg shadow-lg font-montserrat font-weight: 600"
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-[#0A3622] mb-3 sm:mb-4 font-montserrat font-weight: 600">{program.title}</h3>
                  <p className="text-sm sm:text-base text-gray-700 font-montserrat font-weight: 600">{program.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Future Initiatives Section */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-montserrat text-[#0A3622] mb-8 text-center">
              🎯 Future Initiatives
            </h2>
            <p className="text-lg text-gray-700 text-center mb-12">
              What's next on our roadmap toward food sustainability.
            </p>
            <div className="bg-[#E8F3E8] p-8 rounded-lg">
              <div className="space-y-6">
                <ul className="space-y-4">
                  {[
                    "Expansion of urban farming networks",
                    "Development of new hydroponic systems",
                    "Integration of AI and machine learning",
                    "Community education programs",
                    "Sustainable packaging solutions",
                    "Renewable energy integration"
                  ].map((initiative, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="text-[#0A3622] text-xl">•</span>
                      <span className="text-gray-700">{initiative}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section> */}

     
      
    </div>
  )
} 