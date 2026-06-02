import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 dark:bg-gray-800 text-white dark:text-gray-200 p-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Saarthi Textile Corp. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;