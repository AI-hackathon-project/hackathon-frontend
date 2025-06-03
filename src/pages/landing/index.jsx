import React from "react";
import About from "./components/About";
import Footer from "../../components/footer";
import Services from "./components/services";
import Hero from "./components/hero";

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
