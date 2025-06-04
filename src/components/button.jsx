import React from 'react';

const Button = ({
  label,
  onClick,
  primary = false,
  outline = false,
  className = '',
  icon
}) => {
  const baseClasses = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const sizeClasses = "px-5 py-2.5 text-sm";
  
  const styleClasses = primary
    ? "bg-gradient-to-r from-[#7e1406] to-[#E15B42] text-white hover:from-[#E15B42] hover:to-[#7e1406] focus:ring-[#E15B42]"
    : outline
      ? "border-2 border-teal-500 text-teal-500 hover:bg-teal-50 focus:ring-teal-500"
      : "bg-white text-[#7e1406] hover:bg-gray-50 focus:ring-[#E15B42]";
  
  const classes = `${baseClasses} ${sizeClasses} ${styleClasses} ${className}`;
  
  return (
    <button className={classes} onClick={onClick}>
      {icon && <span className="mr-2">{icon}</span>}
      {label}
    </button>
  );
};

export default Button;