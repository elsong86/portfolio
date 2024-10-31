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
      className="min-h-screen flex items-center justify-center text-black"
      transition={{
        opacity: { duration: 0.8, ease: "easeInOut" },
      }}
    >
      <div className="container mx-auto flex flex-row items-center justify-between p-10">
        {/* Left Section: Text Content */}
        <div className="w-1/2 p-6">
          <h2 className="text-6xl font-medium mb-6">Allow me to introduce myself...</h2>
          <p className="mt-4 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec
            tortor a lorem varius fermentum sit amet eget est. Phasellus non purus
            vel lacus ultricies eleifend. Donec efficitur magna et nunc lobortis,
            at faucibus odio interdum. Nullam faucibus, mauris et facilisis
            vestibulum, ligula metus consequat elit, eget elementum turpis lectus
            nec nulla. Suspendisse tincidunt scelerisque orci, sed sodales purus
            malesuada nec.
          </p>
        </div>

        {/* Right Section: IntroCard Component */}
        <div className="w-1/2 flex justify-center">
          <IntroCard />
        </div>
      </div>
    </motion.section>
  );
};

export default Intro;
