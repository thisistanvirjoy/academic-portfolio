import React from 'react';
import { Microscope } from 'lucide-react';

const Research = () => {
  return (
    <section id="research" className="mb-12 bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition duration-300">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Research Interests</h2>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li className="flex items-center text-gray-700">
          <Microscope className="mr-2" />
          <span>[Research Interest 1]</span>
        </li>
        <li className="flex items-center text-gray-700">
          <Microscope className="mr-2" />
          <span>[Research Interest 2]</span>
        </li>
        <li className="flex items-center text-gray-700">
          <Microscope className="mr-2" />
          <span>[Research Interest 3]</span>
        </li>
      </ul>
      <h3 className="text-xl font-semibold mb-2">Current Projects</h3>
      <ul className="list-disc list-inside space-y-2">
        <li className="text-gray-700">[Project 1 Title]: Brief description of the project and your role.</li>
        <li className="text-gray-700">[Project 2 Title]: Brief description of the project and your role.</li>
      </ul>
    </section>
  );
};

export default Research;