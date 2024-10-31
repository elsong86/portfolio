"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Hurricane } from 'next/font/google';

const hurricane = Hurricane({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bonheur-royale',
});

const Intro: React.FC = () => {
  const ref = useRef(null);

  // Track scrollYProgress relative to the element, accounting for the navbar height
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 24px", "end start"],
  });

  // Map scrollYProgress to an opacity range for smooth fade effect
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
      <div className="container mx-auto flex flex-row items-center justify-between p-10">
        {/* Left Section: Text Content */}
        <div className="w-1/2 p-6 shadow-lg bg-white rounded-lg opacity-90">
          <h2 className={`mt-3 text-6xl ${hurricane.className}`}>Ellis Song</h2>
          <p className="mt-4 text-2xl leading-relaxed">Full Stack Engineer</p>
          <p className="mt-4 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec
            tortor a lorem varius fermentum sit amet eget est. Phasellus non purus
            vel lacus ultricies eleifend. Donec efficitur magna et nunc lobortis,
            at faucibus odio interdum. Nullam faucibus, mauris et facilisis
            vestibulum, ligula metus consequat elit, eget elementum turpis lectus
            nec nulla. Suspendisse tincidunt scelerisque orci, sed sodales purus
            malesuada nec.
          </p>
          <div className="mt-6 flex flex-col items-center">
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
        </div>

        {/* Right Section: Profile Image */}
        <div className="w-1/2 flex justify-center">
          <Image
            src="/profile.jpg"
            alt="Profile picture"
            width={0}
            height={0}
            sizes="50vw" // Scales the image to take 50% of the viewport width
            className="w-[20vw] h-auto shadow-xl" // Adjust 30vw to control relative size
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Intro;
