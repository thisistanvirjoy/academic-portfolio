import React from 'react';
import { Code, Database, Terminal, Cpu } from 'lucide-react';

const SkillCategory = ({ title, skills, icon: Icon }) => (
  <div className="mb-6">
    <h3 className="text-2xl font-semibold mb-3 flex items-center text-gray-800">
      <Icon className="mr-2 text-blue-500" size={24} />
      {title}
    </h3>
    <ul className="grid grid-cols-2 gap-2">
      {skills.map((skill, index) => (
        <li key={index} className="text-gray-700 flex items-center">
          <Cpu className="mr-2 text-blue-400" size={16} />
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

const Skills = () => {
  const programmingLanguages = ['Python', 'JavaScript', 'R', 'SQL'];
  const tools = ['Git', 'Docker', 'Jupyter Notebooks', 'VS Code'];
  const technologies = ['React', 'Node.js', 'TensorFlow', 'PostgreSQL'];

  return (
    <section id="skills" className="mb-16 bg-white shadow-xl rounded-lg p-8 transform hover:scale-105 transition duration-300">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-2 border-blue-500 pb-2">Skills</h2>
      <SkillCategory title="Programming Languages" skills={programmingLanguages} icon={Code} />
      <SkillCategory title="Tools" skills={tools} icon={Terminal} />
      <SkillCategory title="Technologies" skills={technologies} icon={Database} />
    </section>
  );
};

export default Skills;