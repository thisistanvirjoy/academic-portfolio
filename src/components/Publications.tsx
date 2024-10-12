import React from 'react';
import { BookOpen } from 'lucide-react';

const Publications = () => {
  return (
    <section id="publications" className="mb-12 bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition duration-300">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Publications</h2>
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2">Journal Articles</h3>
        <ul className="list-disc list-inside space-y-2">
          <li className="flex items-start text-gray-700">
            <BookOpen className="mr-2 mt-1 flex-shrink-0" />
            <span>[Author Last Name, First Initial]. (Year). [Article Title]. [Journal Name], [Volume](Issue), [Page Range]. DOI: [DOI Number]</span>
          </li>
          {/* Add more publications as needed */}
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Conference Presentations</h3>
        <ul className="list-disc list-inside space-y-2">
          <li className="flex items-start text-gray-700">
            <BookOpen className="mr-2 mt-1 flex-shrink-0" />
            <span>[Author Last Name, First Initial]. (Year, Month). [Presentation Title]. [Conference Name], [Location].</span>
          </li>
          {/* Add more presentations as needed */}
        </ul>
      </div>
    </section>
  );
};

export default Publications;