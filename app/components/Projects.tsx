"use client";

import React, { useRef } from "react";
import ProjectCard from './ProjectCard';
import { motion, useScroll, useTransform } from "framer-motion";

const projects = [
  {
    title: 'Taco About It',
    image: '/taco.jpg',
    github: 'https://github.com/elsong86/taco-about-it',
    live: 'tacoaboutit.app',
  }
];

const Projects: React.FC = () => {
  const ref = useRef(null);

  // Track scrollYProgress relative to the element
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // Start fade as it enters, finish as it exits
  });

  // Opacity stays at 1 for most of the scroll range
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0, 0.8, 1, 0.8, 0]);

  return (
    <motion.section
      ref={ref}
      id="projects"
      style={{ opacity }}
      className="py-32 bg-black text-black"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-full sm:w-[500px] lg:w-[600px] mx-auto"
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
    </motion.section>
  );
};

export default Projects;
