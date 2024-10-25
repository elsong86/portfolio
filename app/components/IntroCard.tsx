import React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Hurricane } from 'next/font/google';

// Use the Bonheur Royale font
const hurricane = Hurricane({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bonheur-royale',
});

const IntroCard: React.FC = () => {
  return (
    <Card className="bg-white rounded-lg shadow-lg p-8 max-w-full mx-auto">
      <div className="relative flex flex-col items-center">
        <Image
          src="/profile.jpg" // Replace with your profile image path
          alt="Profile picture"
          width={400}  // Adjusted the width to fit within the card
          height={400} // Adjusted the height to fit within the card
          className="w-full h-auto"
              />
        <p className={`mt-3 text-6xl ${hurricane.className}`}>
          Ellis Song
        </p>
        {/* Social Icons below the image */}
        <div className="mt-6 flex space-x-4 justify-center">
          <a href="https://www.linkedin.com/in/ellissong" target="_blank" rel="noopener noreferrer">
            <Image
              src="/icons/linkedin.svg" // Replace with your LinkedIn icon path
              alt="Linkedin"
              width={24}
              height={24}
              className="hover:scale-110 transition-transform duration-300"
            />
          </a>
          <a href="mailto:ellissong@gmail.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="/icons/gmail.svg" // Replace with your Gmail icon path
              alt="Gmail"
              width={24}
              height={24}
              className="hover:scale-110 transition-transform duration-300"
            />
          </a>
          <a href="https://github.com/elsong86" target="_blank" rel="noopener noreferrer">
            <Image
              src="/icons/github.svg" // Replace with your GitHub icon path
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
