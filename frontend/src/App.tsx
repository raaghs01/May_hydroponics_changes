import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';
import  About  from './pages/About';
import { Contact } from './pages/ContactUs';
// import { Gallery } from './pages/Gallery';
import News from './pages/News';
// import { Facilities } from './pages/Facilities';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { Blog } from './pages/Blog';
import { FAQ } from './pages/FAQ';
import { Achievements } from './pages/Achievements';
// import { Training } from './pages/Training';
import { Projects }  from './pages/Projects';
import Ambition from './pages/Ambition';
import  SocialResponsibility  from './pages/SocialResponsibility';
import GetInvolved from './pages/GetInvolved';
import PdfViewer from './pages/PdfViewer';
import { useEffect } from 'react';
import OurStartup from './pages/OurStartup';

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
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
            {/* <Route path="/training" element={<Training />} /> */}
            <Route path="/projects" element={<Projects />} />
            <Route path="/Ambition" element={<Ambition />} />
            <Route path="/social-responsibility" element={<SocialResponsibility />} />
            <Route path="/our-startup" element={<OurStartup />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/pdf-viewer" element={<PdfViewer />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
