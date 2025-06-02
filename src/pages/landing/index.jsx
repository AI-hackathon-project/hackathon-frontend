import React from "react";
import Hero from "./components/hero";
import About from "./components/About";
import Footer from "../../components/Footer";
import Services from "./components/services";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Footer />
    </div>
  );
};

export default LandingPage;
