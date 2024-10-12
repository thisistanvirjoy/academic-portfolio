import React from 'react';
import { User, Mail, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="mb-16 bg-white shadow-xl rounded-lg p-8 transform hover:scale-105 transition duration-300">
      <h2 className="text-4xl font-bold mb-6 text-gray-800 border-b-2 border-blue-500 pb-2">About Me</h2>
      <div className="flex flex-col md:flex-row items-center">
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
          alt="Your Name"
          className="rounded-full w-48 h-48 object-cover mb-6 md:mb-0 md:mr-8 shadow-lg"
        />
        <div>
          <div className="flex items-center mb-3">
            <User className="mr-2 text-blue-500" />
            <p className="text-lg text-gray-700">Student Researcher</p>
          </div>
          <div className="flex items-center mb-3">
            <Mail className="mr-2 text-blue-500" />
            <p className="text-lg text-gray-700">your.email@example.com</p>
          </div>
          <div className="flex items-center mb-6">
            <MapPin className="mr-2 text-blue-500" />
            <p className="text-lg text-gray-700">Your Location</p>
          </div>
          <p className="text-lg mb-4 text-gray-700">
            I am a passionate student researcher with a keen interest in [Your Research Area]. 
            My academic journey is driven by a desire to contribute meaningful insights to the field of [Your Field].
          </p>
          <p className="text-lg text-gray-700">
            Currently, I am focusing on [Brief Description of Current Research or Academic Goals]. 
            I am eager to collaborate with fellow researchers and contribute to the academic community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;