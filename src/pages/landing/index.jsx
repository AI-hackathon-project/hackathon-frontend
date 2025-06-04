import Services from "./components/services";
import Hero from "./components/hero";
import About from "./components/About";

import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Contacts from "./components/Contact";
import Testimonials from "./components/Testimonials";
const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <About />
     <Testimonials />
      <Contacts />
      <Footer />
    </div>
  );
};

export default LandingPage;
