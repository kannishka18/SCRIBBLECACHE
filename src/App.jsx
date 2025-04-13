import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact";
import Demo from "./pages/Demo";  // Import Demo page
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Portfolio"element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/demo" element={<Demo />} />
       
        
        
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
