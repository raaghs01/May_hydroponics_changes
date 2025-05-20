import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/ContactUs';
// import { Gallery } from './pages/Gallery';
import { News } from './pages/News';
// import { Facilities } from './pages/Facilities';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { Blog } from './pages/Blog';
import { FAQ } from './pages/FAQ';
import { Achievements } from './pages/Achievements';
import { Training } from './pages/Training';
import { Projects } from './pages/Projects';
import { VisionAndMission } from './pages/VisionAndMission';
import { SocialInteraction } from './pages/SocialInteraction';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contactus" element={<Contact />} />
            {/* <Route path="/gallery" element={<Gallery />} /> */}
            <Route path="/news" element={<News />} />
            {/* <Route path="/facilities" element={<Facilities />} /> */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/training" element={<Training />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/vision-and-mission" element={<VisionAndMission />} />
            <Route path="/social-interaction" element={<SocialInteraction />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
