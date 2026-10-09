import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({ children, className = '', onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-xl border border-stone-200/80 shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
};
