import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-primary/20 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">Saarthi Textile</Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-accent">Home</Link>
          <Link to="/gallery" className="hover:text-accent">Gallery</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
