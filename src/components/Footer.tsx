import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white p-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Saarthi Textile Corp. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
