import React from 'react';
import HeroIntro from '../components/HeroIntro';
import ProductCard from '../components/ProductCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { mockProducts } from '../mockProducts';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <Navbar />
      
      <HeroIntro />
      
      {/* Products Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-primary dark:text-primary-200 mb-12">
            Our Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary dark:text-primary-200 mb-8">
            About Saarthi Textile
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            With over 20 years of experience in the textile industry, Saarthi Textile Corp has established itself as a trusted name in premium fabric manufacturing. Our commitment to quality and innovation has made us a preferred partner for designers and manufacturers worldwide.
          </p>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-20 bg-primary dark:bg-gray-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold mb-2">20+</h3>
              <p>Years Experience</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">500+</h3>
              <p>Happy Clients</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">1000+</h3>
              <p>Products</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;