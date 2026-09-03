import React from 'react';
import logoImg from './Logo.png';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "h-12 w-auto" }: LogoProps) {
  return (
    <img 
      src={logoImg} 
      alt="Elixir Business School Logo" 
      className={`object-contain shrink-0 ${className}`}
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        if (!target.dataset.triedFallback) {
          target.dataset.triedFallback = 'true';
          target.src = './Logo.png';
        }
      }}
    />
  );
}