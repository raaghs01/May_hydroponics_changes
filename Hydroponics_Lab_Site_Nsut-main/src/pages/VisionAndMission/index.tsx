import { motion } from 'framer-motion';
import { FaLightbulb, FaBullseye, FaLeaf, FaChartLine, FaHandshake, FaUsers } from 'react-icons/fa';
import LazyImage from '../../components/LazyImage';

const VisionAndMission = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e8f5e9] to-white">
      {/* Hero Section */}
      <div className="relative min-h-[60vh] flex items-center justify-center">
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
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A3622]/80 to-transparent z-0" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-montserrat font-weight: 600 text-white text-center mb-6 drop-shadow-lg"
          >
            Vision & Mission
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl font-montserrat font-weight: 600 text-white/90 text-center max-w-3xl mx-auto drop-shadow"
          >
            Transforming Agriculture, One Drop at a Time
          </motion.p>
        </div>
      </div>

      {/* Building a Smarter Future Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col items-center mb-12">
            <FaLightbulb className="text-green-700 text-[#0A3622] text-5xl mb-4" />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-montserrat font-weight: 600 text-[#0A3622] mb-4 text-center"
            >
              Building a Smarter Future
            </motion.h2>
            <span className="text-green-800 text-lg text-[#0A3622] font-semibold font-montserrat font-weight: 600 mb-4">"Where innovation meets sustainability"</span>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg font-montserrat text-[#0A3622] text-left font-weight: 600 text-gray-800 leading-relaxed">
                At the Centre of Excellence in Hydroponics, We are building a future where food is grown smarter — not harder. Through sustainable hydroponic systems, we aim to empower individuals and entire communities to take agriculture into their own hands, regardless of space, soil, or climate.

              </p>
              {/* <p className="text-lg text-gray-800 leading-relaxed">
                Through our state-of-the-art hydroponic systems, we're demonstrating how urban spaces can be transformed into productive agricultural hubs, reducing water usage by up to 90% while increasing crop yields. Our research and development initiatives focus on creating scalable solutions that can be implemented in various environments, from urban rooftops to rural communities.
              </p> */}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <LazyImage
                src="\classroom.avif"
                alt="Smart Farming"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
              <LazyImage
                src="\germination.avif"
                alt="Innovation"
                className="rounded-lg shadow-lg w-full h-64 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-[#e8f5e9]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col items-center mb-12">
            <FaBullseye className="text-green-700 text-[#0A3622] text-5xl mb-4" />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-montserrat font-weight: 600 text-[#0A3622] mb-4 text-center"
            >
              Our Vision
            </motion.h2>
            <span className="text-green-800 text-lg text-[#0A3622] font-semibold font-montserrat font-weight: 600 mb-4">"A world where sustainable agriculture thrives"</span>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              <LazyImage
                src="\hero-bg.avif"
                alt="Vision"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
              <LazyImage
                src="\hydro4.jpg"
                alt="Future"
                className="rounded-lg shadow-lg w-full h-64 object-cover mt-8"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg font-montserrat text-[#0A3622] text-left font-weight: 600 text-gray-800 leading-relaxed">
              We envision a world where agriculture is clean, efficient, and accessible to all. A world where farming no longer depends on vast lands or heavy resources, but instead thrives through innovation, responsibility, and resilience. By making hydroponics a practical and scalable solution, we hope to address food security, environmental challenges, and economic inequality—one community at a time.

              </p>
              {/* <p className="text-lg text-gray-800 leading-relaxed">
                Through education, research, and community engagement, we aim to inspire the next generation of farmers and innovators to embrace sustainable agriculture practices. We believe that by combining traditional farming wisdom with modern technology, we can create a more resilient and food-secure future.
              </p> */}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col items-center mb-12">
            <FaLeaf className="text-green-700 text-[#0A3622] text-5xl mb-4" />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-montserrat font-weight: 600 text-[#0A3622] mb-4 text-center"
            >
              Our Mission
            </motion.h2>
            <span className="text-green-800 text-lg text-[#0A3622] font-semibold font-montserrat font-weight: 600 mb-4">"Advancing sustainable agriculture through innovation"</span>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-[#e8f5e9] p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-montserrat font-weight: 600 text-[#0A3622] mb-4">Advance Research</h3>
              <p className="text-gray-800 font-montserrat text-left font-weight: 600">
              We are committed to driving innovation in hydroponics and sustainable agriculture by working with researchers, technologists, and local experts to make soilless farming more efficient, affordable, and scalable.

              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-[#e8f5e9] p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-montserrat font-weight: 600 text-[#0A3622] mb-4">Educate and Train</h3>
              <p className="text-gray-800 font-montserrat text-left font-weight: 600">
              We empower students, farmers, and entrepreneurs with the knowledge and tools they need to succeed. Through workshops, hands-on training, and long-term learning programs, we're building a skilled and informed generation of agricultural changemakers.

              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-[#e8f5e9] p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-montserrat font-weight: 600 text-[#0A3622] mb-4">Create Social Impact</h3>
              <p className="text-gray-800 font-montserrat text-left font-weight: 600">
              By promoting eco-friendly practices and supporting the setup of hydroponic systems in communities, we're helping improve livelihoods, boost local food production, and contribute to a more sustainable planet.

              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Hydroponics Matters Section */}
      <section className="py-20 bg-[#e8f5e9]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col items-center mb-12">
            <FaChartLine className="text-green-700 text-[#0A3622] text-5xl mb-4" />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-montserrat font-weight: 600 text-[#0A3622] mb-4 text-center"
            >
              Why Hydroponics Matters
            </motion.h2>
            <span className="text-green-800 text-lg text-[#0A3622] font-semibold font-montserrat font-weight: 600 mb-4">"The future of sustainable farming"</span>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg font-montserrat text-[#0A3622] text-left font-weight: 600 text-gray-800 leading-relaxed">
              Hydroponics isn't just an alternative—it's a necessity for the future. It uses significantly less water, allows food to be grown in compact urban spaces, and eliminates the need for harmful chemicals. As climate change and population growth strain traditional farming, hydroponics offers a resilient and scalable solution. We're here to ensure that more people can access and benefit from it.By growing plants without soil, we can:

              </p>
              <ul className="list-disc pl-6 text-gray-800 text-[#0A3622] font-montserrat font-weight: 600 space-y-2 text-left">
                <li>Reduce water usage by up to 90% compared to traditional farming</li>
                <li>Eliminate the need for harmful pesticides and herbicides</li>
                <li>Grow food in urban areas, reducing transportation costs and carbon emissions</li>
                <li>Increase crop yields while using less space</li>
                <li>Provide fresh, nutritious produce year-round</li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <LazyImage
                src="\hydroponics2.jpg"
                alt="Hydroponics"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
              <LazyImage
                src="\hydroponics3.jpg"
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
            <FaHandshake className="text-green-700 text-[#0A3622] text-5xl mb-4" />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-montserrat font-weight: 600 text-[#0A3622] mb-4 text-center"
            >
              Impact at a Glance
            </motion.h2>
            <span className="text-green-800 text-lg text-[#0A3622] font-semibold font-montserrat font-weight: 600 mb-4">"Making a difference, one harvest at a time"</span>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-[#e8f5e9] p-8 rounded-xl shadow-lg text-center"
            >
              <h3 className="text-4xl font-montserrat font-weight: 600 text-[#0A3622] mb-2">90%</h3>
              <p className="text-gray-800 text-[#0A3622] font-montserrat font-weight: 600">Water Usage Reduction</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-[#e8f5e9] p-8 rounded-xl shadow-lg text-center"
            >
              <h3 className="text-4xl font-montserrat font-weight: 600 text-[#0A3622] mb-2">3x</h3>
              <p className="text-gray-800 text-[#0A3622] font-montserrat font-weight: 600">Higher Crop Yields</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-[#e8f5e9] p-8 rounded-xl shadow-lg text-center"
            >
              <h3 className="text-4xl font-montserrat font-weight: 600 text-[#0A3622] mb-2">300+</h3>
              <p className="text-gray-800 font-montserrat text-[#0A3622] font-weight: 600">Farmers Trained</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Movement We're Growing Section */}
      <section className="py-20 bg-[#e8f5e9]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col items-center mb-12">
            <FaUsers className="text-green-700 text-[#0A3622] text-5xl mb-4" />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-montserrat font-weight: 600 text-[#0A3622] mb-4 text-center"
            >
              The Movement We're Growing
            </motion.h2>
            <span className="text-green-800 text-[#0A3622] text-lg font-semibold font-montserrat font-weight: 600 mb-4">"Join us in cultivating change"</span>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              <LazyImage
                src="\polyhouse.avif"
                alt="Community"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
              <LazyImage
                src="\system7.png"
                alt="Growth"
                className="rounded-lg shadow-lg w-full h-64 object-cover mt-8"
              />
            </div>
            <div className="space-y-6">
              {/* <p className="text-lg text-gray-800 leading-relaxed">
                We're building a community of innovators, educators, and change-makers who are passionate about transforming the future of agriculture. Through our various programs and initiatives, we're creating opportunities for people to learn, grow, and contribute to a more sustainable food system.
              </p> */}
              <p className="text-lg font-montserrat text-[#0A3622] font-weight: 600 text-gray-800 leading-relaxed text-left">
              We're not just cultivating crops — we're cultivating a movement. One that places sustainability, innovation, and people at its core.

              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisionAndMission; 