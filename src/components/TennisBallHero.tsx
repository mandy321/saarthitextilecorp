import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const TennisBallHero = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  if (!show) return null;

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 2, ease: 'easeOut' }}
      className="fixed top-5 left-5 w-12 h-12 bg-red-500 rounded-full shadow-lg z-50"
    />
  );
};

export default TennisBallHero;
