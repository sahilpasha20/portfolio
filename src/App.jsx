import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Navbar/Hero";
import About from "./components/Navbar/About";
import Skills from "./components/Navbar/Skills";
import Experience from "./components/Navbar/Experience";
import Projects from "./components/Navbar/Projects";
import Contact from "./components/Navbar/Contact";
import Footer from "./components/Navbar/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;