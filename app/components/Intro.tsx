import React from "react";
import Image from "next/image";

const AboutMe: React.FC = () => {
  return (
    <section id="aboutme" className="py-32 bg-gray-100 text-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">Allow me to introduce myself...</h2>
        <div className="flex flex-col lg:flex-row items-center justify-center">
          {/* Text block */}
          <div className="max-w-4xl lg:w-2/3">
            <p className="mt-8 text-lg text-center lg:text-left leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec tortor a lorem varius fermentum sit amet eget est. Phasellus non purus vel lacus ultricies
              eleifend. Donec efficitur magna et nunc lobortis, at faucibus odio interdum. Nullam faucibus, mauris et facilisis vestibulum, ligula metus consequat elit, eget
              elementum turpis lectus nec nulla. Suspendisse tincidunt scelerisque orci, sed sodales purus malesuada nec.
            </p>
            <p className="mt-8 text-lg text-center lg:text-left leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec tortor a lorem varius fermentum sit amet eget est. Phasellus non purus vel lacus ultricies
              eleifend. Donec efficitur magna et nunc lobortis, at faucibus odio interdum. Nullam faucibus, mauris et facilisis vestibulum, ligula metus consequat elit, eget
              elementum turpis lectus nec nulla. Suspendisse tincidunt scelerisque orci, sed sodales purus malesuada nec.
            </p>
          </div>
          {/* Image block */}
          <div className="mt-8 lg:mt-0 lg:ml-8 flex flex-col items-center">
            <Image
              src="/profile.jpg"
              alt="Profile picture"
              width={300}  // Set desired width
              height={300} // Set desired height
              className="rounded-full"
            />
            {/* Social icons */}
            <div className="mt-6 flex space-x-4">
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
      </div>
    </section>
  );
};

export default AboutMe;
