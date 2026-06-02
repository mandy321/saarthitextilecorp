import React from 'react';
import { motion } from 'framer-motion';

// Simple fabric roll animation for a textile company
const FabricRoll = () => (
  <motion.div
    className="w-24 h-24 rounded-full bg-gradient-to-r from-[#C9A961] to-[#DC143C] shadow-lg"
    animate={{ rotate: 360 }}
    transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
  />
);

const HeroIntro = () => {
  return (
    <div className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#C9A961]/10 to-[#C9A961]/30 dark:from-gray-800 dark:to-gray-700">
      {/* Animated fabric roll */}
      <div className="absolute inset-0 flex items-center justify-center">
        <FabricRoll />
      </div>

      {/* Hero text */}
      <div className="relative text-center text-primary font-heading z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#C9A961] to-[#DC143C]">
          Premium Textile Solutions
        </h1>
        <p className="text-xl md:text-2xl text-gray-800 dark:text-gray-200 max-w-2xl mx-auto">
          Crafting high‑quality fabrics for tennis balls and beyond
        </p>
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4">
          <motion.button
            className="px-8 py-3 bg-white text-[#DC143C] font-medium rounded-lg shadow hover:bg-[#F0E6E0] transition-colors dark:bg-gray-700 dark:text-gray-200"
            whileHover={{ scale: 1.05 }}
          >
            Explore Products
          </motion.button>
          <motion.button
            className="px-8 py-3 bg-[#DC143C] text-white font-medium rounded-lg shadow hover:bg-[#B22222] transition-colors dark:bg-gray-600"
            whileHover={{ scale: 1.05 }}
          >
            Contact Us
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default HeroIntro;