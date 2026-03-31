import React from 'react';
import { Download, ArrowRight, ExternalLink } from 'lucide-react';

const Button = ({ children, variant = 'primary', icon = null, onClick, className = '' }) => {
  const getIcon = () => {
    switch (icon) {
      case 'download': return <Download size={18} />;
      case 'arrowRight': return <ArrowRight size={18} />;
      case 'external': return <ExternalLink size={18} />;
      default: return null;
    }
  };

  const baseStyles = "inline-flex items-center justify-center gap-2 py-3 px-6 text-base font-semibold rounded-md transition-all duration-300 cursor-none font-sans group hoverable";
  
  const variants = {
    primary: "bg-black text-white border border-black hover:bg-transparent hover:text-black hover:border-black",
    outline: "bg-transparent text-black border-2 border-black hover:bg-black hover:text-white",
    'light-outline': "bg-transparent text-white border-2 border-white hover:bg-white hover:text-black"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} onClick={onClick}>
      {children}
      {icon && <span className="flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">{getIcon()}</span>}
    </button>
  );
};

export default Button;
