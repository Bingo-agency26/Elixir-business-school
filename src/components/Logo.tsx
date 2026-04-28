import React from 'react';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "h-10" }: LogoProps) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={className} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B68D40" />
          <stop offset="50%" stopColor="#F4E0B9" />
          <stop offset="100%" stopColor="#8A621D" />
        </linearGradient>
      </defs>
      {/* The stylized gold arrow symbol */}
      <path 
        d="M25 65C25 50 35 40 50 40M50 40C65 40 75 50 75 65V85M50 40L85 15M85 15L70 15M85 15L85 30M25 65C25 80 40 90 60 90C80 90 90 80 90 70" 
        stroke="url(#logoGradient)" 
        strokeWidth="10" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <rect x="45" y="40" width="10" height="45" fill="url(#logoGradient)" rx="2" />
    </svg>
  );
}
