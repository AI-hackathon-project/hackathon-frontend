import Services from "../landing/components/services.jsx";
import Hero from "../landing/components/hero.jsx";
import About from "../landing/components/About.jsx";
import Footer from "../../components/footer.jsx";
import Navbar from "../../components/navbar.jsx";
import Contacts from "../landing/components/Contact.jsx";
import Testimonials from "../landing/components/Testimonials.jsx";
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
