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
    <Card className="shadow-lg bg-white text-black w-full md:w-[600px] p-8"> {/* Adjusted card width and padding */}
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-center">{title}</CardTitle> {/* Made the title larger */}
      </CardHeader>
      <CardContent>
        {/* Project Image */}
        <div className="mb-6"> {/* Added more margin-bottom */}
          <Image
            src={image}
            alt={title}
            width={500}  // Adjust the image size
            height={500}
            className="rounded-md"
          />
        </div>

        {/* Links */}
        <div className="flex justify-between mt-6"> {/* Added more space between the buttons */}
          {/* GitHub Button with white font and black outline */}
          <Button asChild className="bg-transparent text-black border border-black hover:bg-black hover:text-white transition-all text-xl">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center"
            >
              GitHub
            </a>
          </Button>

          <Button asChild className="bg-transparent text-black border border-black hover:bg-black hover:text-white transition-all text-xl">
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
