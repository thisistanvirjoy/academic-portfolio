import React from 'react';
import { GraduationCap, Download } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-6 sticky top-0 z-10 shadow-lg">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <GraduationCap className="mr-2" size={32} />
          <h1 className="text-3xl font-bold">Your Name</h1>
        </div>
        <nav className="flex flex-wrap justify-center md:justify-end">
          <a href="#about" className="mx-3 my-1 hover:text-gray-300 transition duration-300">About</a>
          <a href="#education" className="mx-3 my-1 hover:text-gray-300 transition duration-300">Education</a>
          <a href="#skills" className="mx-3 my-1 hover:text-gray-300 transition duration-300">Skills</a>
          <a href="#projects" className="mx-3 my-1 hover:text-gray-300 transition duration-300">Projects</a>
          <a href="#contact" className="mx-3 my-1 hover:text-gray-300 transition duration-300">Contact</a>
        </nav>
        <a
          href="/path-to-your-cv.pdf"
          download
          className="mt-4 md:mt-0 bg-white text-blue-600 px-4 py-2 rounded-full flex items-center hover:bg-gray-100 transition duration-300 shadow-md"
        >
          <Download className="mr-2" size={18} />
          Download CV
        </a>
      </div>
    </header>
  );
};

export default Header;