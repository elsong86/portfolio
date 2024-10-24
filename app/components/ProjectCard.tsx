import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  image: string;
  github: string;
  live: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, image, github, live }) => {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Project Image */}
        <div className="mb-4">
          <Image
            src={image}
            alt={title}
            width={400}
            height={200}
            className="rounded-md"
          />
        </div>

        {/* Links */}
        <div className="flex justify-between mt-4">
          <Button asChild>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center"
            >
              GitHub
            </a>
          </Button>

          <Button asChild variant="secondary">
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center"
            >
              Live Project
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
