import React, { useEffect } from 'react';

const ThemeToggle = () => {
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggle = () => {
    const html = document.documentElement;
    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <label className="flex items-center cursor-pointer">
      <input type="checkbox" className="hidden" onChange={toggle} />
      <div className="relative">
        <div className="w-10 h-5 bg-gray-300 rounded-full shadow-inner dark:bg-gray-600"></div>
        <div className="dot absolute w-5 h-5 bg-white rounded-full shadow -left-1 -top-1 transition dark:left-6 dark:bg-gray-800"></div>
      </div>
      <span className="ml-3 text-sm text-gray-700 dark:text-gray-300">Dark mode</span>
    </label>
  );
};

export default ThemeToggle;