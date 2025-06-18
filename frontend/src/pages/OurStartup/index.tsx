import { motion } from 'framer-motion';
import LazyImage from '../../components/LazyImage';

const OurStartup = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e8f5e9] to-white">
      {/* Hero Section */}
      <div className="relative min-h-[60vh] flex items-center justify-center">
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
            Urverdure
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl font-montserrat font-weight: 600 text-white/90 text-center max-w-3xl mx-auto drop-shadow"
          >
            Revolutionizing Agriculture with Soil-less Cultivation
          </motion.p>
        </div>
      </div>

      {/* About Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-montserrat font-semibold text-[#0A3622] mb-8 text-center"
          >
            About Us
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6 text-lg text-gray-800 font-montserrat">
              <p>Urverdure is an endeavor to bring joy and satisfaction of producing one's own food without sacrificing their time, effort, and money. We are a team of biotechnologists, botanists, and control & automation enthusiasts moving forward with an aim to revolutionize the field of agriculture through soil-less cultivation techniques. Hydroponics, which is till date seen as a hobby, can actually pave the way for a sustainable planet with no food insecurity. We aspire to motivate each individual to indulge in a healthier lifestyle and contribute towards building a sustainable and greener future for generations to come.</p>
              <p>Being a group of researchers, our design will be driven by extensive in-house research and customization will result in an economically feasible one-step solution for soil-less farming. The hydroponic setups designed by our specialists will deliver soothing vibes of greenery, the bliss of gardening, satisfaction to health-conscious people, and aesthetic appearance to the whole area. The blend of creativity and experimentation can generate a unique capability to holistically address a lot of world problems such as food insecurity, climate change, mental illness, air pollution, diseases due to bad quality of food available, employment, women empowerment, and environment-related problems, nutritious food unavailability.</p>
            </div>
            <LazyImage src="/startup-about.jpg" alt="Urverdure Team" className="rounded-xl w-full h-80 object-cover shadow-lg" />
          </div>
        </div>
      </section>

      {/* Why Urverdure Section */}
      <section className="py-20 bg-[#e8f5e9]">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-montserrat font-semibold text-[#0A3622] mb-8 text-center"
          >
            Why Urverdure?
          </motion.h2>
          <ul className="grid md:grid-cols-2 gap-6 text-lg text-[#0A3622] font-montserrat list-disc pl-6">
            <li>Optimized hydroponic system through research</li>
            <li>State-of-the-art and cutting-edge designs</li>
            <li>Install and forget-about-it systems</li>
            <li>Customized according to needs</li>
            <li>Free plants/seeds/pH meter/EC meter</li>
            <li>Setup that fits anywhere and everywhere</li>
            <li>Expert Visits</li>
            <li>Creates employment</li>
            <li>Free online resources and training course</li>
          </ul>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-montserrat font-semibold text-[#0A3622] mb-12 text-center"
          >
            Product Categories
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-10">
            {/* Plants Setups */}
            <div className="bg-[#e8f5e9] rounded-xl shadow-lg p-8 flex flex-col items-center text-center">
              <LazyImage src="/plants-setup.jpg" alt="Plants Setups" className="rounded-lg w-full h-40 object-cover mb-4" />
              <h3 className="text-xl font-montserrat font-semibold text-[#0A3622] mb-2">Plants Setups</h3>
              <p className="text-[#0A3622]/90 mb-2 font-montserrat">Being in green environments boosts various aspects of thinking, including attention, memory, and creativity, in people both with and without depression. Use our budget-friendly hydroponic setups that are developed to provide you with the benefits of greenery. These are designed keeping in mind the restrictions a city dweller faces in terms of space, time, and resources so as to keep them more economically friendly. Our setups are suitable for almost all types of plants. Keep it indoors or outdoors, it's completely your choice.</p>
            </div>
            {/* Components */}
            <div className="bg-[#e8f5e9] rounded-xl shadow-lg p-8 flex flex-col items-center text-center">
              <LazyImage src="/components.jpg" alt="Components" className="rounded-lg w-full h-40 object-cover mb-4" />
              <h3 className="text-xl font-montserrat font-semibold text-[#0A3622] mb-2">Components</h3>
              <p className="text-[#0A3622]/90 mb-2 font-montserrat">Buy our hydroponics parts and accessories to provide complete nutrition, support, and proper care to your plants. Provide strength to your hydroponics setup by using our prime-quality NFT channels, net pots, water reservoirs, etc. Prepare an optimum rooting environment using Grow media like cocopeat, clay balls, etc. Equip your setup with our lighting options to increase the efficiency for optimal growth, ensuring a thriving and healthy crop.</p>
            </div>
            {/* Seeds/Plants */}
            <div className="bg-[#e8f5e9] rounded-xl shadow-lg p-8 flex flex-col items-center text-center">
              <LazyImage src="/seeds.jpg" alt="Seeds/Plants" className="rounded-lg w-full h-40 object-cover mb-4" />
              <h3 className="text-xl font-montserrat font-semibold text-[#0A3622] mb-2">Seeds/Plants</h3>
              <p className="text-[#0A3622]/90 mb-2 font-montserrat">Farming is not just a job, it's a lifestyle. Indulge in farming and give life to your home garden by buying our top-notch seeds/plants. Wanna decorate your balcony/terrace with flowers or wanna produce food for your own consumption? Explore the wide range of seeds available in our inventory and take a step towards a healthier and happier lifestyle.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#f5f9f5]">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-montserrat font-semibold text-[#0A3622] mb-8 text-center"
          >
            FAQs
          </motion.h2>
          <div className="space-y-8 text-lg text-[#0A3622] font-montserrat">
            <div>
              <b>What is hydroponics?</b>
              <p>Hydroponic gardening is the process of growing plants and vegetables via a mineral-rich water solution, whereby the plants continuously draw on nutrients dissolved in water.</p>
            </div>
            <div>
              <b>Is hydroponics a newer technology?</b>
              <p>No, Hydroponic as a technology has been dated back to its applications in the ancient Hanging Gardens of Babylon, and the floating gardens of the Aztecs in Mexico and China.</p>
            </div>
            <div>
              <b>What are the applications of hydroponics?</b>
              <p>Hydroponics is proven to be advantageous in many areas. Be it for urban residents with time, space, and money constraints to fulfill their gardening enthusiasm, for offices/ workplaces to increase productivity, or for hospitals to provide nutritional diets and reduce emotional distress.</p>
            </div>
            <div>
              <b>Can hydroponics produce all types of plants?</b>
              <p>Yes, any plant can be grown hydroponically.</p>
            </div>
            <div>
              <b>Why Urverdure?</b>
              <p>The uniqueness of the Urverdure hydroponic systems lies in the back-end research and development aspect. The optimization of the systems using stoichiometry and accurate compilation of data on a wide range of crops provides a distinction from other hydroponic companies that primarily work on the hit and trial method. Our systems are automated and IoT based can be controlled through a smartphone app from anywhere.</p>
            </div>
            <div>
              <b>What is our value proposition?</b>
              <ul className="list-disc pl-6">
                <li>Profitability – improved by 88% (in terms of yield)</li>
                <li>Efficiency – improved by 90% (in terms of water requirement)</li>
                <li>Monetary Benefits – improved by 14%</li>
                <li>Mental benefits – Tension/Anxiety – 37% reduction, Depression/Dejection – 58% reduction, Anger/Hostility – 44% reduction, Fatigue – 38% reduction</li>
                <li>Social Benefits – improved by 90% (health, well-being, learning of education and demonstration projects, fast return on investment)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Product Description Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-montserrat font-semibold text-[#0A3622] mb-8 text-center"
          >
            Product Description
          </motion.h2>
          <div className="space-y-6 text-lg text-gray-800 font-montserrat">
            <p>The extensive research performed by Urverdure resulted in optimized nutritional compositions that provide complete nutrition for adequate growth and quality of plants. Various advantages include:</p>
            <ul className="list-disc pl-6">
              <li>Delivers a perfect balance of NPK, macro, and micronutrients.</li>
              <li>Can be used for growing a wide variety of plants ranging from fruits to leafy vegetables and climbers.</li>
              <li>These are not just applicable to soil-less cultivation (hydroponics, aeroponics) but their usage in soil-based gardening has also shown excellent results.</li>
              <li>Behaves as a fertilizer and provides disease resistance capability to the plants.</li>
              <li>Perfect for home growers as it is easy to use.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Measurements Section */}
      <section className="py-20 bg-[#e8f5e9]">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-montserrat font-semibold text-[#0A3622] mb-8 text-center"
          >
            Measurements
          </motion.h2>
          <div className="space-y-4 text-lg text-gray-800 font-montserrat">
            <p>The required amount of nutrients is to be chosen based on the plant type. Approximate weighing can be done by estimating that 1 teaspoon equals 6 grams.</p>
            <ul className="list-disc pl-6">
              <li>Leafy vegetables: 16g (A), 8g (B), 16g (C)</li>
              <li>Fruits and vegetables: 18g (A), 9g (B), 18g (C)</li>
              <li>Climbers and gourd family: 20g (A), 10g (B), 20g (C)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Instructions Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-montserrat font-semibold text-[#0A3622] mb-8 text-center"
          >
            Instructions
          </motion.h2>
          <div className="space-y-4 text-lg text-gray-800 font-montserrat">
            <ul className="list-decimal pl-6">
              <li>The set has three separate media bottles (A, B, and C) which are to be mixed according to the specific instructions.</li>
              <li>Take two containers (container 1 (10L) and container 2 (2L)) and fill them with 4L and 2L of water respectively.</li>
              <li>Add the required amount of nutrient A in container 1, mix well and pour it into container 2.</li>
              <li>Again add 2L water in container 2 and add the required amount of nutrient B, mix well and pour into container 1.</li>
              <li>Repeat the procedure for nutrient C.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Uniqueness Section */}
      <section className="py-20 bg-[#e8f5e9]">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-montserrat font-semibold text-[#0A3622] mb-8 text-center"
          >
            Uniqueness & Distinctive Features
          </motion.h2>
          <ul className="list-disc pl-6 text-lg text-[#0A3622] font-montserrat space-y-2">
            <li>Optimized hydroponic system</li>
            <li>Innovative and Hassle-free designs</li>
            <li>Customized according to each customer's requirement</li>
            <li>Provides an aesthetic look</li>
            <li>The range of products we offer is developed keeping in mind the restrictions a city dweller faces in terms of space, time, and resources.</li>
          </ul>
          <div className="mt-8 text-lg text-gray-800 font-montserrat">
            <p>The uniqueness of the Urverdure hydroponic systems lies in the back-end research and development aspect. The optimization of the systems using stoichiometry and accurate compilation of data on a wide range of crops provides a distinction from other hydroponic companies that primarily work on the hit and trial method. Our systems are automated and IoT based can be controlled through a smartphone app from anywhere. The state-of-the-art and cutting-edge designs of the systems can fit in any space and provide an aesthetic look to the whole area. The blend of creativity and experimentation can generate a unique ability to holistically address a lot of problems such as food insecurity, climate change, mental illness, air pollution, diseases due to bad quality of food available, employment, women empowerment, and environment-related problems, nutritional food unavailability. The best quality of material used and technical assistance at every step will be some other benefits provided by us.</p>
          </div>
        </div>
      </section>

      {/* Quantified Value Proposition Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-montserrat font-semibold text-[#0A3622] mb-8 text-center"
          >
            Quantified Value Proposition
          </motion.h2>
          <div className="space-y-4 text-lg text-gray-800 font-montserrat">
            <ul className="list-disc pl-6">
              <li>Efficiency: Around 90% (in terms of water requirements)</li>
              <li>20-25% (in terms of higher yield)</li>
              <li>Around 90% less land</li>
              <li>30-50% faster (growth rate)</li>
            </ul>
            <ul className="list-disc pl-6">
              <li>Mental benefits: Tension/Anxiety – 37% reduction, Depression/Dejection – 58% reduction, Anger/Hostility – 44% reduction, Fatigue – 38% reduction</li>
            </ul>
            <p>Urverdure assists in bringing back greenery in the monotonous life of a city dweller by constructing and installing the best possible hydroponic system. Setups are designed by keeping in mind the restrictions of an urban dweller in terms of space or resources. The world is quickly losing workable soil. Soilless growing techniques including hydroponics are the need of the hour. Hydroponics minimizes space requirements, as well as nutrient-laced water delivered to the roots, directly avoiding the need for roots to spread out to search for nutrients and moisture. Plants taking nutrients from the soil is a slow process but with hydroponics, nutrients are more easily available for the plant to absorb which ultimately increases the yield. In a temperature-controlled facility and with artificial lights, plants can be grown year-round, regardless of the weather outside. Food that ripens naturally, on the plant, typically has more nutrients and better flavor too. This technique offers a lighter load on labor and local production cuts down transportation and other costs which makes it more economical.</p>
            <p>Urverdure aims to bring a hydroponic system where greens are grown organically without soil, with nutrients and 90% less water, pesticide-free, and 40% more nutritious than traditional farming closer to urban people. The idea is to help people use hassle-free vegetable growing techniques in their areas where time, space and resources are limited. Urban farming is not just limited to homes. Studies have shown that greenery around office spaces boosts creativity, increases productivity improves the sleep and mental health of employees. Growing medicinal plants within the premises of hospitals helps in improving a patient's physical as well as psychological health. Environment-based education increases critical thinking skills in school students and creates an opportunity for children to learn about nutrition and supports healthy eating choices. Our systems can help chefs to try fresh microgreens in their cuisines and provide the highest quality of food to their customers.</p>
          </div>
        </div>
      </section>

      {/* Internship Flyer Section */}
      <section className="py-20 bg-[#e8f5e9]">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-montserrat font-semibold text-[#0A3622] mb-8 text-center"
          >
            Internship Opportunities
          </motion.h2>
          <div className="space-y-6 text-lg text-gray-800 font-montserrat">
            <p>Are you a passionate individual seeking valuable hands-on experience in your chosen field? Do you want to expand your skill set and gain practical knowledge while working alongside industry professionals? We have an exciting opportunity for you! Urverdure is offering an unpaid internship position in Graphic designing, Content writing, and Market research analysis for motivated individuals who are eager to learn and grow. This internship will provide you with the chance to develop essential skills, build your professional network, and enhance your resume.</p>
            <b>About Urverdure:</b>
            <p>Urverdure is an endeavor to bring joy and satisfaction of producing one's own food without sacrificing their time, effort, and money. We are a team of biotechnologists, botanists, and control & automation enthusiasts moving forward with an aim to revolutionize the field of agriculture through soil-less cultivation techniques. Hydroponics, which is till date seen as a hobby, can actually pave the way for a sustainable planet with no food insecurity. We aspire to motivate each individual to indulge in a healthier lifestyle and contribute towards building a sustainable and greener future for generations to come.</p>
            <b>Internship Details:</b>
            <ul className="list-disc pl-6">
              <li>Position: Graphic designer, Social Media Manager, Market Research Analyst</li>
              <li>Duration: 6-8 weeks</li>
              <li>Start Date: Immediately</li>
              <li>Mode: unpaid</li>
            </ul>
            <b>Benefits:</b>
            <ul className="list-disc pl-6">
              <li>Gain hands-on experience in your chosen field.</li>
              <li>Collaborate with industry professionals and expand your professional network.</li>
              <li>Develop new skills and enhance your resume.</li>
              <li>Certificate of internship</li>
              <li>Opportunity for potential future employment or strong references.</li>
            </ul>
            <p>To apply, please submit your resume and a cover letter detailing your interest in the internship and how it aligns with your career goals. We will review all applications and contact selected candidates for further steps in the application process.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStartup; 