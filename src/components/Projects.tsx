import React from 'react';
import { Folder, ExternalLink, Calendar, Tag } from 'lucide-react';

const ProjectCard = ({ title, description, techStack, link, date }) => (
  <div className="bg-white shadow-lg rounded-lg p-6 mb-8 hover:shadow-xl transition duration-300">
    <h3 className="text-2xl font-semibold mb-3 flex items-center text-gray-800">
      <Folder className="mr-2 text-blue-500" size={24} />
      {title}
    </h3>
    <div className="flex items-center mb-3 text-gray-600">
      <Calendar className="mr-2" size={16} />
      <span>{date}</span>
    </div>
    <p className="text-gray-700 mb-4">{description}</p>
    <div className="mb-4">
      <h4 className="font-semibold mb-2 flex items-center text-gray-700">
        <Tag className="mr-2 text-blue-500" size={18} />
        Tech Stack:
      </h4>
      <ul className="flex flex-wrap">
        {techStack.map((tech, index) => (
          <li key={index} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full mr-2 mb-2 text-sm">
            {tech}
          </li>
        ))}
      </ul>
    </div>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:underline flex items-center"
    >
      View Project <ExternalLink className="ml-1" size={16} />
    </a>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      date: "January 2023",
      description: "A brief description of your first project and its significance.",
      techStack: ["React", "Node.js", "MongoDB"],
      link: "https://github.com/yourusername/project1"
    },
    {
      title: "Project 2",
      date: "March 2023",
      description: "Description of your second project, highlighting key features and outcomes.",
      techStack: ["Python", "TensorFlow", "Flask"],
      link: "https://github.com/yourusername/project2"
    }
  ];

  return (
    <section id="projects" className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-gray-800 border-b-2 border-blue-500 pb-2">Projects</h2>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </section>
  );
};

export default Projects;