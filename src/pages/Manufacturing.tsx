import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ManufacturingGallery from '../components/ManufacturingGallery';

const Manufacturing = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <Navbar />
      <ManufacturingGallery />
      <Footer />
    </div>
  );
};

export default Manufacturing;