import React from 'react';
import { School, Award } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="mb-16 bg-white shadow-xl rounded-lg p-8 transform hover:scale-105 transition duration-300">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-2 border-blue-500 pb-2">Education</h2>
      <div className="mb-6">
        <div className="flex items-center mb-3">
          <School className="mr-2 text-blue-500" size={24} />
          <h3 className="text-2xl font-semibold text-gray-800">Master of Science in [Your Field]</h3>
        </div>
        <p className="text-gray-600 ml-8 mb-2">University Name, Expected Graduation: [Year]</p>
        <p className="text-gray-700 ml-8 mb-1">Thesis: "[Your Thesis Title]"</p>
        <p className="text-gray-700 ml-8">Advisor: Dr. [Advisor's Name]</p>
      </div>
      <div>
        <div className="flex items-center mb-3">
          <School className="mr-2 text-blue-500" size={24} />
          <h3 className="text-2xl font-semibold text-gray-800">Bachelor of Science in [Your Field]</h3>
        </div>
        <p className="text-gray-600 ml-8 mb-2">University Name, Graduated: [Year]</p>
        <p className="text-gray-700 ml-8 mb-1">GPA: [Your GPA]</p>
        <div className="flex items-center ml-8">
          <Award className="mr-2 text-blue-500" size={18} />
          <p className="text-gray-700">Honors: [Any honors or awards]</p>
        </div>
      </div>
    </section>
  );
};

export default Education;