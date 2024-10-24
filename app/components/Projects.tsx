import React from 'react';
import ProjectCard from './ProjectCard'; // Import the ProjectCard component

// List of projects
const projects = [
  {
    title: 'Project One',
    image: '/images/project1.png', // Path to your project image in public folder
    github: 'https://github.com/username/project1', // GitHub repository link
    live: 'https://project1.com', // Live project link
  },
  {
    title: 'Project Two',
    image: '/images/project2.png',
    github: 'https://github.com/username/project2',
    live: 'https://project2.com',
  },
  {
    title: 'Project Three',
    image: '/images/project3.png',
    github: 'https://github.com/username/project3',
    live: 'https://project3.com',
  },
  // Add more projects as needed
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 bg-gray-100 text-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              image={project.image}
              github={project.github}
              live={project.live}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
