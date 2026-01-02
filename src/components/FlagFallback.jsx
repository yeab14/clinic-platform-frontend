import React from 'react';

import { motion } from 'framer-motion';

export const FlagFallback = ({ countryCode, className = '' }) => {
  const getGradient = (code) => {
    switch (code) {
      case 'en':
        return 'from-blue-500 via-red-500 to-white';
      case 'tr':
        return 'from-red-500 to-white';
      default:
        return 'from-primary-500 to-accent-teal';
    }
  };

  const getLetters = (code) => {
    switch (code) {
      case 'en':
        return 'US';
      case 'tr':
        return 'TR';
      default:
        return code.toUpperCase();
    }
  };

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className={`relative w-full h-full ${className}`}
    >
    
      <div className={`absolute inset-0 bg-gradient-to-br ${getGradient(countryCode)} rounded-full`} />
      

      <div className="absolute inset-0 opacity-20">
        {countryCode === 'en' && (
          <div className="absolute inset-0 flex flex-col">
            {[...Array(7)].map((_, i) => (
              <div key={i} className="flex-1 border-t border-white/30" />
            ))}
            {[...Array(13)].map((_, i) => (
              <div key={i} className="absolute top-0 bottom-0 border-l border-white/30" 
                style={{ left: `${(i + 1) * (100/13)}%` }} />
            ))}
          </div>
        )}
        
        {countryCode === 'tr' && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-1/2 h-1/2 rounded-full bg-white/20" />
          </div>
        )}
      </div>
      
  
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <span className="text-white font-bold text-sm drop-shadow-lg">
          {getLetters(countryCode)}
        </span>
      </div>
    </motion.div>
  );
};