// BlobBackground.jsx or BlobBackground.tsx
"use client";

import { motion } from 'framer-motion';
import React from 'react';

const BlobBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden flex justify-center items-center">
      {/* Top left blob */}
      <motion.div
        className="absolute -translate-x-1/2 -translate-y-1/2 top-[15%] left-[15%] w-[30vw] h-[30vw] bg-primary rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"
        animate={{ x: [0, "4vw", "-4vw", 0], y: [0, "-3vh", "3vh", 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Top right blob */}
      <motion.div
        className="absolute -translate-x-1/2 -translate-y-1/2 top-[15%] right-[15%] w-[30vw] h-[30vw] bg-primary rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"
        animate={{ x: [0, "-4vw", "4vw", 0], y: [0, "3vh", "-3vh", 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Bottom blob */}
      <motion.div
        className="absolute -translate-x-1/2 -translate-y-1/2 bottom-[15%] w-[30vw] h-[30vw] bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"
        animate={{ x: [0, "3vw", "-3vw", 0], y: [0, "-4vh", "4vh", 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

export default BlobBackground;
