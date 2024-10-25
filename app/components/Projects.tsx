import React from 'react';
import ProjectCard from './ProjectCard'; // Import the ProjectCard component

// List of projects
const projects = [
  {
    title: 'Taco About It',
    image: '/taco.jpg', // Correct path
    github: 'https://github.com/elsong86/taco-about-it', // GitHub repository link
    live: 'tacoaboutit.app', // Live project link
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 bg-white text-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>

        {/* Flex container to center the cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-full sm:w-[500px] lg:w-[600px] mx-auto"  // Ensure the card stays centered
            >
              <ProjectCard
                title={project.title}
                image={project.image}
                github={project.github}
                live={project.live}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
