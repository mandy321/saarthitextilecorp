import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const HeroIntro = () => {
  // Create controls for each ball to allow continuous, natural motion
  const controls = useAnimation();

  useEffect(() => {
    // Define a looping animation that mimics a bouncing tennis ball with slight horizontal drift
    const animateBall = (i: number) => {
      controls.start((index) => {
        if (index !== i) return {};
        return {
          y: [0, -30, 0, -15, 0], // bounce pattern
          x: [0, 10 * Math.sin(i), -10 * Math.cos(i), 5, -5], // subtle sway
          rotate: [0, 15, -15, 10, -10, 0],
          transition: {
            duration: 2.5,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatDelay: 0.5,
          },
        };
      });
    };
    // Start animation for each of the 5 balls
    for (let i = 0; i < 5; i++) {
      animateBall(i);
    }
  }, [controls]);

  // Render 5 balls with individual animation controls
  const balls = Array.from({ length: 5 }, (_, i) => (
    <motion.div
      key={i}
      custom={i}
      animate={controls}
      initial={{ y: -100, x: -50, rotate: -15, opacity: 0 }}
      className="absolute rounded-full shadow-lg"
      style={{
        width: '40px',
        height: '40px',
        background: '#DC143C',
        borderRadius: '50%',
        boxShadow: '0 4px 12px rgba(220, 20, 60, 0.4)',
      }}
    />
  ));

  return (
    <div className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#C9A961]/10 to-[#C9A961]/30" />

      {/* Animated balls */}
      <div className="relative">{balls}</div>

      {/* Hero text */}
      <div className="relative text-center text-primary font-heading">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#C9A961] to-[#DC143C]">
          Premium Textile Solutions
        </h1>
        <p className="text-xl md:text-2xl text-gray-800 max-w-2xl mx-auto">
          Crafting high-quality fabrics for discerning clients worldwide
        </p>
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4">
          <motion.button
            className="px-8 py-3 bg-white text-[#DC143C] font-medium rounded-lg shadow hover:bg-[#F0E6E0] transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            Explore Our Products
          </motion.button>
          <motion.button
            className="px-8 py-3 bg-[#DC143C] text-white font-medium rounded-lg shadow hover:bg-[#B22222] transition-colors"
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
