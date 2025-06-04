import Hero from "./components/hero";
import About from "./components/about";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Contacts from "./components/contact";
import Testimonials from "./components/testimonials";
const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
     <Testimonials />
      <Contacts />
      <Footer />
    </div>
  );
};

export default LandingPage;
