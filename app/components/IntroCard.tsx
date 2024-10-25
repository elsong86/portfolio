// IntroCard.tsx
import React, { useRef } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Hurricane } from 'next/font/google';
import { useInView } from "../../hooks/InView";

const hurricane = Hurricane({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bonheur-royale',
});

const IntroCard: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const visibility = useInView(ref);

  // Adjusted translateY calculation for a more pronounced effect
  const translateY = (100 - visibility) * 1.5; // Multiplier increased to make movement more drastic

  return (
    <Card
      ref={ref}
      className="bg-white rounded-lg shadow-lg p-8 max-w-full mx-auto transition-transform duration-500" // Increased duration
      style={{
        transform: `translateY(${translateY}px)`, // Apply larger calculated translation
        opacity: visibility > 20 ? 1 : 0, // Fade in as visibility increases
      }}
    >
      <div className="relative flex flex-col items-center">
        <Image
          src="/profile.jpg"
          alt="Profile picture"
          width={400}
          height={400}
          className="w-full h-auto"
        />
        <p className={`mt-3 text-6xl ${hurricane.className}`}>
          Ellis Song
        </p>
        <div className="mt-6 flex space-x-4 justify-center">
          <a href="https://www.linkedin.com/in/ellissong" target="_blank" rel="noopener noreferrer">
            <Image
              src="/icons/linkedin.svg"
              alt="Linkedin"
              width={24}
              height={24}
              className="hover:scale-110 transition-transform duration-300"
            />
          </a>
          <a href="mailto:ellissong@gmail.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="/icons/gmail.svg"
              alt="Gmail"
              width={24}
              height={24}
              className="hover:scale-110 transition-transform duration-300"
            />
          </a>
          <a href="https://github.com/elsong86" target="_blank" rel="noopener noreferrer">
            <Image
              src="/icons/github.svg"
              alt="GitHub"
              width={24}
              height={24}
              className="hover:scale-110 transition-transform duration-300"
            />
          </a>
        </div>
      </div>
    </Card>
  );
};

export default IntroCard;
