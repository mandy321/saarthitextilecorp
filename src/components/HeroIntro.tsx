import React from 'react';
import { motion } from 'framer-motion';

const HeroIntro = () => {
  // Create a realistic tennis ball animation with multiple balls bouncing naturally
  const ballVariants = {
    initial: { 
      y: -100, 
      x: -50, 
      rotate: -15,
      opacity: 0 
    },
    animate: {
      y: (i: number) => Math.sin(Date.now() / 1000 + i) * 30, // Natural bobbing motion
      x: (i: number) => Math.cos(Date.now() / 1500 + i) * 20, // Subtle horizontal sway
      rotate: (i: number) => (Math.sin(Date.now() / 800 + i) * 15), // Gentle rotation
      opacity: 1,
      transition: { 
        type: 'spring',
        stiffness: 200,
        damping: 20,
        mass: 0.5 
      }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.5 } 
    }
  };

  // Generate 5 balls with staggered animation
  const balls = Array.from({ length: 5 }, (_, i) => (
    <motion.div
      key={`ball-${i}`}
      variants={ballVariants}
      initial={{ 
        y: -100, 
        x: -50, 
        rotate: -15,
        opacity: 0 
      }}
      animate="animate"
      exit="exit"
      className="absolute rounded-full shadow-lg"
      style={{
        width: '40px',
        height: '40px',
        background: '#DC143C', // Red accent color
        borderRadius: '50%',
        boxShadow: '0 4px 12px rgba(220, 20, 60, 0.4)',
        transform: 'scale(1)',
      }}
    />
  ));

  return (
    <div className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#C9A961]/10 to-[#C9A961]/30" />
      
      {/* Tennis ball animation */}
      <div className="relative">{balls}</div>
      
      {/* Hero text content */}
      <div className="relative text-center text-primary font-heading">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#C9A961] to-[#DC143C]">
          Premium Textile Solutions
        </h1>
        <p className="text-xl md:text-2xl text-gray-800 max-w-2xl mx-auto">
          Crafting high-quality fabrics for discerning clients worldwide
        </p>
        <div className="mt-8 flex flex-col sm:flex-rows sm:items-center sm:justify-center gap-4">
          <motion.button
            className="px-8 py-3 bg-white text-[#DC143C] font-medium rounded-lg shadow hover:bg-[#F0E6E0] transition-colors"
            variant="solid"
            whileHover={{ transform: 'scale(1.05)' }}
          >
            Explore Our Products
          </motion.button>
          <motion.button
            className="px-8 py-3 bg-[#DC143C] text-white font-medium rounded-lg shadow hover:bg-[#B22222] transition-colors"
            variant="solid"
            whileHover={{ transform: 'scale(1.05)' }}
          >
            Contact Us
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default HeroIntro;