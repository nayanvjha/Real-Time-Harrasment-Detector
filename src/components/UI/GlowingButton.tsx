import React from 'react';
import { motion } from 'framer-motion';

interface GlowingButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'danger';
}

const GlowingButton: React.FC<GlowingButtonProps> = ({
  children,
  onClick,
  className = '',
  variant = 'primary'
}) => {
  const baseStyles = "relative px-6 py-3 rounded-lg font-semibold transition-all duration-300";
  const variantStyles = {
    primary: "bg-forensic-cyan text-forensic-primary hover:bg-opacity-90",
    secondary: "bg-forensic-gold text-forensic-primary hover:bg-opacity-90",
    danger: "bg-forensic-accent text-white hover:bg-opacity-90"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
    >
      <div className="absolute inset-0 rounded-lg animate-pulse-glow" />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

export default GlowingButton;