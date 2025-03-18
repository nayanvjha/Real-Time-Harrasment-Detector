import React from 'react';
import { motion } from 'framer-motion';

interface HolographicCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

const HolographicCard: React.FC<HolographicCardProps> = ({
  children,
  className = '',
  glowColor = 'rgba(0, 255, 255, 0.2)'
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`
        relative overflow-hidden
        bg-forensic-card-bg backdrop-blur-md
        border border-forensic-cyan/30
        rounded-lg shadow-lg
        ${className}
      `}
      style={{
        boxShadow: `0 0 20px ${glowColor}`
      }}
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-forensic-overlay opacity-50" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export default HolographicCard;