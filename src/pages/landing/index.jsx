import Services from "./components/services.jsx";
import Hero from "./components/hero.jsx";
import About from "./components/About.jsx";
import Footer from "../../components/footer.jsx";
import Navbar from "../../components/navbar.jsx";
import Contacts from "./components/Contact.jsx";
import Testimonials from "./components/Testimonials.jsx";
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
