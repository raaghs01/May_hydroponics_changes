import { type FC } from 'react'
import { motion } from 'framer-motion'
// import { BsArrowRightCircle } from 'react-icons/bs'

export const Projects: FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
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
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A3622]/80 to-transparent z-0" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-montserrat font-weight: 600 text-white text-center mb-6 drop-shadow-lg"
          >
            Our Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl font-montserrat font-weight: 600 text-white/90 text-center max-w-3xl mx-auto drop-shadow"
          >
            Pioneering Sustainable Agriculture Through Innovation
          </motion.p>
        </div>
      </div>

      {/* Ongoing Projects Section */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row gap-16">
            {/* Title Section */}
            <div className="w-full md:w-1/3 flex flex-col justify-center items-center">
              <h2
                className="text-[#0A3622] text-6xl font-['Marcellus'] leading-tight sticky top-24 self-center font-montserrat font-weight: 600"
              >
                Ongoing R&D Projects
              </h2>
            </div>

            {/* Projects Grid - Changed to 3 columns */}
            <div className="w-full md:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Focus on Medicinal Plants",
                    description:
                      "Establishing protocols for the efficient cultivation of Indian medicinal plants such as Ashwagandha, Tulsi, and Brahmi.",
                  },
                  {
                    title: "Abiotic Stress Response Studies",
                    description:
                      "Studying how plants in hydroponic systems respond to environmental stresses such as heat, cold, and nutrient deficiencies.",
                  },
                  {
                    title: "Hyperspectral Imaging",
                    description:
                      "Creating predictive models to assess plant health, growth, and quality without destructive sampling.",
                  },
                  {
                    title: "Comprehensive Database",
                    description:
                      "Compiling a unique repository of plant images, growth parameters, and metabolite profiles for medicinal plants",
                  },
                  {
                    title: "Plant Microbe Interaction",
                    description:
                      "Investigating the role of beneficial microbes in promoting plant growth and enhancing nutrient uptake in hydroponic systems.",
                  },
                  {
                    title: "Plant Interactions on Animal Models",
                    description:
                      "Studying the therapeutic effects of hydroponically grown medicinal plants in animal models.",
                  },
                ].map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-[#0A3622] p-6 flex flex-col min-h-[200px] group cursor-pointer hover:shadow-xl transition-all duration-300 font-montserrat font-weight: 600"
                  >
                    <div>
                      <h3 className="text-white text-xl font-medium mb-4 font-['Marcellus'] font-montserrat font-weight: 600">
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
      <section className="py-20 bg-[#0A3622]">
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
            {/* <p className="text-lg text-gray-700 text-center mb-12">
              A showcase of our successful hydroponic installations and milestones.
            </p> */}
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
      </section>

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

      {/* Innovations & Technologies Section */}
      <section className="py-20 bg-[#FFFFFF]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-montserrat text-[#0A3622] mb-8 text-center font-weight: 600">
             Innovations & Technologies Used
            </h2>
            {/* <p className="text-lg text-gray-700 text-center mb-12">
              Learn about the tools and systems powering our green revolution.
            </p> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                  className="bg-[#003300] p-6 rounded-lg shadow-lg font-montserrat font-weight: 600"
                >
                  <h3 className="text-xl font-semibold text-[#FFFFFF] mb-4 font-montserrat font-weight: 600">{tech.title}</h3>
                  <p className="text-white font-montserrat font-weight: 600">{tech.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

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
      <section className="py-20 bg-[#FFFFFF]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-montserrat text-[#0A3622] mb-8 text-center font-weight: 600">
             Project Gallery
            </h2>
            <p className="text-lg text-gray-700 text-center mb-12 font-montserrat font-weight: 600">
              Visual highlights from our farms, labs, and installations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: item * 0.1 }}
                  className="aspect-square bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <img
                    src={`/system${item + 10}.png`}
                    alt={`Project ${item}`}
                    className="w-full h-full object-cover"
                  />
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

      {/* Pilot Programs Section */}
      <section className="py-20 bg-[#e8f5e9]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-montserrat text-[#0A3622] mb-8 text-center font-weight: 600">
               Pilot Programs
            </h2>
            <p className="text-lg text-[#0A3622] text-center mb-12 font-montserrat font-weight: 600">
              Testing new systems and techniques before large-scale rollouts.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                  className="bg-white p-6 rounded-lg shadow-lg font-montserrat font-weight: 600"
                >
                  <h3 className="text-xl font-semibold text-[#0A3622] mb-4 font-montserrat font-weight: 600">{program.title}</h3>
                  <p className="text-gray-700 font-montserrat font-weight: 600">{program.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 