import { type FC, useState } from 'react'
import { motion } from 'framer-motion'

export const Contact: FC = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null)

  const faqItems = [
    {
      question: "What is hydroponics?",
      answer: "Hydroponic gardening is the process of growing plants and vegetables via a mineral-rich water solution, whereby the plants continuously draw on nutrients dissolved in water."
    },
    {
      question: "Is hydroponics a newer technology?",
      answer: "While modern hydroponics has evolved significantly, the basic concept dates back to ancient civilizations. The Hanging Gardens of Babylon, one of the Seven Wonders of the Ancient World, is believed to have used hydroponic principles."
    },
    {
      question: "What are the applications of hydroponics?",
      answer: "Hydroponics has wide-ranging applications including urban farming, commercial agriculture, research facilities, educational purposes, and even space farming experiments by NASA."
    },
    {
      question: "Can hydroponics produce all types of plants?",
      answer: "While many plants can be grown hydroponically, some are more suitable than others. Leafy greens, herbs, tomatoes, and strawberries are particularly well-suited for hydroponic systems."
    },
    {
      question: "Who can benefit from training at the Centre of Excellence in Hydroponics?",
      answer: "Our training programs are designed for students, farmers, entrepreneurs, researchers, and anyone interested in sustainable agriculture and modern farming techniques."
    },
    {
      question: "What type of plants are grown in the Centre's hydroponic systems?",
      answer: "The Centre grows a variety of plants including leafy greens, herbs, vegetables, and some fruits, demonstrating different hydroponic techniques and systems."
    },
    {
      question: "How does hydroponics contribute to sustainability?",
      answer: "Hydroponics uses up to 90% less water than traditional farming, requires less space, eliminates the need for soil, reduces transportation costs, and can provide fresh produce year-round."
    },
    {
      question: "What are the career opportunities after completing the training?",
      answer: "Graduates can pursue careers in commercial hydroponic farming, consulting, research, teaching, or start their own hydroponic business ventures."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center">
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
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-montserrat font-weight: 600 mb-4 text-white">Getting in touch with COE HYDROPONICS:</h1>
          <p className="text-lg md:text-xl font-montserrat font-weight: 600 max-w-2xl mx-auto text-white/90">
            Have questions about our programs, training, or research? Use the form below or reach out directly.
          </p>
        </div>
      </section>
      

      {/* Contact Form Section */}
      <section className="py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Contact Info - Left Side */}
          <div className="bg-[#e8f5e9] p-12 lg:p-24 space-y-8 text-left">
            <h2 className="text-4xl font-playfair font-montserrat font-weight: 600 text-[#07300f]">Get in Touch</h2>
            <div className="space-y-4 text-gray-700 font-montserrat font-weight: 600">
              <p className="text-lg">Centre of Excellence</p>
              <p>Hydroponic Project</p>
              <p>NSUT, Dwarka</p>
              <p>123-456-7890</p>
              <p>Coe.hydroponics@nsut.ac.in</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 bg-black rounded-full flex items-center justify-center hover:bg-black/80 transition-colors">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 bg-black rounded-full flex items-center justify-center hover:bg-black/80 transition-colors">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 bg-black rounded-full flex items-center justify-center hover:bg-black/80 transition-colors">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 bg-black rounded-full flex items-center justify-center hover:bg-black/80 transition-colors">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div className="bg-[#07300f] p-12 lg:p-24">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-white mb-2 text-left font-montserrat font-weight: 600">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-black/60 border border-white/10 rounded-md text-white placeholder-white/50 focus:outline-none focus:border-white/30 font-montserrat font-weight: 600" 
                  />
                </div>
                <div>
                  <label className="block text-sm text-white mb-2 text-left font-montserrat font-weight: 600">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-black/60 border border-white/10 rounded-md text-white placeholder-white/50 focus:outline-none focus:border-white/30 font-montserrat font-weight: 600" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-white mb-2 text-left font-montserrat font-weight: 600">Email *</label>
                <input 
                  type="email" 
                  required 
                  className="w-full px-4 py-3 bg-black/60 border border-white/10 rounded-md text-white placeholder-white/50 focus:outline-none focus:border-white/30 font-montserrat font-weight: 600" 
                />
              </div>
              <div>
                <label className="block text-sm text-white mb-2 text-left font-montserrat font-weight: 600">Message</label>
                <textarea 
                  rows={4} 
                  className="w-full px-4 py-3 bg-black/60 border border-white/10 rounded-md text-white placeholder-white/50 focus:outline-none focus:border-white/30 font-montserrat font-weight: 600" 
                />
              </div>
              <div>
                <label className="block text-sm text-white mb-2 text-left font-montserrat font-weight: 600">Regarding: *</label>
                <select 
                  className="w-full px-4 py-3 bg-black/60 border border-white/10 rounded-md text-white focus:outline-none focus:border-white/30 font-montserrat font-weight: 600"
                >
                  <option value="" className="bg-[#07300f]">Choose an option</option>
                  <option value="collaboration" className="bg-[#07300f]">Collaboration</option>
                  <option value="training" className="bg-[#07300f]">Training Programs</option>
                  <option value="internship" className="bg-[#07300f]">Internship</option>
                  <option value="events" className="bg-[#07300f]">Events & Workshops</option>
                </select>
              </div>
              <button 
                type="submit"
                className="inline-block px-8 py-3 bg-[#07370f] text-white rounded-md font-weight: 600 hover:bg-[#0A3622] transition-colors duration-300"
              >
                Send
              </button>
            </form>
          </div>
          
          
        </div>
      </section>
          {/* FAQ Section */}
          <section className="bg-[#07300f] py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-montserrat font-weight: 600 text-white mb-4 text-center"
          >
            Growing Clarity:
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl font-montserrat font-weight: 600 text-gray-200 mb-8 text-center"
          >
            Your Questions, Our Answers
          </motion.p>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center text-white hover:bg-white/5 transition-colors font-montserrat font-weight: 600"
                >
                  <span className="font-medium font-montserrat font-weight: 600">{item.question}</span>
                  <svg
                    className={`w-5 h-5 transform transition-transform ${
                      openQuestion === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openQuestion === index && (
                  <div className="px-6 py-4 text-gray-200 font-montserrat font-weight: 600">
                    {item.answer}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
