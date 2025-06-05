import { useEffect, useState } from "react";
import { ChevronDown } from 'lucide-react';
import herImage from "../../../assets/images/hero_i.jpg"
import Button from "../../../components/button"; 

const Hero = () => {
  const scrollToOpportunities = () => {
    document.getElementById('About')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);


  return (
    <section className="relative min-h-[70vh] lg:min-h-[80vh] w-full overflow-hidden pt-6 lg:pt-8" id="Home">
    

    {/* Background Gradient Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute -top-20 -left-20 w-72 h-72 rounded-full bg-[#E15B42]/20 blur-3xl transition-all duration-1000 ${isLoaded ? 'opacity-70' : 'opacity-0'}`}></div>
        <div className={`absolute top-1/3 right-10 w-96 h-96 rounded-full bg-[#E15B42]/30 z-12 blur-3xl transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-60' : 'opacity-0'}`}></div>
        <div className={`absolute bottom-20 left-1/4 w-80 h-80 rounded-full bg-[#FB8257]/50 blur-3xl z-12 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-60' : 'opacity-0'}`}></div>
      </div>

      
      {/* Content container with responsive grid */}
      <div className="container mx-auto px- py-12 md:py-18 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Text content - full width on mobile, half on desktop */}
          <div className="order-2 lg:order-1 z-10">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-3 sm:mb-5 
                         bg-clip-text text-transparent bg-gradient-to-r from-black to-[#E15B42]
                         animate-fade-in">
Your Mind Matters During & After Pregnancy            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 text-[#3d1506] animate-fade-in animation-delay-200
                        max-w-xl">
              Professional mental health support designed specifically for pregnant and postpartum women. You're not alone in this journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-400">
              <Button 
                onClick={scrollToOpportunities} 
                variant="primary"
                className="w-full sm:w-auto text-center"
              >
                Get Started
              </Button>
              <Button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} 
                variant="secondary"
                className="w-full sm:w-auto text-center"
              >
Learn More              </Button>
            </div>
          </div>
          
          {/* Image container - full width on mobile, half on desktop */}
          <div className="order-1 lg:order-2 relative h-[240px] sm:h-[380px] md:h-[480px] lg:h-[380px] 
              overflow-hidden lg:overflow-visible
              transition-all duration-500 ease-in-out">

            <div
  className="h-full w-full bg-contain bg-no-repeat bg-center transform hover:scale-105 transition-transform duration-700"
  style={{ backgroundImage: `url(${herImage})` }}
>
            </div>
          </div>
        </div>
      </div>
      

      
      {/* Scroll indicator */}
      <div className="flex justify-center pb-4 sm:pb-1 animate-bounce absolute bottom-0 left-0 right-0 z-10">
        <ChevronDown 
          size={30}
          onClick={scrollToOpportunities}
          className="cursor-pointer text-[#7e1406] hover:text-[#E15B42] transition-colors"
          aria-label="Scroll down"
        />
      </div>
    </section>
  );
};

export default Hero;