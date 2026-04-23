
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
  decoding?: "async" | "sync" | "auto";
  referrerPolicy?: React.HTMLAttributeReferrerPolicy;
}

export const LazyImage: React.FC<LazyImageProps> = ({ 
  src, 
  alt, 
  className = "", 
  loading = "lazy",
  decoding = "async",
  referrerPolicy = "no-referrer"
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <AnimatePresence mode="wait">
        {!isLoaded && (
          <motion.div
            key="skeleton"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-white/5 animate-pulse flex items-center justify-center"
          >
            <div className="w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-20deg]" />
          </motion.div>
        )}
      </AnimatePresence>
      
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setIsLoaded(true)}
        loading={loading}
        decoding={decoding}
        referrerPolicy={referrerPolicy}
      />
    </div>
  );
};
