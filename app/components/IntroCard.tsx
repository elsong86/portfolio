import React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Hurricane } from 'next/font/google';
import { motion, useAnimation, useInView } from "framer-motion";

const hurricane = Hurricane({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bonheur-royale',
});

const IntroCard: React.FC = () => {
  // Hook to control animations based on scroll position
  const controls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger animation once

  // Trigger animations when in view
  React.useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      });
    } else {
      controls.start({ opacity: 0, y: 100 }); // Starting state
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ opacity: 0, y: 100 }} // Initial state
      className="bg-white text-black rounded-lg shadow-lg max-w-full mx-auto"
    >
      <Card>
        <div className="relative flex flex-col items-center">
          <Image
            src="/profile.jpg"
            alt="Profile picture"
            width={300}
            height={300}
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
    </motion.div>
  );
};

export default IntroCard;
