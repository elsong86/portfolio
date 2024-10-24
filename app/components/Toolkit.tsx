import React from 'react';
import Image from 'next/image';
import {
    Card,
    CardContent,
} from "@/components/ui/card";

// List of all skills with SVG paths from the public folder
const skills = [
  { name: 'React', icon: '/icons/react.svg' },
  { name: 'Next.js', icon: '/icons/nextjs.svg' },
  { name: 'Tailwind CSS', icon: '/icons/tailwindcss.svg' },
  { name: 'JavaScript', icon: '/icons/javascript.svg' },
  { name: 'TypeScript', icon: '/icons/typescript.svg' },
  { name: 'Node.js', icon: '/icons/nodejs.svg' },
  { name: 'Express.js', icon: '/icons/express.svg' },
  { name: 'Go', icon: '/icons/go.svg' },
  { name: 'Python', icon: '/icons/python.svg' },
  { name: 'FastAPI', icon: '/icons/fastapi.svg' },
  { name: 'Docker', icon: '/icons/docker.svg' },
  { name: 'AWS', icon: '/icons/aws.svg' },
  { name: 'GitHub', icon: '/icons/github.svg' },
  { name: 'Redis', icon: '/icons/redis.svg' }, 
  { name: 'Kubernetes', icon: '/icons/kubernetes.svg'}
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 bg-gray-100 text-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">My Toolkit</h2>
        <Card className="shadow-lg p-6"> {/* Added padding inside the card */}
          <CardContent>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-8"> {/* Adjusted grid gap for equal spacing */}
              {skills.map((skill, index) => (
                <li 
                  key={index} 
                  className="flex flex-col items-center text-gray-700 text-xl p-4"> {/* Added padding for equal spacing */}
                  <Image
                    src={skill.icon}
                    alt={`${skill.name} logo`}
                    width={50}  // Slightly increased logo size
                    height={50} // Slightly increased logo size
                    className="mb-4"
                  />
                  {skill.name}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
