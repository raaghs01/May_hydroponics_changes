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
              Vision for Cultivating Responsibility Through Sustainability
            </motion.h2>
            <span className="text-green-800 text-lg font-semibold mb-4">"Connecting youth, science, and society"</span>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-800 leading-relaxed">
                We envision a future where science, sustainability, and social responsibility grow hand in hand. We believe that the role of students and researchers extends far beyond the walls of a laboratory or classroom, it reaches into the heart of our communities and the roots of our environment.

              </p>
              <p className="text-lg text-gray-800 leading-relaxed">
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
                The Farmers Connect Program is one of the cornerstone initiatives of our CSR mission. It serves as a bridge between academic innovation and grassroots agricultural practice, bringing together student researchers, local farmers, and rural communities in a shared pursuit of sustainable farming.<br/><br/>
                Our goal is to empower farmers with accessible knowledge, affordable technology, and hands-on support in adopting hydroponic and eco-friendly horticultural methods. At the same time, the program gives students the opportunity to learn from traditional farming wisdom and adapt scientific ideas to real-world conditions.
              </p>
              <h4 className="font-semibold text-[#0A3622]">WHAT WE DO:</h4>
              <ul className="list-disc pl-6 text-gray-800 space-y-2 text-left">
                <li>On field training sessions</li>
                <li>Low cost DIY training kits</li>
                <li>Consultation and support</li>
                <li>Post training follow ups</li>
              </ul>
              <h4 className="font-semibold text-[#0A3622] mt-4">IMPACT:</h4>
              <ul className="list-disc pl-6 text-gray-800 space-y-2 text-left">
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
              className="text-4xl font-montserrat text-[#0A3622] mb-4 text-center"
            >
              Sustainable Farming Workshops
            </motion.h2>
            <span className="text-green-800 text-lg font-semibold mb-4">"Learning by doing"</span>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-800 leading-relaxed">
                Our Sustainable Farming Workshops are designed to bring the science of modern agriculture to the grassroots, empowering individuals and communities with the skills to grow more with less land, less water, and less environmental impact.<br/><br/>
                Held in partnership with local NGOs, schools, and rural development centers, these workshops are at the heart of our mission to make sustainable farming techniques accessible, practical, and impactful.
              </p>
              <h4 className="font-semibold text-[#0A3622]">OBJECTIVES OF THE WORKSHOP:</h4>
              <ul className="list-disc pl-6 text-gray-800 space-y-2 text-left">
                <li>Introduce participants to the fundamentals of hydroponics, aeroponics, organic gardening</li>
                <li>Promote eco-friendly and resource-efficient farming practices, especially in areas facing water scarcity or soil degradation</li>
                <li>Equip people with hands-on, low-cost methods to grow healthy food in small spaces</li>
                <li>Create awareness about the importance of food sovereignty, climate-resilient agriculture, and circular farming systems</li>
              </ul>
              <h4 className="font-semibold text-[#0A3622] mt-4">WORKSHOP ACTIVITIES:</h4>
              <ul className="list-disc pl-6 text-gray-800 space-y-2 text-left">
                <li>Live demonstrations</li>
                <li>DIY kit assembly/hands on experience</li>
                <li>Crop planning and nutrient education</li>
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
                At the core of our mission lies a deep understanding that access to fresh, nutritious food is a basic human right, not a privilege. Our food distribution drive is built on this belief to connect our hydroponic harvests with communities in need, especially those facing food insecurity, malnutrition, and lack of dietary awareness.<br/><br/>
                This initiative transforms our society's research and produce into tangible acts of service, supporting vulnerable groups with consistent, chemical-free, and nutrient-rich vegetables while promoting the values of food justice and social equity.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed">
                The vegetation drive, hosted by Centre of Excellence Hydroponics Horticulture Training and Research Facility, proved to be a resounding success. Held on the college campus, the event united students, faculty, and esteemed guests in a shared mission to promote sustainable agriculture and environmental consciousness. Attendees enthusiastically took part in planting activities, knowledge-sharing sessions, and celebrations of eco-friendly initiatives. The drive emphasized the value of modern horticultural techniques and nurtured a strong sense of community committed to building a greener, more sustainable future.
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
              className="text-4xl font-montserrat text-[#0A3622] mb-4 text-center"
            >
              School Partnerships Program
            </motion.h2>
            <span className="text-green-800 text-lg font-semibold mb-4">"Growing the next generation"</span>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-800 leading-relaxed">
                Education and sustainability go hand in hand and at Centre of Excellence Hydroponics Horticulture Training and Research Facility, we believe that the earlier these values are introduced, the stronger their impact. Through our School Partnerships Program, we collaborate with schools especially those in underserved or rural areas to make environmental education engaging, practical, and empowering.<br/><br/>
                This initiative is built on the idea that every child should have the opportunity to connect with nature, understand where their food comes from, and learn how to grow it responsibly even in places where land or resources are scarce.
              </p>
              <h4 className="font-semibold text-[#0A3622]">Our Objectives:</h4>
              <ul className="list-disc pl-6 text-gray-800 space-y-2 text-left">
                <li>To integrate basic agricultural science, sustainability, and nutrition into school education through hands-on learning.</li>
                <li>To equip students and teachers with the skills to build and maintain small-scale gardens using hydroponic or soil-based systems.</li>
                <li>To instill environmental responsibility and curiosity through interactive workshops and garden projects.</li>
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
                At the heart of Centre of Excellence Hydroponics Horticulture Training and Research Facility, is a vibrant and passionate community of students who are not just learners but leaders, innovators, and changemakers. Our initiatives thrive because of their energy, creativity, and commitment to building a more sustainable and equitable world.<br/><br/>
                We believe that when students take ownership of social and environmental challenges, they don't just grow plants, they grow purpose.
              </p>
              <h4 className="font-semibold text-[#0A3622]">Ways Students Get Involved:</h4>
              <ul className="list-disc pl-6 text-gray-800 space-y-2 text-left">
                <li><b>Project Leads & Coordinators:</b> Students head various projects ranging from school partnerships and farmers' training to garden installations and food donation drives. They manage teams, coordinate with external partners, and ensure smooth execution.</li>
                <li><b>Outreach & Education Teams:</b> Our volunteers design and lead interactive workshops, create teaching materials, and represent the society during school visits, community events, and awareness campaigns.</li>
                <li><b>Research & Innovation Groups:</b> Some students focus on R&D, experimenting with new growing mediums, organic nutrient blends, automation tools, or cost-effective hydroponic designs to improve our models.</li>
                <li><b>Garden Managers & Growers:</b> From planting and harvesting to nutrient monitoring and system maintenance, students run our campus hydroponic units like professionals, learning by doing, every single day.</li>
                <li><b>Content & Media Creators:</b> Students who are skilled in design, photography, or storytelling help document our work, manage social media, and produce videos and brochures that spread our message.</li>
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