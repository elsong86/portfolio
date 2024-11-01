"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Hurricane } from 'next/font/google';

const hurricane = Hurricane({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bonheur-royale',
});

const Intro: React.FC = () => {
  const ref = useRef(null);

  // Track scrollYProgress relative to the element
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 24px", "end start"],
  });

  // Map scrollYProgress to opacity range for smooth fade effect
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <motion.section
      ref={ref}
      id="intro"
      style={{ opacity }}
      className="min-h-screen flex items-center justify-center text-black"
      transition={{
        opacity: { duration: 0.8, ease: "easeInOut" },
      }}
    >
      <div className="w-full md:w-3/4 lg:w-2/3 rounded-lg p-6 flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8 -mt-10 md:-mt-16">
        
        {/* Left Half with Animated Text */}
        <motion.div
          className="flex-1 flex justify-center items-center text-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="text-5xl font-bold text-gray-800">
            Full Stack Software Engineer
          </p>
        </motion.div>
        
        {/* Right Half with Profile Card */}
        <Card className="w-full md:w-3/4 lg:w-2/3 shadow-lg bg-white rounded-lg p-6 flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
  
          {/* Image Section */}
          <div className="flex-1 basis-1/3 flex-shrink-0">
            <Image
              src="/profile.jpg"
              alt="Profile picture"
              width={0}
              height={0}
              sizes="50vw"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
          
          {/* Content Section */}
          <CardContent className="flex-1 basis-2/3 min-w-0 flex flex-col items-center md:items-start text-center md:text-left">
            <CardHeader className={`text-6xl ${hurricane.className}`}>Ellis Song</CardHeader>
            <p className="text-2xl leading-relaxed">Full Stack Engineer</p>
            <p className="mt-4 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec
              tortor a lorem varius fermentum sit amet eget est. Phasellus non purus
              vel lacus ultricies eleifend. Donec efficitur magna et nunc lobortis,
              at faucibus odio interdum. Nullam faucibus, mauris et facilisis
              vestibulum, ligula metus consequat elit, eget elementum turpis lectus
              nec nulla. Suspendisse tincidunt scelerisque orci, sed sodales purus
              malesuada nec.
            </p>
            <div className="mt-6 flex flex-col items-center md:items-start">
              <p className="mb-2 text-lg font-semibold">Connect with me:</p>
              <div className="flex space-x-4">
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
          </CardContent>
        </Card>

      </div>
    </motion.section>
  );
};

export default Intro;
