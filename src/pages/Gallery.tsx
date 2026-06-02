import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const images = [
  'https://via.placeholder.com/600x400?text=Manufacturing+1',
  'https://via.placeholder.com/600x400?text=Manufacturing+2',
  'https://via.placeholder.com/600x400?text=Product+1',
  'https://via.placeholder.com/600x400?text=Product+2',
];

const Gallery = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-12 px-4">
        <h1 className="text-4xl font-heading text-center mb-8">Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Gallery ${i}`}
              className="cursor-pointer rounded-lg shadow hover:opacity-90"
              onClick={() => setSelected(src)}
            />
          ))}
        </div>
        {selected && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={() => setSelected(null)}>
            <img src={selected} alt="Enlarged" className="max-w-full max-h-full rounded" />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
