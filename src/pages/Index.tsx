import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import TennisBallHero from '../components/TennisBallHero';
import Chatbot from '../components/Chatbot';

const mockProducts = [
  {
    title: 'Premium Cotton Fabric',
    description: 'High-quality cotton fabric perfect for garments and home textiles.',
    image: 'https://via.placeholder.com/300x200?text=Cotton+Fabric',
  },
  {
    title: 'Silk Blend Textiles',
    description: 'Luxurious silk blend for premium fashion collections.',
    image: 'https://via.placeholder.com/300x200?text=Silk+Blend',
  },
  {
    title: 'Synthetic Fibers',
    description: 'Durable synthetic fibers for industrial applications.',
    image: 'https://via.placeholder.com/300x200?text=Synthetic+Fibers',
  },
  {
    title: 'Wool Products',
    description: 'Warm and comfortable wool textiles for winter collections.',
    image: 'https://via.placeholder.com/300x200?text=Wool+Products',
  },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <TennisBallHero />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-accent text-white py-20 px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Welcome to Saarthi Textile Corp
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Your trusted partner for premium textile solutions with over 25 years of experience.
          </p>
        </section>

        {/* Products Section */}
        <section id="products" className="py-16 px-4">
          <h2 className="text-3xl font-heading text-center mb-12">Our Products</h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockProducts.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 px-4 bg-gray-100">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-heading mb-6">About Us</h2>
            <p className="text-gray-700 mb-4">
              Saarthi Textile Corp has been serving the textile industry since 1998, 
              providing high-quality fabrics and innovative solutions to clients worldwide.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="p-4 bg-white rounded-lg shadow">
                <h3 className="text-2xl font-bold text-primary">25+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow">
                <h3 className="text-2xl font-bold text-primary">500+</h3>
                <p className="text-gray-600">Happy Clients</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow">
                <h3 className="text-2xl font-bold text-primary">50+</h3>
                <p className="text-gray-600">Products</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
            <Chatbot />
          </div>
        );
      };

export default Index;