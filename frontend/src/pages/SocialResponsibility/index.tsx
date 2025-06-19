import { motion } from 'framer-motion';
import {  FaUsers, FaSchool, FaGraduationCap, FaHeart, FaLeaf,  FaHandsHelping, FaBookOpen, FaLightbulb } from 'react-icons/fa';
import LazyImage from '../../components/LazyImage';
import { useState } from 'react';
// import { PiStudentFill } from 'react-icons/pi';

const SocialResponsibility = () => {

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e8f5e9] to-white">
      {/* Hero Section */}
      <div className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] flex items-center justify-center">
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
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-montserrat font-weight: 600 text-white text-center mb-4 sm:mb-6 drop-shadow-lg"
          >
            Our Commitment to Social Responsibility
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl font-montserrat font-weight: 600 text-white/90 text-center max-w-3xl mx-auto drop-shadow px-4"
          >
             Our commitment to the society Building a <b>Sustainable future</b> through community engagement
          </motion.p>
        </div>
      </div>

      {/* Vision Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="flex flex-col items-center mb-8 sm:mb-12">
            <FaLightbulb className="text-green-700 text-4xl sm:text-5xl mb-4" />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-3xl md:text-4xl font-montserrat font-weight: 600 text-[#0A3622] mb-4 text-center"
            >
              Vision for Cultivating Responsibility Through Sustainability
            </motion.h2>
            <span className="text-green-800 text-base sm:text-lg font-semibold font-montserrat font-weight: 600 mb-4">"Connecting youth, science, and society"</span>
          </div>
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-left font-montserrat font-weight: 600 text-gray-800 leading-relaxed">
                We envision a future where science, sustainability, and social responsibility grow hand in hand. We believe that the role of students and researchers extends far beyond the walls of a laboratory or classroom, it reaches into the heart of our communities and the roots of our environment.
              </p>
              <p className="text-base sm:text-lg text-left font-montserrat font-weight: 600 text-gray-800 leading-relaxed">
                Our vision is to become a catalyst of change, one that connects youth, science, and society in a meaningful journey toward a greener, healthier, and more equitable future. Every drop of water we save, every plant we grow, and every life we touch brings us closer to this goal.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <LazyImage
                src="/hydroponics1.jpg"
                alt="Vision 1"
                className="rounded-lg shadow-lg w-full h-60 sm:h-60 md:h-74 object-cover"
              />
              <LazyImage
                src="/hydroponics2.jpg"
                alt="Vision 2"
                className="rounded-lg shadow-lg w-full h-60 sm:h-60 md:h-74 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Initiatives Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#f5f9f5]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="flex flex-col items-center mb-8 sm:mb-12">
            <FaHandsHelping className="text-green-700 text-4xl sm:text-5xl mb-4" />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-3xl md:text-4xl font-montserrat font-weight: 600 text-[#0A3622] mb-4 text-center"
            >
              Key Initiatives
            </motion.h2>
            <span className="text-green-800 text-base sm:text-lg font-semibold font-montserrat font-weight: 600 mb-4">"Making a difference in our community"</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Community Outreach",
                description: "Engaging with local communities to promote sustainable farming practices",
                icon: <FaUsers className="text-3xl sm:text-4xl text-centre text-green-700 mb-4" />
              },
              {
                title: "Educational Programs",
                description: "Providing hands-on learning experiences in hydroponic farming",
                icon: <FaBookOpen className="text-3xl sm:text-4xl text-centre text-green-700 mb-4" />
              },
              {
                title: "Environmental Impact",
                description: "Reducing carbon footprint through sustainable agriculture",
                icon: <FaLeaf className="text-3xl sm:text-4xl text-centre text-green-700 mb-4" />
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 sm:p-8 rounded-xl shadow-lg text-center"
              >
                {item.icon}
                <h3 className="text-lg sm:text-xl font-montserrat font-weight: 600 text-[#0A3622] mb-2">{item.title}</h3>
                <p className="text-gray-800 font-montserrat font-weight: 600 text-sm sm:text-base">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Programs Grid Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#0A3622]" id="social-responsibility">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-montserrat font-semibold text-[#FFFFFF] mb-8 sm:mb-12 text-center">Our Social Programs</h2>
          {(() => {
            const [modalIdx, setModalIdx] = useState(null as null | number);
            const [modalImgIdx, setModalImgIdx] = useState(0);
            const programs = [
              // {
              //   title: 'Farmers Connect',
              //   images: ['/farmersconnect2.jpg', '/farmersconnect.jpg'],
              //   description: 'Empowering farmers with knowledge, technology, and support for sustainable hydroponic methods.',
              //   points: [
              //     'On field training sessions',
              //     'Low cost DIY training kits',
              //     'Consultation and support',
              //     'Post training follow ups',
              //   ],
              //   details: 'Our Farmers Connect program is a flagship initiative designed to bridge the gap between modern hydroponic technology and traditional farming communities. We conduct regular field training sessions, distribute affordable DIY hydroponic kits, and provide ongoing consultation to ensure farmers can sustainably increase their yields. The program has impacted over 200 farmers and connected 15+ villages, fostering a community of innovation and support.',
              //   icon: <FaHandshake className="text-5xl text-[#0A3622] mb-4" />,
              //   quote: '"Empowering local farmers"',
              //   accent: 'bg-gradient-to-b from-[#0A3622] to-[#e8f5e9]',
              //   subtitle: undefined,
              //   drivenBy: 'The Centre of Excellence Hydroponics Training & Research Facility, this initiative brings together students, staff, and local leaders to serve communities sustainably.',
              //   stats: undefined,
              //   statistics: [
              //     { value: '200+', label: 'Farmers Trained' },
              //     { value: '15+', label: 'Villages Connected' },
              //     { value: '20%', label: 'Yield Increase' },
              //     { value: '100+', label: 'DIY Kits Distributed' },
              //   ],
              // },
              // {
              //   title: 'Sustainable Farming Workshops',
              //   images: ['farmingworkshop.jpg', 'farmingworkshop2.jpg'],
              //   description: 'Bringing cutting-edge farming to rural communities through hands-on workshops.',
              //   points: [
              //     'Hydroponics, aeroponics, organic gardening',
              //     'Eco-friendly techniques for soil/water-stressed areas',
              //     'Growing food in small spaces',
              //   ],
              //   details: 'Our workshops are designed for both beginners and experienced growers. Participants learn about hydroponics, aeroponics, and organic gardening through live demonstrations and hands-on activities. We emphasize eco-friendly techniques suitable for water- and soil-stressed regions, empowering communities to grow more with less.',
              //   icon: <FaLeaf className="text-5xl text-[#0A3622] mb-4" />,
              //   quote: '"Learning by doing"',
              //   accent: 'bg-gradient-to-b from-[#0A3622] to-[#b2dfdb]',
              //   subtitle: undefined,
              //   drivenBy: 'Workshops are run in partnership with NGOs, schools, and local leaders.',
              //   stats: undefined,
              //   statistics: [
              //     { value: '30+', label: 'Workshops Held' },
              //     { value: '1000+', label: 'Participants' },
              //     { value: '15+', label: 'Partner Organizations' },
              //     { value: '50+', label: 'Demo Kits Used' },
              //   ],
              // },
              {
                title: 'Veggies Distribution Drive & Nutritional Outreach',
                images: ['/vegetation-drive.jpg', '/vegetation-drive-2.jpg','/veggies3.jpg'],
                description: 'Connecting hydroponic produce with communities facing food insecurity and malnutrition.',
                points: [
                  'Distribute fresh, chemical-free vegetables',
                  'Educate on nutrition',
                  'Promote food equity',
                ],
                details: 'Our veggies distribution drives ensure that fresh, chemical-free produce reaches those who need it most. We partner with local organizations to educate communities on nutrition and promote food equity, making a tangible impact on public health and well-being.',
                icon: <FaHeart className="text-5xl text-[#0A3622] mb-4" />,
                quote: '"Nourishing our community"',
                accent: 'bg-gradient-to-b from-[#0A3622] to-[#ffe082]',
                subtitle: undefined,
                drivenBy: 'The Centre of Excellence Hydroponics Training & Research Facility, this initiative brings together students, staff, and local leaders to serve communities sustainably.',
                stats: undefined,
                // statistics: [
                //   { value: '20+', label: 'packets Distributed' },
                //   { value: '20+', label: 'Families Benefited' },
                //   // { value: '', label: 'Distribution Drives' },
                //   { value: '15+', label: 'Volunteers' },
                // ],
              },
              {
                title: 'School Partnerships Program',
                images: ['/schoolpartnership.jpg', '/schoolpartnership2.jpg'],
                description: 'Collaborating with schools to make environmental education practical and empowering.',
                points: [
                  'Set up hydroponic gardens',
                  'Hands-on learning for students',
                  'Foster environmental awareness',
                ],
                details: 'Through our school partnerships, we set up hydroponic gardens and run interactive sessions that make environmental education engaging and practical. Students gain hands-on experience in sustainable agriculture, fostering a new generation of environmentally conscious leaders.',
                icon: <FaSchool className="text-5xl text-[#0A3622] mb-4" />,
                quote: '"Growing the next generation"',
                accent: 'bg-gradient-to-b from-[#0A3622] to-[#b3e5fc]',
                subtitle: undefined,
                drivenBy: 'We collaborate with schools, especially in underserved or rural areas, to make environmental education engaging, practical, and empowering.',
                stats: undefined,
                statistics: [
                  { value: '50+', label: 'Schools Partnered' },
                  { value: '1000+', label: 'Students Engaged' },
                  { value: '20+', label: 'Gardens Set Up' },
                  { value: '30+', label: 'Workshops Conducted' },
                ],
              },
            ];
            // Modal image navigation
            const handleOpenModal = (idx: number) => { setModalIdx(idx); setModalImgIdx(0); };
            const handlePrevImg = () => setModalImgIdx(i => (i - 1 + programs[modalIdx!].images.length) % programs[modalIdx!].images.length);
            const handleNextImg = () => setModalImgIdx(i => (i + 1) % programs[modalIdx!].images.length);
            return <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {programs.map((program, idx) => (
                  <div
                    key={program.title}
                    className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col items-start text-left transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                    style={{ overflow: 'hidden' }}
                  >
                    <LazyImage src={program.images[0]} alt={program.title} className="rounded-xl w-full h-40 sm:h-48 object-cover mb-4 sm:mb-6" />
                    <h3 className="text-xl sm:text-2xl font-montserrat font-semibold text-[#0A3622] mb-2">{program.title}</h3>
                    <p className="text-[#0A3622]/90 mb-4 font-montserrat text-sm sm:text-base">{program.description}</p>
                    <ul className="list-disc pl-5 space-y-1 text-[#0A3622] font-montserrat mb-4 text-sm sm:text-base">
                      {program.points.map((pt, i) => <li key={i}>{pt}</li>)}
                    </ul>
                    <button onClick={() => handleOpenModal(idx)} className="mt-auto px-4 sm:px-6 py-2 bg-[#0A3622] text-white rounded-md font-montserrat font-semibold hover:bg-[#07300f] transition-colors text-sm sm:text-base">Know More</button>
                  </div>
                ))}
              </div>
              {/* Modal */}
              {modalIdx !== null && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 animate-fadeIn" onClick={() => setModalIdx(null)}>
                  <div
                    className="relative bg-white rounded-2xl shadow-2xl flex flex-col items-stretch text-left animate-scaleIn w-[95vw] sm:w-[90vw] md:w-[85vw] lg:w-[80vw] max-w-[1200px] min-w-[280px] sm:min-w-[320px]"
                    style={{ maxHeight: '90vh' }}
                    onClick={e => e.stopPropagation()}
                  >
                    <button
                      className="fixed md:absolute top-4 right-4 text-2xl text-[#0A3622] hover:text-[#07300f] focus:outline-none z-20 bg-white/80 rounded-full p-2 shadow"
                      style={{ right: '1.5rem', top: '1.5rem' }}
                      onClick={() => setModalIdx(null)}
                      aria-label="Close"
                    >
                      &times;
                    </button>
                    <div className="flex-1 overflow-y-auto px-2 sm:px-4" style={{ maxHeight: '85vh' }}>
                      {/* Modal Header */}
                      <div className="flex flex-col items-center justify-center pt-6 sm:pt-8 pb-4 w-full">
                        {programs[modalIdx].icon}
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-montserrat font-semibold text-[#0A3622] mb-2 text-center">{programs[modalIdx].title}</h3>
                        <div className="text-xl sm:text-2xl font-semibold text-[#0A3622] mt-2 text-center">{programs[modalIdx].quote}</div>
                      </div>
                      <div className="flex flex-col md:flex-row w-full">
                        {/* Left: Main image and optional stat/image */}
                        <div className="flex-1 flex flex-col justify-center items-center p-4 sm:p-8 min-w-[280px] sm:min-w-[340px] max-w-[480px]">
                          <div className="relative w-full">
                            <LazyImage src={programs[modalIdx].images[modalImgIdx]} alt={programs[modalIdx].title} className="rounded-xl w-full h-48 sm:h-64 object-cover mb-4 sm:mb-6" />
                            {programs[modalIdx].images.length > 1 && (
                              <>
                                <button onClick={handlePrevImg} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1 shadow hover:bg-[#e8f5e9]" aria-label="Previous image">
                                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke="#0A3622" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                </button>
                                <button onClick={handleNextImg} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1 shadow hover:bg-[#e8f5e9]" aria-label="Next image">
                                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="#0A3622" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                </button>
                              </>
                            )}
                          </div>
                          {programs[modalIdx].images.length > 1 && (
                            <div className="flex gap-2 justify-center mb-4">
                              {programs[modalIdx].images.map((_, i) => (
                                <button key={i} onClick={() => setModalImgIdx(i)} aria-label={`Show image ${i+1}`}
                                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${modalImgIdx === i ? 'bg-[#0A3622]' : 'bg-[#e8f5e9] border border-[#0A3622]'}`}
                                />
                              ))}
                            </div>
                          )}
                        </div>
                        {/* Right: Content */}
                        <div className="flex-1 flex flex-col justify-center p-4 sm:p-8">
                          <p className="text-[#0A3622]/90 mb-4 sm:mb-6 font-montserrat text-sm sm:text-base md:text-lg">{programs[modalIdx].details}</p>
                          <div className="mb-4 sm:mb-6">
                            <h5 className="font-bold font-montserrat text-[#0A3622] mb-2 text-sm sm:text-base">WHAT WE DO :</h5>
                            <ul className="list-disc pl-6 space-y-2 text-[#0A3622] font-montserrat text-sm sm:text-base">
                              {programs[modalIdx].points.map((pt, i) => <li key={i}>{pt}</li>)}
                            </ul>
                          </div>
                          {programs[modalIdx].drivenBy && (
                            <div className="mb-2">
                              <h5 className="font-bold font-montserrat text-[#0A3622] mb-2 text-sm sm:text-base">DRIVEN BY :</h5>
                              <p className="text-[#0A3622]/90 font-montserrat text-sm sm:text-base">{programs[modalIdx].drivenBy}</p>
                            </div>
                          )}
                          {programs[modalIdx].statistics && (
                            <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-4">
                              {programs[modalIdx].statistics.map((stat, i) => (
                                <div key={i} className="bg-[#e8f5e9] rounded-lg p-3 sm:p-4 text-center">
                                  <div className="text-xl sm:text-2xl font-bold text-[#0A3622]">{stat.value}</div>
                                  <div className="text-[#0A3622] text-xs sm:text-sm">{stat.label}</div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>;
          })()}
        </div>
      </section>

      {/* Student Involvement Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="flex flex-col items-center mb-8 sm:mb-12">
            <FaGraduationCap className="text-green-700 text-4xl sm:text-5xl mb-4" />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-3xl md:text-4xl font-montserrat font-weight: 600 text-[#0A3622] mb-4 text-center"
            >
              Student Involvement: Learning with Purpose
            </motion.h2>
            <span className="text-green-800 text-base sm:text-lg font-semibold font-montserrat font-weight: 600 mb-4">"Empowering future leaders"</span>
          </div>
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              <LazyImage
                src="/system1.jpg"
                alt="Students 1"
                className="rounded-lg shadow-lg w-full h-48 sm:h-56 md:h-64 object-cover"
              />
              <LazyImage
                src="/system2.jpg"
                alt="Students 2"
                className="rounded-lg shadow-lg w-full h-48 sm:h-56 md:h-64 object-cover mt-8"
              />
            </div>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg font-montserrat font-weight: 600 text-gray-800 leading-relaxed text-left">
                We believe that when students take ownership of social and environmental challenges, they don't just grow plants, they grow purpose. Students are the heart of our mission. They lead, innovate, and grow—not just crops, but change.
              </p>
              <h4 className="font-semibold font-montserrat font-weight: 600 text-[#0A3622] text-left text-base sm:text-lg">WAYS STUDENTS GET INVOLVED:</h4>
              <ul className="list-disc pl-6 text-gray-800 font-montserrat font-weight: 600 space-y-2 text-left text-sm sm:text-base">
                <li><b>Project Leads & Coordinators:</b> Head training, drives, and school programs</li>
                <li><b>Outreach & Education Teams:</b> Lead educational sessions and activities</li>
                <li><b>Research & Innovation Groups:</b> Innovate new farming techniques</li>
                <li><b>Garden Managers & Growers:</b> Run our hydroponic systems</li>
                <li><b>Content & Media Creators:</b> Document, design, and share our story</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics Section */}
{/*       <section className="py-12 sm:py-16 md:py-20 bg-[#f5f9f5]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="flex flex-col items-center mb-8 sm:mb-12">
            <FaChartLine className="text-green-700 text-4xl sm:text-5xl mb-4" />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-3xl md:text-4xl font-montserrat font-weight: 600 text-[#0A3622] mb-4 text-center"
            >
              Why It Matters
            </motion.h2>
            <span className="text-green-800 text-base sm:text-lg font-semibold font-montserrat font-weight: 600 mb-4">"Measuring our impact"</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
            {[
              { metric: "1000+", label: "Students Engaged" },
              { metric: "50+", label: "Schools Partnered" },
              { metric: "200+", label: "Farmers Trained" },
              { metric: "5000+", label: "Community Members Reached" }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-4 sm:p-8 rounded-xl shadow-lg text-center"
              >
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-montserrat font-weight: 600 text-[#0A3622] mb-2">{item.metric}</h3>
                <p className="text-gray-800 font-montserrat font-weight: 600 text-sm sm:text-base">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default SocialResponsibility; 
