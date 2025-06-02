import React from "react";
import Hero from "./components/Hero";
import Footer from "../../components/Footer";
import Services from "./components/services";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Footer />
    </div>
  );
};

export default LandingPage;
