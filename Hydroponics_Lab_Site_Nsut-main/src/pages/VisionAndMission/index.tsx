import { motion } from 'framer-motion';
import { FaLightbulb, FaBullseye, FaLeaf, FaChartLine, FaHandshake, FaUsers } from 'react-icons/fa';

const VisionAndMission = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e8f5e9] to-white">
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
            className="text-5xl md:text-7xl font-montserrat text-white text-center mb-6 drop-shadow-lg"
          >
            Vision & Mission
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 text-center max-w-3xl mx-auto drop-shadow"
          >
            Transforming Agriculture, One Drop at a Time
          </motion.p>
        </div>
      </div>

      {/* Building a Smarter Future Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col items-center mb-12">
            <FaLightbulb className="text-green-700 text-5xl mb-4" />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-montserrat text-[#0A3622] mb-4 text-center"
            >
              Building a Smarter Future
            </motion.h2>
            <span className="text-green-800 text-lg font-semibold mb-4">"Where innovation meets sustainability"</span>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-800 leading-relaxed">
                At the Centre of Excellence in Hydroponics, we're not just growing plants—we're cultivating a revolution in agriculture. Our facility stands as a beacon of innovation, where cutting-edge technology meets sustainable farming practices to create a smarter, more efficient future for food production.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed">
                Through our state-of-the-art hydroponic systems, we're demonstrating how urban spaces can be transformed into productive agricultural hubs, reducing water usage by up to 90% while increasing crop yields. Our research and development initiatives focus on creating scalable solutions that can be implemented in various environments, from urban rooftops to rural communities.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
                alt="Smart Farming"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"
                alt="Innovation"
                className="rounded-lg shadow-lg w-full h-64 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-[#f5f9f5]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col items-center mb-12">
            <FaBullseye className="text-green-700 text-5xl mb-4" />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-montserrat text-[#0A3622] mb-4 text-center"
            >
              Our Vision
            </motion.h2>
            <span className="text-green-800 text-lg font-semibold mb-4">"A world where sustainable agriculture thrives"</span>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1501876725168-00c445821c9e?auto=format&fit=crop&w=400&q=80"
                alt="Vision"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=400&q=80"
                alt="Future"
                className="rounded-lg shadow-lg w-full h-64 object-cover mt-8"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-800 leading-relaxed">
                We envision a future where hydroponic farming is not just an alternative, but a mainstream solution for sustainable food production. Our goal is to create a network of urban farms that can provide fresh, nutritious produce to local communities while minimizing environmental impact.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed">
                Through education, research, and community engagement, we aim to inspire the next generation of farmers and innovators to embrace sustainable agriculture practices. We believe that by combining traditional farming wisdom with modern technology, we can create a more resilient and food-secure future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col items-center mb-12">
            <FaLeaf className="text-green-700 text-5xl mb-4" />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-montserrat text-[#0A3622] mb-4 text-center"
            >
              Our Mission
            </motion.h2>
            <span className="text-green-800 text-lg font-semibold mb-4">"Advancing sustainable agriculture through innovation"</span>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-[#f5f9f5] p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-montserrat text-[#0A3622] mb-4">Advance Research</h3>
              <p className="text-gray-800">
                Conducting cutting-edge research in hydroponic systems, plant science, and sustainable agriculture to develop innovative solutions for modern farming challenges.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-[#f5f9f5] p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-montserrat text-[#0A3622] mb-4">Educate and Train</h3>
              <p className="text-gray-800">
                Providing comprehensive training programs and workshops to equip farmers, students, and enthusiasts with the knowledge and skills needed for successful hydroponic farming.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-[#f5f9f5] p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-montserrat text-[#0A3622] mb-4">Create Social Impact</h3>
              <p className="text-gray-800">
                Implementing community-based projects that promote food security, environmental sustainability, and economic development through innovative farming practices.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Hydroponics Matters Section */}
      <section className="py-20 bg-[#f5f9f5]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col items-center mb-12">
            <FaChartLine className="text-green-700 text-5xl mb-4" />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-montserrat text-[#0A3622] mb-4 text-center"
            >
              Why Hydroponics Matters
            </motion.h2>
            <span className="text-green-800 text-lg font-semibold mb-4">"The future of sustainable farming"</span>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-800 leading-relaxed">
                Hydroponic farming represents a paradigm shift in agriculture, offering solutions to some of the most pressing challenges facing our food system. By growing plants without soil, we can:
              </p>
              <ul className="list-disc pl-6 text-gray-800 space-y-2">
                <li>Reduce water usage by up to 90% compared to traditional farming</li>
                <li>Eliminate the need for harmful pesticides and herbicides</li>
                <li>Grow food in urban areas, reducing transportation costs and carbon emissions</li>
                <li>Increase crop yields while using less space</li>
                <li>Provide fresh, nutritious produce year-round</li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
                alt="Hydroponics"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80"
                alt="Sustainability"
                className="rounded-lg shadow-lg w-full h-64 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact at a Glance Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col items-center mb-12">
            <FaHandshake className="text-green-700 text-5xl mb-4" />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-montserrat text-[#0A3622] mb-4 text-center"
            >
              Impact at a Glance
            </motion.h2>
            <span className="text-green-800 text-lg font-semibold mb-4">"Making a difference, one harvest at a time"</span>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-[#f5f9f5] p-8 rounded-xl shadow-lg text-center"
            >
              <h3 className="text-4xl font-montserrat text-[#0A3622] mb-2">90%</h3>
              <p className="text-gray-800">Water Usage Reduction</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-[#f5f9f5] p-8 rounded-xl shadow-lg text-center"
            >
              <h3 className="text-4xl font-montserrat text-[#0A3622] mb-2">3x</h3>
              <p className="text-gray-800">Higher Crop Yields</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-[#f5f9f5] p-8 rounded-xl shadow-lg text-center"
            >
              <h3 className="text-4xl font-montserrat text-[#0A3622] mb-2">100%</h3>
              <p className="text-gray-800">Pesticide-Free Produce</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Movement We're Growing Section */}
      <section className="py-20 bg-[#f5f9f5]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col items-center mb-12">
            <FaUsers className="text-green-700 text-5xl mb-4" />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-montserrat text-[#0A3622] mb-4 text-center"
            >
              The Movement We're Growing
            </motion.h2>
            <span className="text-green-800 text-lg font-semibold mb-4">"Join us in cultivating change"</span>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=400&q=80"
                alt="Community"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
                alt="Growth"
                className="rounded-lg shadow-lg w-full h-64 object-cover mt-8"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-800 leading-relaxed">
                We're building a community of innovators, educators, and change-makers who are passionate about transforming the future of agriculture. Through our various programs and initiatives, we're creating opportunities for people to learn, grow, and contribute to a more sustainable food system.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed">
                Whether you're a student looking to learn about hydroponics, a farmer interested in adopting new techniques, or a community member wanting to make a difference, there's a place for you in our movement. Together, we can create a future where sustainable agriculture is the norm, not the exception.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisionAndMission; 