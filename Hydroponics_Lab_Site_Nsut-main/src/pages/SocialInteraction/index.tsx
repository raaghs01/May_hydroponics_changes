import { motion } from 'framer-motion';
import { FaHandshake, FaUsers, FaSchool, FaGraduationCap, FaHeart, FaLeaf, FaChartLine, FaHandsHelping, FaBookOpen, FaLightbulb } from 'react-icons/fa';

const SocialInteraction = () => {
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
            Our Commitment to Social Responsibility
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 text-center max-w-3xl mx-auto drop-shadow"
          >
            Building a Sustainable Future Through Community Engagement
          </motion.p>
        </div>
      </div>

      {/* Vision Section */}
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
              Vision for a Greener, More Equitable Future
            </motion.h2>
            <span className="text-green-800 text-lg font-semibold mb-4">"Connecting youth, science, and society"</span>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-800 leading-relaxed">
                We envision a future where sustainable agriculture bridges the gap between scientific innovation and social impact. Our commitment extends beyond technology to create meaningful change in communities.
              </p>
              <ul className="list-disc pl-6 text-gray-800 space-y-2">
                <li>Empowering communities through sustainable farming</li>
                <li>Creating opportunities for youth engagement</li>
                <li>Promoting scientific literacy and innovation</li>
                <li>Building bridges between research and practical application</li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
                alt="Vision 1"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"
                alt="Vision 2"
                className="rounded-lg shadow-lg w-full h-64 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Initiatives Section */}
      <section className="py-20 bg-[#f5f9f5]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col items-center mb-12">
            <FaHandsHelping className="text-green-700 text-5xl mb-4" />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-montserrat text-[#0A3622] mb-4 text-center"
            >
              Key Initiatives
            </motion.h2>
            <span className="text-green-800 text-lg font-semibold mb-4">"Making a difference in our community"</span>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Community Outreach",
                description: "Engaging with local communities to promote sustainable farming practices",
                icon: <FaUsers className="text-4xl text-green-700 mb-4" />
              },
              {
                title: "Educational Programs",
                description: "Providing hands-on learning experiences in hydroponic farming",
                icon: <FaBookOpen className="text-4xl text-green-700 mb-4" />
              },
              {
                title: "Environmental Impact",
                description: "Reducing carbon footprint through sustainable agriculture",
                icon: <FaLeaf className="text-4xl text-green-700 mb-4" />
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-xl shadow-lg text-center"
              >
                {item.icon}
                <h3 className="text-xl font-montserrat text-[#0A3622] mb-2">{item.title}</h3>
                <p className="text-gray-800">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Farmers Connect Program Section */}
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
              Farmers Connect Program
            </motion.h2>
            <span className="text-green-800 text-lg font-semibold mb-4">"Empowering local farmers"</span>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1501876725168-00c445821c9e?auto=format&fit=crop&w=400&q=80"
                alt="Farmers 1"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=400&q=80"
                alt="Farmers 2"
                className="rounded-lg shadow-lg w-full h-64 object-cover mt-8"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-800 leading-relaxed">
                Our Farmers Connect Program provides local farmers with access to modern hydroponic technology and training, helping them transition to more sustainable and profitable farming methods.
              </p>
              <ul className="list-disc pl-6 text-gray-800 space-y-2">
                <li>Technical training and support</li>
                <li>Access to modern equipment</li>
                <li>Market linkage opportunities</li>
                <li>Community knowledge sharing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainable Farming Workshops Section */}
      <section className="py-20 bg-[#f5f9f5]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col items-center mb-12">
            <FaLeaf className="text-green-700 text-5xl mb-4" />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-montserrat text-[#0A3622] mb-4 text-center"
            >
              Sustainable Farming Workshops
            </motion.h2>
            <span className="text-green-800 text-lg font-semibold mb-4">"Learning by doing"</span>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-800 leading-relaxed">
                Our workshops provide hands-on experience in sustainable farming practices, from basic hydroponic systems to advanced techniques.
              </p>
              <ul className="list-disc pl-6 text-gray-800 space-y-2">
                <li>Basic hydroponic setup and maintenance</li>
                <li>Advanced growing techniques</li>
                <li>Resource management and optimization</li>
                <li>Business planning and marketing</li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
                alt="Workshop 1"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80"
                alt="Workshop 2"
                className="rounded-lg shadow-lg w-full h-64 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Food Distribution Drive Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col items-center mb-12">
            <FaHeart className="text-green-700 text-5xl mb-4" />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-montserrat text-[#0A3622] mb-4 text-center"
            >
              Food Distribution Drive & Nutritional Outreach
            </motion.h2>
            <span className="text-green-800 text-lg font-semibold mb-4">"Nourishing our community"</span>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
                alt="Food Drive 1"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"
                alt="Food Drive 2"
                className="rounded-lg shadow-lg w-full h-64 object-cover mt-8"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-800 leading-relaxed">
                We organize regular food distribution drives and nutritional awareness programs to ensure food security and promote healthy eating habits in our community.
              </p>
              <ul className="list-disc pl-6 text-gray-800 space-y-2">
                <li>Regular food distribution events</li>
                <li>Nutritional education workshops</li>
                <li>Community kitchen initiatives</li>
                <li>Partnership with local organizations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* School Partnerships Program Section */}
      <section className="py-20 bg-[#f5f9f5]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col items-center mb-12">
            <FaSchool className="text-green-700 text-5xl mb-4" />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-montserrat text-[#0A3622] mb-4 text-center"
            >
              School Partnerships Program
            </motion.h2>
            <span className="text-green-800 text-lg font-semibold mb-4">"Growing the next generation"</span>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-800 leading-relaxed">
                Our School Partnerships Program introduces students to sustainable agriculture through hands-on learning experiences and educational workshops.
              </p>
              <ul className="list-disc pl-6 text-gray-800 space-y-2">
                <li>School garden installations</li>
                <li>Science curriculum integration</li>
                <li>Student leadership development</li>
                <li>Environmental awareness programs</li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1501876725168-00c445821c9e?auto=format&fit=crop&w=400&q=80"
                alt="School 1"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=400&q=80"
                alt="School 2"
                className="rounded-lg shadow-lg w-full h-64 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Student Involvement Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col items-center mb-12">
            <FaGraduationCap className="text-green-700 text-5xl mb-4" />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-montserrat text-[#0A3622] mb-4 text-center"
            >
              Student Involvement: Learning with Purpose
            </motion.h2>
            <span className="text-green-800 text-lg font-semibold mb-4">"Empowering future leaders"</span>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
                alt="Students 1"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80"
                alt="Students 2"
                className="rounded-lg shadow-lg w-full h-64 object-cover mt-8"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-800 leading-relaxed">
                We actively involve students in our projects, providing them with opportunities to learn, grow, and contribute to sustainable agriculture initiatives.
              </p>
              <ul className="list-disc pl-6 text-gray-800 space-y-2">
                <li>Research opportunities</li>
                <li>Leadership development</li>
                <li>Community service projects</li>
                <li>Skill-building workshops</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics Section */}
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
              Why It Matters
            </motion.h2>
            <span className="text-green-800 text-lg font-semibold mb-4">"Measuring our impact"</span>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { metric: "1000+", label: "Students Engaged" },
              { metric: "50+", label: "Schools Partnered" },
              { metric: "200+", label: "Farmers Trained" },
              { metric: "5000+", label: "Community Members Reached" }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-xl shadow-lg text-center"
              >
                <h3 className="text-4xl font-montserrat text-[#0A3622] mb-2">{item.metric}</h3>
                <p className="text-gray-800">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialInteraction; 