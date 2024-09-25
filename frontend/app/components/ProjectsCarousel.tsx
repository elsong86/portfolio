"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules'; // Import Navigation and Pagination
import 'swiper/css'; // Swiper basic styles
import 'swiper/css/navigation'; // Navigation styles
import 'swiper/css/pagination'; // Pagination styles

const projects = [
  {
    title: 'Project 1',
    description: 'This is a web app built with React and Node.js.',
    image: 'https://via.placeholder.com/300',
    url: 'https://github.com/your-username/project1',
  },
  {
    title: 'Project 2',
    description: 'This is a mobile app built with React Native.',
    image: 'https://via.placeholder.com/300',
    url: 'https://github.com/your-username/project2',
  },
];

const ProjectsCarousel: React.FC = () => {
  return (
    <section id="projects" className="py-32 bg-white text-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation // Enable navigation arrows
          pagination={{ clickable: true }} // Enable pagination dots
          modules={[Navigation, Pagination]} // Pass Navigation and Pagination modules
          className="w-full max-w-6xl mx-auto h-[500px] pb-10" // Add padding bottom to make space for pagination
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="text-center">
                <img src={project.image} alt={project.title} className="mx-auto rounded-lg shadow-md" />
                <h3 className="text-2xl font-bold mt-6">{project.title}</h3>
                <p className="mt-4">{project.description}</p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 mt-4 inline-block"
                >
                  View on GitHub
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProjectsCarousel;
