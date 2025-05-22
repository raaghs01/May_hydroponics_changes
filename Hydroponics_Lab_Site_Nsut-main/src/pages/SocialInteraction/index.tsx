import { motion } from 'framer-motion';
import { FaHandshake, FaUsers, FaSchool, FaGraduationCap, FaHeart, FaLeaf, FaChartLine, FaHandsHelping, FaBookOpen, FaLightbulb } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';

const SocialInteraction = () => {
  // const navigate = useNavigate();

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
            className="text-5xl md:text-7xl font-montserrat font-weight: 600 text-white text-center mb-6 drop-shadow-lg"
          >
            Our Commitment to Social Responsibility
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl font-montserrat font-weight: 600 text-white/90 text-center max-w-3xl mx-auto drop-shadow"
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
              className="text-4xl font-montserrat font-weight: 600 text-[#0A3622] mb-4 text-center"
            >
              Vision for Cultivating Responsibility Through Sustainability
            </motion.h2>
            <span className="text-green-800 text-lg font-semibold font-montserrat font-weight: 600 mb-4">"Connecting youth, science, and society"</span>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-left font-montserrat font-weight: 600 text-gray-800 leading-relaxed">
                We envision a future where science, sustainability, and social responsibility grow hand in hand. We believe that the role of students and researchers extends far beyond the walls of a laboratory or classroom, it reaches into the heart of our communities and the roots of our environment.

              </p>
              <p className="text-lg text-left font-montserrat font-weight: 600 text-gray-800 leading-relaxed">
              Our vision is to become a catalyst of change, one that connects youth, science, and society in a meaningful journey toward a greener, healthier, and more equitable future. Every drop of water we save, every plant we grow, and every life we touch brings us closer to this goal.
              </p>
              {/* <ul className="list-disc pl-6 text-gray-800 space-y-2">
                <li>Empowering communities through sustainable farming</li>
                <li>Creating opportunities for youth engagement</li>
                <li>Promoting scientific literacy and innovation</li>
                <li>Building bridges between research and practical application</li>
              </ul> */}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/hydroponics1.jpg"
                alt="Vision 1"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
              <img
                src="/hydroponics2.jpg"
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
              className="text-4xl font-montserrat font-weight: 600 text-[#0A3622] mb-4 text-center"
            >
              Key Initiatives
            </motion.h2>
            <span className="text-green-800 text-lg font-semibold font-montserrat font-weight: 600 mb-4">"Making a difference in our community"</span>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Community Outreach",
                description: "Engaging with local communities to promote sustainable farming practices",
                icon: <FaUsers className="text-4xl text-centre text-green-700 mb-4" />
              },
              {
                title: "Educational Programs",
                description: "Providing hands-on learning experiences in hydroponic farming",
                icon: <FaBookOpen className="text-4xl text-centre text-green-700 mb-4" />
              },
              {
                title: "Environmental Impact",
                description: "Reducing carbon footprint through sustainable agriculture",
                icon: <FaLeaf className="text-4xl text-centre text-green-700 mb-4" />
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-xl shadow-lg text-center"
              >
                {item.icon}
                <h3 className="text-xl font-montserrat font-weight: 600 text-[#0A3622] mb-2">{item.title}</h3>
                <p className="text-gray-800 font-montserrat font-weight: 600">{item.description}</p>
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
              className="text-4xl font-montserrat font-weight: 600 text-[#0A3622] mb-4 text-center"
            >
              Farmers Connect Program
            </motion.h2>
            <span className="text-green-800 text-lg font-semibold font-montserrat font-weight: 600 mb-4">"Empowering local farmers"</span>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/farmers-connect.jpg"
                alt="Farmers 1"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
              <img
                src="/germination.jpg"
                alt="Farmers 2"
                className="rounded-lg shadow-lg w-full h-64 object-cover mt-8"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg font-montserrat font-weight: 600 text-gray-800 leading-relaxed text-left">
              Our goal is to empower farmers with accessible knowledge, affordable technology, and hands-on support in adopting hydroponic and eco-friendly horticultural methods.
              A core part of our CSR efforts, this program connects students with local farmers to promote sustainable agriculture. We provide hands-on training, low-cost DIY kits, and ongoing support to help farmers adopt hydroponic and eco-friendly methods.
              </p>
              <h4 className="font-semibold font-montserrat font-weight: 600 text-[#0A3622]">WHAT WE DO:</h4>
              <ul className="list-disc pl-6 text-gray-800 font-montserrat font-weight: 600 space-y-2 text-left">
                <li>On field training sessions</li>
                <li>Low cost DIY training kits</li>
                <li>Consultation and support</li>
                <li>Post training follow ups</li>
              </ul>
              <h4 className="font-semibold font-montserrat font-weight: 600 text-[#0A3622] mt-4 text-left">IMPACT:</h4>
              <ul className="list-disc pl-6 text-gray-800 font-montserrat font-weight: 600 space-y-2 text-left">
                <li>Over 200 farmers trained</li>
                <li>15+ villages connected through programs and follow ups</li>
                <li>Increase in yield efficiency, better learning for students</li>
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
              className="text-4xl font-montserrat font-weight: 600 text-[#0A3622] mb-4 text-center"
            >
              Sustainable Farming Workshops
            </motion.h2>
            <span className="text-green-800 text-lg font-semibold font-montserrat font-weight: 600 mb-4">"Learning by doing"</span>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg font-montserrat font-weight: 600 text-gray-800 leading-relaxed text-left">
              Our workshops bring cutting-edge farming to rural communities. Partnering with NGOs and schools, we teach how to grow more with less—less water, less space, less harm to nature.
              </p>
              <h4 className="font-semibold font-montserrat font-weight: 600 text-[#0A3622] text-left">WORKSHOP FOCUS:</h4>
              <ul className="list-disc pl-6 text-gray-800 font-montserrat font-weight: 600 space-y-2 text-left">
                <li>Hydroponics, aeroponics, organic gardening</li>
                <li>Eco-friendly techniques for soil/water-stressed areas</li>
                <li>Growing food in small spaces</li>
                {/* <li>Create awareness about the importance of food sovereignty, climate-resilient agriculture, and circular farming systems</li> */}
              </ul>
              <h4 className="font-semibold font-montserrat font-weight: 600 text-[#0A3622] mt-4 text-left">WORKSHOP ACTIVITIES:</h4>
              <ul className="list-disc pl-6 text-gray-800 font-montserrat font-weight: 600 space-y-2 text-left">
                <li>Live demonstrations</li>
                <li>DIY kit assembly/hands on experience</li>
                <li>Crop planning and nutrient education</li>
              </ul>
              {/* <button
                onClick={() => navigate('/contactus?regarding=events')}
                className="inline-block px-8 py-3 bg-[#07370f] text-white rounded-md font-weight: 600 hover:bg-[#0A3622] transition-colors duration-300"
              >
                View Upcoming Workshops
              </button> */}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/hero-bg.jpg"
                alt="Workshop 1"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
              <img
                src="/hydro4.jpg"
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
              className="text-4xl font-montserrat font-weight: 600 text-[#0A3622] mb-4 text-center"
            >
              Food Distribution Drive & Nutritional Outreach
            </motion.h2>
            <span className="text-green-800 text-lg font-semibold font-montserrat font-weight: 600 mb-4">"Nourishing our community"</span>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="\vegetation-drive.jpg"
                alt="Food Drive 1"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
              <img
                src="\vegetation-0drive-2.jpg"
                alt="Food Drive 2"
                className="rounded-lg shadow-lg w-full h-64 object-cover mt-8"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg font-montserrat font-weight: 600 text-gray-800 leading-relaxed text-left">
              We believe healthy food is a right, not a privilege. Our outreach programs connect our hydroponic produce with communities facing food insecurity and malnutrition.
              </p>
              <h4 className="font-semibold font-montserrat font-weight: 600 text-[#0A3622] mt-4 text-left">WHAT WE DO :</h4>
              <ul className="list-disc pl-6 text-gray-800 font-montserrat font-weight: 600 space-y-2 text-left">
                <li>Distribute fresh, chemical-free vegetables</li>
                <li>Educate on nutrition and dietary awareness</li>
                <li>Promote food equity and justice</li>
              </ul>
              {/* <p className="text-lg font-montserrat font-weight: 600 text-gray-800 leading-relaxed">
                The vegetation drive, hosted by Centre of Excellence Hydroponics Horticulture Training and Research Facility, proved to be a resounding success. Held on the college campus, the event united students, faculty, and esteemed guests in a shared mission to promote sustainable agriculture and environmental consciousness. Attendees enthusiastically took part in planting activities, knowledge-sharing sessions, and celebrations of eco-friendly initiatives. The drive emphasized the value of modern horticultural techniques and nurtured a strong sense of community committed to building a greener, more sustainable future.
              </p> */}
               <h4 className="font-semibold font-montserrat font-weight: 600 text-[#0A3622] mt-4 text-left">DRIVEN BY :</h4>
               <p className="text-lg font-montserrat font-weight: 600 text-gray-800 leading-relaxed text-left">
               The Centre of Excellence Hydroponics Training & Research Facility, this initiative brings together students, staff, and local leaders to serve communities sustainably.


              </p>
               
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
              className="text-4xl font-montserrat font-weight: 600 text-[#0A3622] mb-4 text-center"
            >
              School Partnerships Program
            </motion.h2>
            <span className="text-green-800 text-lg font-semibold font-montserrat font-weight: 600 mb-4">"Growing the next generation"</span>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg font-montserrat font-weight: 600 text-gray-800 leading-relaxed text-left">
              Through our School Partnerships Program, we collaborate with schools especially those in underserved or rural areas to make environmental education engaging, practical, and empowering.

This initiative is built on the idea that every child should have the opportunity to connect with nature, understand where their food comes from, and learn how to grow it responsibly even in places where land or resources are scarce.
              </p>
              <h4 className="font-semibold font-montserrat font-weight: 600 text-[#0A3622] text-left">OUR GOALS:</h4>
              <ul className="list-disc pl-6 text-gray-800 font-montserrat font-weight: 600 space-y-2 text-left">
                <li>Make agriculture and sustainability part of school life.</li>
                <li>Set up soil or hydroponic gardens.</li>
                <li>Foster environmental awareness through hands-on learning.</li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://static.wixstatic.com/media/769cbd_3f753daf065c4b159395a1633d8b560f~mv2.jpeg"
                alt="School 1"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
              <img
                src="https://static.wixstatic.com/media/769cbd_3f753daf065c4b159395a1633d8b560f~mv2.jpeg"
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
              className="text-4xl font-montserrat font-weight: 600 text-[#0A3622] mb-4 text-center"
            >
              Student Involvement: Learning with Purpose
            </motion.h2>
            <span className="text-green-800 text-lg font-semibold font-montserrat font-weight: 600 mb-4">"Empowering future leaders"</span>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/system1.jpg"
                alt="Students 1"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
              <img
                src="/system2.jpg"
                alt="Students 2"
                className="rounded-lg shadow-lg w-full h-64 object-cover mt-8"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg font-montserrat font-weight: 600 text-gray-800 leading-relaxed text-left">
              We believe that when students take ownership of social and environmental challenges, they don't just grow plants, they grow purpose.Students are the heart of our mission. They lead, innovate, and grow—not just crops, but change.
              </p>
              <h4 className="font-semibold font-montserrat font-weight: 600 text-[#0A3622] text-left ">WAYS STUDENTS GET INVOLVED:</h4>
              <ul className="list-disc pl-6 text-gray-800 font-montserrat font-weight: 600 space-y-2 text-left">
                <li><b>Project Leads & Coordinators:</b>  Head training, drives, and school programs</li>
                <li><b>Outreach & Education Teams:</b> Lead educational sessions and activities</li>
                <li><b>Research & Innovation Groups:</b>  Innovate new farming techniques</li>
                <li><b>Garden Managers & Growers:</b> Run our hydroponic systems</li>
                <li><b>Content & Media Creators:</b> Document, design, and share our story</li>
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
              className="text-4xl font-montserrat font-weight: 600 text-[#0A3622] mb-4 text-center"
            >
              Why It Matters
            </motion.h2>
            <span className="text-green-800 text-lg font-semibold font-montserrat font-weight: 600 mb-4">"Measuring our impact"</span>
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
                <h3 className="text-4xl font-montserrat font-weight: 600 text-[#0A3622] mb-2">{item.metric}</h3>
                <p className="text-gray-800 font-montserrat font-weight: 600">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialInteraction; 
