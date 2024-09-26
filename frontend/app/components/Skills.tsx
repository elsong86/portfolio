// app/components/Skills.tsx
import React from 'react';
import Image from 'next/image';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

// List of skills categories with SVG paths from the public folder
const skills = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', icon: '/icons/react.svg' },
      { name: 'Next.js', icon: '/icons/nextjs.svg' },
      { name: 'Tailwind CSS', icon: '/icons/tailwindcss.svg' },
      { name: 'JavaScript', icon: '/icons/javascript.svg' },
      { name: 'TypeScript', icon: '/icons/typescript.svg' }
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', icon: '/icons/nodejs.svg' },
      { name: 'Express.js', icon: '/icons/express.svg' },
      { name: 'Go', icon: '/icons/go.svg' },
      { name: 'Python', icon: '/icons/python.svg' },
      { name: 'FastAPI', icon: '/icons/fastapi.svg' }
    ],
  },
  {
    category: 'DevOps',
    skills: [
      { name: 'Docker', icon: '/icons/docker.svg' },
      { name: 'AWS', icon: '/icons/aws.svg' },
      { name: 'GitHub', icon: '/icons/github.svg' },
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 bg-gray-100 text-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">Skills</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skillCategory, index) => (
            <Card key={index} className="shadow-lg">
              <CardHeader className="flex flex-col items-center">
                <CardTitle className="text-xl font-bold">{skillCategory.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {skillCategory.skills.map((skill, i) => (
                    <li key={i} className="flex items-center text-gray-700 group">
                      {/* Use Next.js Image component for SVGs */}
                      <Image
                        src={skill.icon}
                        alt={`${skill.name} logo`}
                        width={24}  // Set desired width
                        height={24} // Set desired height
                        className="mr-2 group-hover:animate-spin transition-transform duration-300"
                      />
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
