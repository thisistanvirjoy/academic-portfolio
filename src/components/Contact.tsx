import React from 'react';
import { Mail, Linkedin, Twitter, GitBranch } from 'lucide-react';

const ContactItem = ({ icon: Icon, href, children }) => (
  <li className="flex items-center mb-4">
    <Icon className="mr-3 text-blue-500" size={24} />
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition duration-300">
      {children}
    </a>
  </li>
);

const Contact = () => {
  return (
    <section id="contact" className="mb-16 bg-white shadow-xl rounded-lg p-8 transform hover:scale-105 transition duration-300">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-2 border-blue-500 pb-2">Contact</h2>
      <p className="mb-6 text-gray-700">
        Feel free to reach out to me for collaborations, questions about my research, or academic inquiries.
      </p>
      <ul className="space-y-4">
        <ContactItem icon={Mail} href="mailto:your.email@example.com">
          your.email@example.com
        </ContactItem>
        <ContactItem icon={Linkedin} href="https://www.linkedin.com/in/yourprofile">
          LinkedIn Profile
        </ContactItem>
        <ContactItem icon={Twitter} href="https://twitter.com/yourhandle">
          @YourTwitterHandle
        </ContactItem>
        <ContactItem icon={GitBranch} href="https://github.com/yourusername">
          GitHub Profile
        </ContactItem>
      </ul>
    </section>
  );
};

export default Contact;