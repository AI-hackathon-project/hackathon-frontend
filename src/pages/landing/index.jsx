import React from "react";

import About from "./components/About";
import Footer from "../../components/footer";
import Hero from "./components/Hero";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <About />
      <Footer />
    </div>
  );
};

export default LandingPage;
