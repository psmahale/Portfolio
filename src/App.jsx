
import React from "react";
import "./App.css";
import About from "./components/About";
import Art from "./components/Art";
import Certificate from "./components/Certificate";
import Contact from "./components/Contact";
import Editing from "./components/Editing";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

const App = () => {

  return (
    <div>
      
      <Navbar />
      <Home />
      <About /> 
      <Projects /> 
      <Art /> 
      <Editing /> 
      <Certificate /> 
      <Contact /> 
      <Footer />
    </div>
  );
};

export default App;