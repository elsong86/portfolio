import React from "react";

const AboutMe: React.FC = () => {
    return (
        <section id="aboutme" className="py-32 bg-gray-100 text-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center">About Me</h2>
          <p className="mt-8 text-lg text-center leading-relaxed max-w-4xl mx-auto">
            Hello! I&apos;m Ellis Song, a passionate Full Stack Developer with a love for solving complex problems
            and creating impactful web applications. With experience in JavaScript, TypeScript, React, Node.js, and Go, 
            I thrive on building efficient and scalable applications. In my free time, I enjoy contributing to open-source projects
            and learning new technologies to stay up-to-date in the ever-evolving world of software development.
          </p>
          <p className="mt-8 text-lg text-center leading-relaxed max-w-4xl mx-auto">
            I have a background in education, with a solid foundation in teaching, which allows me to communicate effectively and
            work collaboratively on cross-functional teams. Whether it&apos;s developing full-stack applications or exploring the world of AI and microservices,
            I&apos;m always excited to take on new challenges.
          </p>
        </div>
      </section>
    )
}

export default AboutMe;
