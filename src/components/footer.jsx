import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import NavLink from './nav-link';

const Footer = () => {
  return (
    <footer className="backdrop-blur-md bg-white/80 border-t border-gray-200/50 py-8 bottom-0 z-10 shadow-sm min-h-[40vh]">
      <div className="container mx-auto px-4">
        {/* Navigation Links Section */}
        <div className="flex justify-center py-3 mb-2 border-b border-gray-100">
          <nav className="flex flex-wrap justify-center gap-1 md:gap-2">
            <NavLink href="#Home" label="Home" isActive />
            <NavLink href="#Service" label="Services" />
            <NavLink href="#About" label="About Us" />
            <NavLink href="#Testimonial" label="Testimonials" />
            <NavLink href="#Contact" label="Contact Us" />
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-2">
          {/* Logo and Copyright */}
          <div className="flex items-center gap-3">
            <div className="flex items-center">
              <img
                src="/src/assets/images/logo_2.png"
                alt="Company Logo"
                className="w-12 h-auto max-h-12 object-contain transition-transform duration-300 hover:rotate-12"
              />
            </div>
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} MomCare. All rights reserved.
            </p>
          </div>

          {/* Links and Social */}
          <div className="flex items-center gap-6">
            {/* Legal Links */}
            <div className="text-sm">
              <a
                href="#"
                className="text-gray-500 hover:text-[#E15B42] transition-colors mx-2"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#E15B42] transition-colors mx-2"
              >
                Terms
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-2">
              <SocialLink icon={<Facebook size={16} />} href="#" label="Facebook" />
              <SocialLink icon={<Twitter size={16} />} href="#" label="Twitter" />
              <SocialLink icon={<Instagram size={16} />} href="#" label="Instagram" />
              <SocialLink icon={<Linkedin size={16} />} href="#" label="LinkedIn" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const brandColors = {
  Facebook: 'hover:text-blue-600 hover:bg-blue-100',   // Facebook blue
  Twitter: 'hover:text-[#1DA1F2] hover:bg-[#E8F5FD]',    // Twitter blue
  Instagram: 'hover:text-[#E4405F] hover:bg-[#FDE8ED]',  // Instagram pink
  Linkedin: 'hover:text-[#0077B5] hover:bg-[#EAF4FB]',   // LinkedIn blue
};

const SocialLink = ({ icon, href, label }) => {
  const hoverColors = brandColors[label] || 'hover:text-teal-600 hover:bg-teal-100';

  return (
    <a
      href={href}
      aria-label={label}
      className={`w-8 h-8 flex items-center justify-center rounded-full bg-gray-100/80 text-gray-600 transition-all duration-300 hover:scale-105 ${hoverColors}`}
    >
      {icon}
    </a>
  );
};


export default Footer;
