import { type FC } from 'react'
import { motion } from 'framer-motion'

export const SocialInteraction: FC = () => {
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
            Our Commitment to Social Responsibility
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 text-center max-w-3xl mx-auto"
          >
            A future where science, sustainability, and social equity grow together.
          </motion.p>
        </div>
      </div>

      {/* Vision Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-montserrat text-[#0A3622] mb-8 text-center">
               Vision for a Greener, More Equitable Future
            </h2>
            <div className="bg-[#E8F3E8] p-8 rounded-lg">
              <p className="text-gray-700 leading-relaxed text-lg">
                Connecting youth, science, and society through innovation and empathy. We believe in creating a sustainable 
                future where everyone has access to fresh, nutritious food and the knowledge to grow it.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Initiatives Section */}
      <section className="py-20 bg-[#f5f9f5]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-montserrat text-[#0A3622] mb-8 text-center">
               Key Initiatives
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-gray-700 leading-relaxed text-lg">
                Driving community impact through hands-on outreach and collaboration. Our initiatives focus on education, 
                empowerment, and sustainable development at the grassroots level.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Farmers Connect Program Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-montserrat text-[#0A3622] mb-8 text-center">
               Farmers Connect Program
            </h2>
            <div className="bg-[#E8F3E8] p-8 rounded-lg">
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Empowering rural farmers through knowledge, innovation, and partnership
              </p>
              <ul className="space-y-4 mb-6">
                {[
                  "On-field training sessions",
                  "Low-cost DIY hydroponics kits",
                  "Personalized consultation & follow-ups"
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-[#0A3622] text-xl">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[#0A3622] font-semibold">
                Impact: 200+ farmers trained, 15+ villages reached
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sustainable Farming Workshops Section */}
      <section className="py-20 bg-[#f5f9f5]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-montserrat text-[#0A3622] mb-8 text-center">
               Sustainable Farming Workshops
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Bringing modern agricultural practices to the grassroots
              </p>
              <ul className="space-y-4 mb-6">
                {[
                  "Hydroponics & organic farming fundamentals",
                  "Eco-friendly, resource-efficient techniques",
                  "Live demos, DIY activities, crop planning sessions"
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-[#0A3622] text-xl">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[#0A3622] font-semibold">
                Focus: Water-scarce and resource-limited communities
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Food Distribution Drive Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-montserrat text-[#0A3622] mb-8 text-center">
               Food Distribution Drive & Nutritional Outreach
            </h2>
            <div className="bg-[#E8F3E8] p-8 rounded-lg">
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Feeding communities, fighting food insecurity
              </p>
              <ul className="space-y-4">
                {[
                  "Distribution of chemical-free, hydroponic produce",
                  "Promoting food justice and nutritional awareness",
                  "Events with students and faculty for local impact"
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-[#0A3622] text-xl">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* School Partnerships Program Section */}
      <section className="py-20 bg-[#f5f9f5]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-montserrat text-[#0A3622] mb-8 text-center">
               School Partnerships Program
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Educating the next generation of green leaders
              </p>
              <ul className="space-y-4">
                {[
                  "Environmental education through school collaborations",
                  "Hydroponic gardens in underserved schools",
                  "Interactive workshops, sustainability lessons, and garden projects"
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-[#0A3622] text-xl">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Student Involvement Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-montserrat text-[#0A3622] mb-8 text-center">
              🎓 Student Involvement: Learning with Purpose
            </h2>
            <div className="bg-[#E8F3E8] p-8 rounded-lg">
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Where students become leaders and changemakers
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: "🔧",
                    title: "Project Leads & Coordinators",
                    description: "Leading initiatives and managing teams"
                  },
                  {
                    icon: "📣",
                    title: "Outreach & Education Teams",
                    description: "Spreading knowledge and awareness"
                  },
                  {
                    icon: "🔬",
                    title: "Research & Innovation Groups",
                    description: "Developing new solutions and techniques"
                  },
                  {
                    icon: "🌿",
                    title: "Garden Managers & Growers",
                    description: "Maintaining and expanding our gardens"
                  },
                  {
                    icon: "🎥",
                    title: "Content & Media Creators",
                    description: "Documenting and sharing our journey"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white p-6 rounded-lg shadow-md"
                  >
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <h3 className="text-xl font-semibold text-[#0A3622] mb-2">{item.title}</h3>
                    <p className="text-gray-700">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="py-20 bg-[#f5f9f5]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-montserrat text-[#0A3622] mb-8 text-center">
               Why It Matters
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-gray-700 leading-relaxed text-lg">
                Sustainability isn't a concept—it's a community movement powered by purpose. Through our social 
                initiatives, we're not just growing plants; we're growing a movement that connects people, 
                communities, and the environment in a sustainable cycle of growth and development.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 