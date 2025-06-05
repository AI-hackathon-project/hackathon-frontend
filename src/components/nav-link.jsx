import React from 'react';

const NavLink = ({ href, label, isActive = false }) => {
  return (
    <a 
      href={href}
      className={`px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md hover:bg-[#E15B42]/10 hover:text-[#E15B42] ${
        isActive 
          ? 'text-[#7e1406] bg-teal-50/70' 
          : 'text-gray-600'
      }`}
    >
      {label}
    </a>
  );
};

export default NavLink;
