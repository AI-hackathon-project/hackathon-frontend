import About from "./components/About";
import Hero from "./components/hero";
import Contacts from "./components/contact";
import Services from "./components/services";
import Testimonials from "./components/Testimonials";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
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
