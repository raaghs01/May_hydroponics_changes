import { type FC } from 'react'
import { motion } from 'framer-motion'

export const VisionAndMission: FC = () => {
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
        
        {/* Content Overlay */}
        <div className="relative z-10 container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-montserrat text-white text-center mb-6"
          >
            Transforming Agriculture, One Drop at a Time
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

      {/* Building a Smarter Future Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-montserrat text-[#0A3622] mb-8 text-center">
               Building a Smarter Future
            </h2>
            <div className="bg-[#E8F3E8] p-8 rounded-lg">
              <p className="text-gray-700 leading-relaxed text-lg">
                We are building a future where food is grown smarter — not harder. Through sustainable hydroponic systems, 
                we aim to empower individuals and entire communities to take control of their food production, reduce 
                environmental impact, and create a more resilient food system for generations to come.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-[#f5f9f5]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-montserrat text-[#0A3622] mb-8 text-center">
               Our Vision
            </h2>
            <div className="bg-[#003300] p-8 rounded-lg shadow-lg">
              <p className="text-white leading-relaxed text-lg">
                A clean, efficient, and accessible future for agriculture where sustainable practices meet cutting-edge 
                technology. We envision a world where fresh, nutritious food is available to all, regardless of location 
                or season, while minimizing environmental impact and maximizing resource efficiency.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-montserrat text-[#0A3622] mb-8 text-center">
               Our Mission
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: "🔬",
                  title: "Advance Research",
                  description: "Pioneering innovative solutions in hydroponic technology and sustainable agriculture through continuous research and development."
                },
                {
                  icon: "🎓",
                  title: "Educate and Train",
                  description: "Empowering individuals and communities with the knowledge and skills needed to implement and maintain hydroponic systems."
                },
                {
                  icon: "🤝",
                  title: "Create Social Impact",
                  description: "Building sustainable communities through accessible, efficient, and environmentally conscious agricultural practices."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#E8F3E8] p-6 rounded-lg"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-[#0A3622] mb-4">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Hydroponics Matters Section */}
      <section className="py-20 bg-[#f5f9f5]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-montserrat text-[#0A3622] mb-8 text-center">
               Why Hydroponics Matters
            </h2>
            <div className="bg-[#003300] p-8 rounded-lg shadow-lg">
              <p className="text-white leading-relaxed text-lg mb-6">
                Hydroponics represents a resilient, efficient, and sustainable answer to modern agricultural challenges. 
                By growing plants without soil, we can:
              </p>
              <ul className="space-y-4">
                {[
                  "Conserve up to 90% of water compared to traditional farming",
                  "Grow crops year-round in any climate",
                  "Maximize space utilization in urban environments",
                  "Eliminate the need for harmful pesticides",
                  "Produce higher yields with fewer resources"
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-[#0A3622] text-xl">•</span>
                    <span className="text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact at a Glance Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-montserrat text-[#0A3622] mb-8 text-center">
               Impact at a Glance
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  metric: "90%",
                  title: "Water Saved",
                  description: "Compared to traditional farming methods"
                },
                {
                  metric: "3x",
                  title: "Higher Yields",
                  description: "More produce per square meter"
                },
                {
                  metric: "50+",
                  title: "Systems Deployed",
                  description: "Across various locations"
                },
                {
                  metric: "1000+",
                  title: "People Trained",
                  description: "In hydroponic farming techniques"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#E8F3E8] p-6 rounded-lg text-center"
                >
                  <h3 className="text-4xl font-bold text-[#0A3622] mb-2">{item.metric}</h3>
                  <p className="text-xl font-semibold text-gray-700 mb-2">{item.title}</p>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Movement Section */}
      <section className="py-20 bg-[#f5f9f5]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-montserrat text-[#0A3622] mb-8 text-center">
               The Movement We're Growing
            </h2>
            <div className="bg-[#003300] p-8 rounded-lg shadow-lg">
              <p className="text-white leading-relaxed text-lg">
                We're not just cultivating crops — we're cultivating a movement towards sustainable agriculture. 
                Through our work, we're inspiring individuals, communities, and organizations to embrace innovative 
                farming solutions that benefit both people and the planet. Join us in this journey to transform 
                the future of agriculture, one drop at a time.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 