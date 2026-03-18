import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import { projects } from "../assets/assets";


const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Projects projects={projects} />
      <Experience />
      <Contact />
    </div>
  );
};

export default Home;
