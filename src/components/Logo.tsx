import React from 'react';
import logoImg from './Logo.png';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "h-10" }: LogoProps) {
  return (
    <img 
      src={logoImg} 
      alt="Logo" 
      className={className}
    />
  );
}