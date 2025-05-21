import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BsStarFill } from 'react-icons/bs';
import { FaChalkboardTeacher, FaHandsHelping, FaSeedling, FaFlask } from 'react-icons/fa';

const trainingPrograms = [
  {
    image:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    title: '2-Day Introductory Workshop',
    instructor: 'Dr. Akhilesh Dubey',
    details: '10 lectures | 2 hours Hands on sessions',
    price: 'Rs. 499',
    rating: 5,
    idealFor:
      'Beginners, curious hobbyists, and enthusiasts looking to get a taste of hydroponics.',
    overview:
      "This immersive 2-day workshop is designed to introduce you to the basics of hydroponic gardening. You'll learn essential techniques, from setting up simple systems to understanding nutrient management. This workshop combines theoretical sessions and hands-on exercises, helping you experience hydroponic cultivation from seed to harvest.",
  },
  {
    image:
      'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
    title: '1-Week Intensive Program',
    instructor: 'Dr. Akhilesh Dubey',
    details: '10 lectures | 2 hours daily Hands on sessions',
    price: 'Rs. 999',
    rating: 5,
    idealFor:
      'Aspiring hydroponics entrepreneurs, agriculture students, and professionals seeking a deeper understanding of hydroponic systems.',
    overview:
      'Our 1-week program offers an in-depth exploration of hydroponic farming techniques and system management. Through a blend of classroom learning and practical exercises, participants will gain comprehensive knowledge on hydroponic setups, crop management, pest control, and more advanced nutrient strategies.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1501876725168-00c445821c9e?auto=format&fit=crop&w=600&q=80',
    title: '8-Week Advanced Training Program',
    instructor: 'Dr. Akhilesh Dubey',
    details: '10 lectures | 2 hours Hands on sessions',
    price: 'Rs. 1499',
    rating: 5,
    idealFor:
      'Entrepreneurs, researchers, and serious practitioners aiming to master hydroponics and develop professional-level expertise.',
    overview:
      'Our 8-week training is an advanced, all-encompassing course that dives deeply into all aspects of hydroponic horticulture. Participants will gain expertise in hydroponic system design, crop optimization, nutrient formulation, and data-driven plant management using innovative technologies.',
  },
];

const sectionIcons = [
  <FaChalkboardTeacher className="text-green-700 text-4xl mb-2" />, // Training
  <FaSeedling className="text-green-700 text-4xl mb-2" />, // Workshops
  <FaHandsHelping className="text-green-700 text-4xl mb-2" />, // Internship
  <FaFlask className="text-green-700 text-4xl mb-2" />, // Research
];

const GetInvolved = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e8f5e9] to-white">
      {/* Hero Section */}
      <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src="/system5.jpg"
          alt="Get Involved Hero"
          className="absolute inset-0 w-full h-full object-cover object-center z-0 opacity-70 scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A3622]/80 to-transparent z-0" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-montserrat font-weight: 600 text-white text-center mb-6 drop-shadow-lg"
          >
            Get Involved
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl font-montserrat font-weight: 600 text-white/90 text-center max-w-3xl mx-auto drop-shadow"
          >
            Join our vibrant learning and research community at the Hydroponics - Horticulture Training and Research Facility.
          </motion.p>
        </div>
      </div>

      {/* Training Programs Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col items-center mb-8">
            {sectionIcons[0]}
            <motion.h2 className="text-4xl font-montserrat font-weight: 600 text-[#0A3622] mb-2 text-center">
              Training Programs
            </motion.h2>
            <span className="text-green-800 text-lg font-semibold font-montserrat font-weight: 600 mb-2">"Grow your knowledge, grow your future."</span>
          </div>
          <p className="text-lg md:text-xl font-montserrat font-weight: 600 text-gray-800 leading-relaxed text-center mb-12">
            At the Centre of Excellence in Hydroponics, we offer diverse training programs to cater to all levels of interest and experience—from newcomers to seasoned practitioners. Each program is tailored to provide a hands-on understanding of hydroponic horticulture, plant management, and sustainable cultivation practices.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {trainingPrograms.map((program, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(34,139,34,0.15)' }}
                className="bg-[#003300] rounded-xl shadow-lg overflow-hidden flex flex-col h-full"
              >
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-48 object-cover object-center"
                />
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-2xl font-montserrat font-weight: 600 tracking-wide mb-1 text-white">
                    {program.title}
                  </h3>
                  <p className="text-base font-montserrat font-weight: 600 text-white/90 mb-1">
                    {program.instructor} | {program.details}
                  </p>
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <BsStarFill key={i} className="text-yellow-400" size={14} />
                    ))}
                  </div>
                  <div className="space-y-4">
                    <p className="font-montserrat font-weight: 600 text-white/90 leading-snug">
                      <span className="font-montserrat font-weight: 600 text-base">
                        Ideal for:
                      </span>{" "}
                      {program.idealFor}
                    </p>

                    <div>
                      <h3 className="text-lg font-montserrat font-weight: 600 tracking-wide mb-1 text-white">Overview:</h3>
                      <p className="font-montserrat font-weight: 600 text-white/90 leading-snug">{program.overview}</p>
                    </div>
                  </div>
                  <div className="mt-auto pt-4">
                    <Link
                      to="/apply"
                      className="inline-block px-8 py-3 bg-[#07370f] text-white rounded-md font-weight: 600 hover:bg-[#0A3622] transition-colors duration-300"
                    >
                      Apply Now ›
                    </Link>
                  </div>
                  <div className="text-2xl font-montserrat font-weight: 600 text-white mt-4">{program.price}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshops Section */}
      <section className="py-20 bg-[#f5f9f5]">
        <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 flex flex-col gap-4">
            <img src="/workshop-hydroponics.jpg" alt="Workshops" className="rounded-lg shadow-lg w-full h-80 object-cover" />
            <img src="https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=400&q=80" alt="Workshop 2" className="rounded-lg shadow w-2/3 mx-auto h-40 object-cover object-center" />
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex items-center gap-2 mb-2">{sectionIcons[1]}<span className="text-green-800 font-semibold font-montserrat font-weight: 600">"Hands-on learning for a sustainable tomorrow."</span></div>
            <h2 className="text-4xl font-montserrat font-weight: 600 text-[#0A3622] mb-6">Workshops</h2>
            <p className="text-lg font-montserrat font-weight: 600 text-gray-800 mb-4">
              Our Sustainable Farming Workshops are designed to bring the science of modern agriculture to the grassroots, empowering individuals and communities with the skills to grow more with less land, less water, and less environmental impact. Held in partnership with local NGOs, schools, and rural development centers, these workshops are at the heart of our mission to make sustainable farming techniques accessible, practical, and impactful.
            </p>
            <ul className="list-disc pl-6 text-gray-700 font-montserrat font-weight: 600 mb-4">
              <li>Introduce participants to the fundamentals of hydroponics, aeroponics, and organic gardening</li>
              <li>Promote eco-friendly and resource-efficient farming practices</li>
              <li>Equip people with hands-on, low-cost methods to grow healthy food in small spaces</li>
              <li>Create awareness about food sovereignty, climate-resilient agriculture, and circular farming systems</li>
            </ul>
            <Link
              to="/training#workshops"
              className="inline-block px-8 py-3 bg-[#07370f] text-white rounded-md font-weight: 600 hover:bg-[#0A3622] transition-colors duration-300"
            >
              View Upcoming Workshops
            </Link>
          </div>
        </div>
      </section>

      {/* Internship & Volunteering Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 flex flex-col gap-4">
            <img src="/internship-hydroponics.jpg" alt="Internship & Volunteering" className="rounded-lg shadow-lg w-full h-80 object-cover" />
            <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" alt="Internship 2" className="rounded-lg shadow w-2/3 mx-auto h-40 object-cover object-center" />
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex items-center gap-2 mb-2">{sectionIcons[2]}<span className="text-green-800 font-semibold font-montserrat font-weight: 600">"Grow with us, give back to the community."</span></div>
            <h2 className="text-4xl font-montserrat font-weight: 600 text-[#0A3622] mb-6">Internship & Volunteering</h2>
            <p className="text-lg font-montserrat font-weight: 600 text-gray-800 mb-4">
              Interns and volunteers at our facility work closely with research teams, help manage hydroponic systems, participate in community outreach, and contribute to educational content and events. These opportunities are ideal for students, recent graduates, and anyone passionate about sustainable agriculture and hands-on learning.
            </p>
            <ul className="list-disc pl-6 text-gray-700 font-montserrat font-weight: 600 mb-4">
              <li>Project-based roles in research, operations, and outreach</li>
              <li>Hands-on experience in hydroponic system management</li>
              <li>Event organization and educational program support</li>
              <li>Opportunities to contribute to media, documentation, and social impact projects</li>
            </ul>
            <Link
              to="/apply#internship"
              className="inline-block px-8 py-3 bg-[#07370f] text-white rounded-md font-weight: 600 hover:bg-[#0A3622] transition-colors duration-300"
            >
              Apply for Internship/Volunteering
            </Link>
          </div>
        </div>
      </section>

      {/* Research Collaborations Section */}
      <section className="py-20 bg-[#f5f9f5]">
        <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 flex flex-col gap-4">
            <img src="/research-collaboration-hydroponics.jpg" alt="Research Collaborations" className="rounded-lg shadow-lg w-full h-80 object-cover" />
            <img src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80" alt="Research 2" className="rounded-lg shadow w-2/3 mx-auto h-40 object-cover object-center" />
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex items-center gap-2 mb-2">{sectionIcons[3]}<span className="text-green-800 font-semibold font-montserrat font-weight: 600">"Innovate together for a greener future."</span></div>
            <h2 className="text-4xl font-montserrat font-weight: 600 text-[#0A3622] mb-6">Research Collaborations</h2>
            <p className="text-lg font-montserrat font-weight: 600 text-gray-800 mb-4">
              We partner with leading institutions and companies to advance hydroponic science, from plant-microbe interactions to climate-resilient agriculture and smart farming technologies. Our collaborative research projects focus on innovation, technology development, and knowledge sharing to push the boundaries of sustainable agriculture.
            </p>
            <ul className="list-disc pl-6 text-gray-700 font-montserrat font-weight: 600 mb-4">
              <li>Joint research projects with academic and industry partners</li>
              <li>Technology development and data sharing</li>
              <li>Publication and dissemination of research findings</li>
              <li>Opportunities for student and faculty involvement</li>
            </ul>
            <Link
              to="/about#research"
              className="inline-block px-8 py-3 bg-[#07370f] text-white rounded-md font-weight: 600 hover:bg-[#0A3622] transition-colors duration-300"
            >
              Explore Research Partnerships
            </Link>
          </div>
        </div>
      </section>

      {/* Start Today Section */}
      <div className="bg-[#e6ffe6] text-[#003300] py-10 md:py-20">
        <div className="container mx-auto px-4 md:px-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-montserrat font-weight: 600 mb-4 md:mb-8"
          >
            Start Today, Make an Impact Tomorrow
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl font-montserrat font-weight: 600 italic max-w-5xl mx-auto"
          >
            No matter your background, you can make a meaningful contribution to
            the future of agriculture. Begin your journey with us and become a
            leader in sustainable farming!
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved; 