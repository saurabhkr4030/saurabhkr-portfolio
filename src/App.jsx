import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import CvPreview from "./components/CvPreview";
import Hero from "./components/Hero";
import About from "./components/About";
import Philosophy from "./components/Philosophy";
import Skills from "./components/Skills";
// import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


import "./index.css";


// styles
import "./styles/reset.css";
import "./styles/navbar.css";
import "./styles/hero.css";
import "./styles/about.css";
import "./styles/philosophy.css";
import "./styles/skills.css";
// import "./styles/experience.css";
// import "./styles/projects.css";
import "./styles/certificates.css";
import "./styles/contact.css";
import "./styles/cv.css";
import "./styles/footer.css";
import "./styles/Education.css";

function Layout() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/cv";

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Philosophy />
              <Skills />
              <Projects />
              <Education />
              <Certifications />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="/cv" element={<CvPreview />} />
      </Routes>
    </>
  );
}

export default function App() {
  return <Layout />;
}



