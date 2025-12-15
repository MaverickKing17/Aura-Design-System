import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  icon,
  className = '',
  ...props 
}) => {
  const baseStyle = "inline-flex items-center justify-center font-sans font-medium transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-accent text-primary hover:bg-[#b6922e] hover:shadow-lg active:transform active:scale-95",
    secondary: "bg-primary text-white hover:bg-[#253b5e] hover:shadow-lg",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
    text: "text-primary hover:text-accent underline-offset-4 hover:underline"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <button 
      className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};