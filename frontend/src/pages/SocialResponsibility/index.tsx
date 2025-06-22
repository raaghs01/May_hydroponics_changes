import { motion } from 'framer-motion';
import {  FaUsers, FaLeaf,  FaHandsHelping, FaBookOpen, FaLightbulb } from 'react-icons/fa';
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
                icon: <FaUsers className="text-3xl sm:text-4xl text-green-700 mb-4 mx-auto block" />
              },
              {
                title: "Educational Programs",
                description: "Providing hands-on learning experiences in hydroponic farming",
                icon: <FaBookOpen className="text-3xl sm:text-4xl text-green-700 mb-4 mx-auto block" />
              },
              {
                title: "Environmental Impact",
                description: "Reducing carbon footprint through sustainable agriculture",
                icon: <FaLeaf className="text-3xl sm:text-4xl text-green-700 mb-4 mx-auto block" />
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 sm:p-8 rounded-xl shadow-lg text-center flex flex-col items-center"
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
            const programs = [
              {
                name: 'Veggies Distribution and Awareness Drive',
                dateTime: '11 March 2025',
                location: 'COE-Hydroponics Facility, NSUT Campus',
                briefDescription: 'On 11 March 2025, the Centre of Excellence in Hydroponics Training and Research Facility (COE HHTRF) at NSUT organized a community outreach initiative to distribute fresh, chemical-free produce and raise awareness about nutrition and food equity. The event engaged students, faculty, and local residents to promote clean eating and the benefits of hydroponic farming.',
                // targetAudience: 'Target audience to be provided',
                keyObjectives: [
                  'Promote awareness about hydroponic farming and its benefits.',
                  'Distribute clean, chemical free produce to promote food equity.'
                ],
                agenda: [
                  'Briefing session and lab tour',
                  'Distribution of hydroponically grown vegetables',
                  'Talk on food security, clean eating, and urban farming'
                ],
                // notableSpeakers: [
                //   { name: 'Speaker Name', topic: 'Topic/Presentation' }
                // ],
                keyMoments: [
                  'Excitement among community members receiving fresh, pesticide free produce',
                  // 'Key moment 2 (to be provided)'
                ],
                achievements: [
                  'Distribution of dozens of fresh vegetable kits to local community families',
                  'First time exposure of many participants to hydroponic systems and clean farming techniques'
                ],
                funFacts: [
                  'The community was fascinated to see how water and LED lights could grow leafy greens so efficiently'
                ],
                totalAttendance: '70+',
                demographics: 'Students, Faculty, Community members',
                feedback: 'Community members expressed gratitude for the fresh vegetables and interest in learning more about home-scale hydroponics',
                successMetrics: [
                  'Students Engaged: 15',
                  'Community members participated: 50+',
                  'Vegetable kits distributed: 60+'
                ],
                // sponsorshipImpact: 'Sponsorship impact to be provided',
                // financialSummary: 'Financial summary to be provided',
                lessonsLearned: [
                  'Community engagements events benefit from pairing education with tangible takeaways like veggie kits',
                  // 'Lesson 2 (to be provided)'
                ],
                recommendations: [
                  'Simple DIY hydroponic kits for students can be created to try at home',
                  'Potential partnerships with NGOs can be explored for broader urban food awareness campaigns'
                ],
                visuals: [
                  { type: 'photo', src: '/vegetation-drive.jpg', alt: 'Event photo 1' },
                  { type: 'photo', src: '/vegetation-drive-2.jpg', alt: 'Event photo 2' },
                  { type: 'photo', src: '/veggies3.jpg', alt: 'Event photo 3' }
                ],
                infographics: [
                  { src: '', alt: 'Infographic (to be provided)' }
                ],
                title: 'Veggies Distribution Drive & Nutritional Outreach',
                images: ['/vegetation-drive.jpg', '/vegetation-drive-2.jpg','/veggies3.jpg'],
                description: 'Connecting hydroponic produce with communities facing food insecurity and malnutrition.',
                points: [
                  'Distribute fresh, chemical-free vegetables',
                  'Educate on nutrition',
                  'Promote food equity',
                ],
                details: 'Our veggies distribution drives ensure that fresh, chemical-free produce reaches those who need it most. We partner with local organizations to educate communities on nutrition and promote food equity, making a tangible impact on public health and well-being.',
                icon: <FaLightbulb className="text-5xl text-[#0A3622] mb-4" />, 
                quote: '"Nourishing our community"',
                accent: 'bg-gradient-to-b from-[#0A3622] to-[#ffe082]',
                subtitle: undefined,
                drivenBy: 'The Centre of Excellence Hydroponics Training & Research Facility, this initiative brings together students, staff, and local leaders to serve communities sustainably.',
                stats: undefined,
                statistics: [
                  { value: '20+', label: 'packets Distributed' },
                  { value: '20+', label: 'Families Benefited' },
                  { value: '15+', label: 'Volunteers' },
                ],
              },
              {
                name: 'School Partnerships Program',
                dateTime: '6 May 2025',
                location: 'Co-ed Sarvodaya Vidyalaya, Sector 13, Dwarka ',
                briefDescription: 'As part of its outreach and education mission, COE HHTRF conducted a one day hydroponics based demonstration and awareness session at a government school in Dwarka on 6 May 2025 . The session was designed to introduce students to modern agricultural techniques through an experimental learning format, promoting environmental education and sustainable awareness.',
                // targetAudience: 'Target audience to be provided',
                keyObjectives: [
                  'Educate school students about sustainable and water efficient agriculture',
                  'Encourage youth participation and awareness in environmental responsibilty'
                ],
                agenda: [
                  'Introduction to hydroponics and sustainability ',
                  'Interactive Q & A session with students'
                ],
                notableSpeakers: [
                  { name: 'Dr. Akhilesh Dubey' }
                ],
                keyMoments: [
                  'Enthusiastic student participation during hydroponics demonstration',
                  'Curious questions from young learners '
                ],
                achievements: [
                  'Successful engagement of 100+ students through experiential learning',
                  'Positive collaboration between academia and local stakeholders'
                ],
                funFacts: [
                  'Many students were surprised to learn that plants can grow without soil'
                ],
                totalAttendance: '100+',
                demographics: 'Students, Faculty ',
                feedback: 'Students found the session fun and insightful particularly live plant setup ',
                successMetrics: [
                  'Schools Reached: 1 government school',
                  'Students engaged: 100+'
                ],
                // sponsorshipImpact: 'Sponsorship impact to be provided',
                // financialSummary: 'Financial summary to be provided',
                lessonsLearned: [
                  'Early coordination with schools help tailor sessions to students at early age',
                  'Live demos significantly boost understanding and retention compared to passive presentations'
                ],
                recommendations: [
                  'Consider expanding the outreach to more schools and rural institutions with limited exposure to agro-tech',
                  'Establish a feedback loop to assess long term impact and curiosity retention'
                ],
                visuals: [
                  { type: 'photo', src: '/schoolpartnership.jpg', alt: 'Event photo 1' },
                  { type: 'photo', src: '/schoolpartnership2.jpg', alt: 'Event photo 2' }
                ],
                infographics: [
                  { src: '', alt: 'Infographic (to be provided)' }
                ],
                title: 'School Partnerships Program',
                images: ['/schoolpartnership.jpg', '/schoolpartnership2.jpg'],
                description: 'Collaborating with schools to make environmental education practical and empowering.',
                points: [
                  'Set up hydroponic gardens',
                  'Hands-on learning for students',
                  'Foster environmental awareness',
                ],
                details: 'Through our school partnerships, we set up hydroponic gardens and run interactive sessions that make environmental education engaging and practical. Students gain hands-on experience in sustainable agriculture, fostering a new generation of environmentally conscious leaders.',
                icon: <FaLightbulb className="text-5xl text-[#0A3622] mb-4" />, 
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
            const handleOpenModal = (idx: number) => { setModalIdx(idx); };
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
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4" onClick={() => setModalIdx(null)}>
                  <div
                    className="w-full max-w-4xl rounded-lg shadow-2xl bg-white p-6 sm:p-8 md:p-10 font-montserrat overflow-y-auto text-left relative"
                    style={{ maxHeight: '90vh' }}
                    onClick={e => e.stopPropagation()}
                  >
                    <button
                      className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 focus:outline-none"
                      onClick={() => setModalIdx(null)}
                      aria-label="Close"
                    >
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                    <h4 className="text-3xl sm:text-4xl font-bold text-[#0A3622] mb-6 border-b-2 border-gray-200 pb-4 text-center">Post-Event Report</h4>
                    <div className="space-y-8">
                      {/* 1. Event Overview */}
                      <div>
                        <h5 className="text-2xl font-semibold text-[#0A3622] mb-4 border-b pb-2">Event Overview</h5>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                          <div><span className="font-semibold text-gray-600">Name:</span> <p className="text-gray-900">{programs[modalIdx].name}</p></div>
                          <div><span className="font-semibold text-gray-600">Date & Time:</span> <p className="text-gray-900">{programs[modalIdx].dateTime}</p></div>
                          <div className="col-span-2"><span className="font-semibold text-gray-600">Location:</span> <p className="text-gray-900">{programs[modalIdx].location}</p></div>
                          <div className="col-span-2"><span className="font-semibold text-gray-600">Brief Description:</span> <p className="text-gray-800 leading-relaxed">{programs[modalIdx].briefDescription}</p></div>
                          <div className="col-span-2"><span className="font-semibold text-gray-600">Key Objectives:</span>
                            <ul className="list-disc pl-6 mt-2 text-gray-800 space-y-1">
                              {programs[modalIdx].keyObjectives.map((obj, i) => <li key={i}>{obj}</li>)}
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      {/* 2. Event Highlights */}
                      <div>
                        <h5 className="text-2xl font-semibold text-[#0A3622] mb-4 border-b pb-2">Event Highlights</h5>
                        <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                          <div>
                            <h6 className="font-semibold text-gray-600 mb-2">Agenda:</h6>
                            <ul className="list-disc pl-5 text-gray-800 space-y-1">
                              {programs[modalIdx].agenda.map((item, i) => <li key={i}>{item}</li>)}
                            </ul>
                          </div>
                          {programs[modalIdx].notableSpeakers && (
                            <div>
                              <h6 className="font-semibold text-gray-600 mb-2">Notable Speakers:</h6>
                              <ul className="list-disc pl-5 text-gray-800 space-y-1">
                                {programs[modalIdx].notableSpeakers?.map((sp, i) => <li key={i}>{sp.name}</li>)}
                              </ul>
                            </div>
                          )}
                          <div>
                            <h6 className="font-semibold text-gray-600 mb-2">Key Moments:</h6>
                            <ul className="list-disc pl-5 text-gray-800 space-y-1">
                              {programs[modalIdx].keyMoments.map((m, i) => <li key={i}>{m}</li>)}
                            </ul>
                          </div>
                          <div>
                            <h6 className="font-semibold text-gray-600 mb-2">Achievements:</h6>
                            <ul className="list-disc pl-5 text-gray-800 space-y-1">
                              {programs[modalIdx].achievements.map((a, i) => <li key={i}>{a}</li>)}
                            </ul>
                          </div>
                          <div className="col-span-2">
                            <h6 className="font-semibold text-gray-600 mb-2">Fun Facts:</h6>
                            <ul className="list-disc pl-5 text-gray-800 space-y-1">
                              {programs[modalIdx].funFacts.map((f, i) => <li key={i}>{f}</li>)}
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* 3. Attendee Information */}
                      <div>
                        <h5 className="text-2xl font-semibold text-[#0A3622] mb-4 border-b pb-2">Attendee Information</h5>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                          <div><span className="font-semibold text-gray-600">Total Attendance:</span> <p className="text-gray-900">{programs[modalIdx].totalAttendance}</p></div>
                          <div><span className="font-semibold text-gray-600">Demographics:</span> <p className="text-gray-900">{programs[modalIdx].demographics}</p></div>
                          <div className="col-span-2"><span className="font-semibold text-gray-600">Feedback:</span> <p className="text-gray-800 leading-relaxed">{programs[modalIdx].feedback}</p></div>
                        </div>
                      </div>

                      {/* 4. Outcomes and Impact */}
                      <div>
                        <h5 className="text-2xl font-semibold text-[#0A3622] mb-4 border-b pb-2">Outcomes and Impact</h5>
                        <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                            <div>
                                <h6 className="font-semibold text-gray-600 mb-2">Success Metrics:</h6>
                                <ul className="list-disc pl-5 text-gray-800 space-y-1">
                                {programs[modalIdx].successMetrics.map((m, i) => <li key={i}>{m}</li>)}
                                </ul>
                            </div>
                            <div>
                                <h6 className="font-semibold text-gray-600 mb-2">Lessons Learned:</h6>
                                <ul className="list-disc pl-5 text-gray-800 space-y-1">
                                {programs[modalIdx].lessonsLearned.map((l, i) => <li key={i}>{l}</li>)}
                                </ul>
                            </div>
                            <div className="col-span-2">
                                <h6 className="font-semibold text-gray-600 mb-2">Recommendations:</h6>
                                <ul className="list-disc pl-5 text-gray-800 space-y-1">
                                {programs[modalIdx].recommendations.map((r, i) => <li key={i}>{r}</li>)}
                                </ul>
                            </div>
                        </div>
                      </div>
                      {/* 5. Visuals */}
                      <div>
                        <h5 className="text-2xl font-semibold text-[#0A3622] mb-4 border-b pb-2">Visuals</h5>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                          {programs[modalIdx].visuals.map((v, i) => (
                            <img key={i} src={v.src} alt={v.alt} className="rounded-lg shadow-md w-full h-32 object-cover border border-gray-200" />
                          ))}
                           {programs[modalIdx].infographics.map((info, i) => info.src && (
                            <img key={i} src={info.src} alt={info.alt} className="rounded-lg shadow-md w-full h-32 object-cover border border-gray-200" />
                          ))}
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
            <FaLightbulb className="text-green-700 text-4xl sm:text-5xl mb-4" />
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
