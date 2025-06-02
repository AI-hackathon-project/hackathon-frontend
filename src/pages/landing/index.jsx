import React from "react";

import About from "./components/About";
import Hero from "./components/Hero";
import Footer from "../../components/footer";

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
