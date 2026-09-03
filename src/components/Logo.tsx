import React from 'react';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "h-12 w-auto" }: LogoProps) {
  return (
    <img 
      src="/Logo.png" 
      alt="Elixir Business School Logo" 
      className={`object-contain shrink-0 ${className}`}
    />
  );
}
