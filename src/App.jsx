import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Experience from "./Components/Experience/Experience";
import Education from "./Components/Education/Education";
import Certificates from "./Components/Certificates/Certificates";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

export default function App() {
  return (
    <div className="bg-black text-gray-200 min-h-screen scroll-smooth">
      <Navbar />

      <section id="home" className="pt-10 pb-10 flex items-center justify-center bg-black">
        <Hero />
      </section>

      <section id="about" className="pt-10 pb-10 bg-[#0B0B14]">
        <About />
      </section>

      <section id="skills" className="pt-10 pb-10 bg-black">
        <Skills />
      </section>

      <section id="projects" className="pt-10 pb-10 bg-[#0B0B14]">
        <Projects />
      </section>

      <section id="experience" className="pt-10 pb-10 bg-black">
        <Experience />
      </section>

      <section id="education" className="pt-10 pb-10 bg-[#0B0B14]">
        <Education />
      </section>

      <section id="certificates" className="pt-10 pb-10 bg-black">
        <Certificates />
      </section>

      <section id="contact" className="pt-10 pb-10 bg-[#0B0B14]">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}
