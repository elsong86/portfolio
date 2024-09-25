// app/components/Connect.tsx
import React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const Connect: React.FC = () => {
  return (
    <div className="relative inline-block">
      <Accordion type="single" collapsible>
        <AccordionItem value="connect">
          <AccordionTrigger className="text-blue-400 text-lg p-2 rounded-full hover:bg-white hover:bg-opacity-20">
            Connect
          </AccordionTrigger>
          <AccordionContent className="absolute right-0 mt-2 bg-white bg-opacity-30 backdrop-blur-lg rounded-lg shadow-lg p-4 w-40 z-50">
            <div className="flex flex-col space-y-2">
              <a
                href="https://github.com/elsong86"
                className="text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/ellissong"
                className="text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="mailto:ellissong@gmail.com"
                className="text-blue-400 hover:underline"
              >
                Email
              </a>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Connect;
