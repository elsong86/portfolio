// app/components/Skills.tsx
import React from 'react';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
  
const skills = [
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'JavaScript', 'TypeScript'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express.js', 'Go', 'Python', 'FastAPI'],
  },
  {
    category: 'DevOps',
    skills: ['Docker', 'AWS', 'CI/CD', 'GitHub Actions', 'Kubernetes'],
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
              <CardHeader>
                <CardTitle>{skillCategory.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5">
                  {skillCategory.skills.map((skill, i) => (
                    <li key={i} className="text-gray-700">
                      {skill}
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
