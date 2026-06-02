import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-primary/20 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary dark:text-primary-200">
          Saarthi Textile
        </Link>
        <div className="flex items-center gap-4">
          <Link to="/" className="hover:text-accent dark:hover:text-accent-200">
            Home
          </Link>
          <Link to="/gallery" className="hover:text-accent dark:hover:text-accent-200">
            Gallery
          </Link>
          <Link
            to="/manufacturing"
            className="hover:text-accent dark:hover:text-accent-200"
          >
            Manufacturing
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;