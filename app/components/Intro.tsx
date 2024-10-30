"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import IntroCard from "./IntroCard";

const Intro: React.FC = () => {
  const ref = useRef(null);

  // Track scrollYProgress relative to the element, accounting for the navbar height
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 24px", "end start"], // Adjusting start offset to account for navbar height
  });

  // Map scrollYProgress to an opacity range for smooth fade effect
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <motion.section
      ref={ref}
      id="intro"
      style={{ opacity }}
      className="min-h-screen flex"
      transition={{
        opacity: { duration: 0.8, ease: "easeInOut" }, // Apply transition here
      }}
    >
      {/* Left Section: Primary Color Background with Text */}
      <div className="w-1/2 bg-primary flex flex-col justify-center p-10 text-secondary">
        <div className="container mx-auto">
          <h2 className="text-6xl font-medium text-center lg:text-left mb-10">
            Allow me to introduce myself...
          </h2>
          <p className="mt-8 text-lg text-center lg:text-left leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec
            tortor a lorem varius fermentum sit amet eget est. Phasellus non
            purus vel lacus ultricies eleifend. Donec efficitur magna et nunc
            lobortis, at faucibus odio interdum. Nullam faucibus, mauris et
            facilisis vestibulum, ligula metus consequat elit, eget elementum
            turpis lectus nec nulla. Suspendisse tincidunt scelerisque orci, sed
            sodales purus malesuada nec.
          </p>
        </div>
      </div>

      {/* Right Section: Split Color Background for Profile Image */}
      <div
        className="w-1/2 flex justify-center items-center"
        style={{
          background:
            "linear-gradient(to right, var(--primary) 50%, var(--tertiary) 50%)",
        }}
      >
        <IntroCard />
      </div>
    </motion.section>
  );
};

export default Intro;
