import React from 'react';
import { motion } from 'framer-motion';

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
}

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
      whileHover={{ y: -10 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="h-48 bg-gradient-to-br from-[#C9A961] to-[#DC143C] flex items-center justify-center">
        <div className="text-white text-4xl font-bold">{product.title.charAt(0)}</div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary mb-2">{product.title}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <button className="text-[#DC143C] font-medium hover:text-[#B22222] transition-colors">
          Learn More →
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;