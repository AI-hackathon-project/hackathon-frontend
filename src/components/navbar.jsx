import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  window.addEventListener('scroll', handleScroll);

  const sections = document.querySelectorAll('section[id]');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    },
    { threshold: 0.6 }
  );

  sections.forEach((section) => observer.observe(section));

  return () => {
    window.removeEventListener('scroll', handleScroll);
    sections.forEach((section) => observer.unobserve(section));
  };
}, []);


  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 text-lg ${isScrolled
            ? 'bg-white shadow-md py-3'
            : 'bg-transparent py-5'
          }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <div className="flex items-center">
            <img src=".../../src/assets/images/logo_2.png" alt="Company Logo" className='w-12 h-auto max-h-12 object-contain transition-transform duration-300 hover:rotate-12' />
          </div>

          <div className="hidden md:flex items-center space-x-8 text-l">
            <NavLink href="#Home" label="Home" isActive={activeSection === 'Home'} />
            <NavLink href="#Service" label="Service" isActive={activeSection === 'Service'} />
            <NavLink href="#About" label="About Us" isActive={activeSection === 'About'} />
            <NavLink href="#Testimonial" label="Testimonials" isActive={activeSection === 'Testimonial'} />
            <NavLink href="#Contact" label="Contact Us" isActive={activeSection === 'Contact'} />

          </div>

          <div className="flex items-center space-x-4">
            <a href="#" className="hidden md:inline-block text-[#7e1406] hover:text-[#E15B42]transition-colors">
              Sign In
            </a>
            <Button label="Get Started" primary className="hidden md:flex" />
            <button
              className="md:hidden text-[#7e1406] hover:text-[#E15B42] transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}
      >
        <div className="flex flex-col h-full pt-20 px-6">
          <div className="flex flex-col space-y-6">
            <MobileNavLink href="#Home" label="Home" isActive />
            <MobileNavLink href="#Service" label="Services" />
            <MobileNavLink href="#About" label="About Us" />
            <MobileNavLink href="#Testimonial" label="Testimonials" />
            <MobileNavLink href="#Contact" label="Contact Us" />
          </div>
          <div className="mt-8 flex flex-col space-y-4">
            <a href="#" className="text-[#7e1406] hover:text-[#E15B42] transition-colors text-lg font-medium">
              Sign In
            </a>
            <Button label="Get Started" primary className="w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

const NavLink = ({ href, label, isActive }) => (
  <a
    href={href}
    className={`text-lg font-medium transition-colors duration-300 ${isActive
        ? 'text-[#7e1406]'
        : 'text-gray-600 hover:text-[#E15B42]'
      }`}
  >
    {label}
  </a>
);

const MobileNavLink = ({ href, label, isActive}) => (
  <a
    href={href}
    className={`text-lg font-medium transition-colors ${isActive
        ? 'text-[#7e1406]'
        : 'text-gray-600 hover:text-[#E15B42]'
      }`}
  >
    {label}
  </a>
);

export default Navbar;