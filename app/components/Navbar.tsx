'use client'

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

// Define the types for the position state
interface Position {
  left: number;
  width: number;
  opacity: number;
}

const menuItems = [
  { name: "Intro", href: "#intro" },
  { name: "Projects", href: "#projects" },
  { name: "Toolkit", href: "#toolkit" },
  { name: "About Me", href: "#aboutme" },
  { name: "Blog", href: "#blog" },
];

const linkStyles = "relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:px-3 md:text-base";

const Cursor = ({ position }: { position: Position }) => {
  return (
    <motion.li
      animate={{
        left: position.left,
        width: position.width,
        opacity: position.opacity,
      }}
      className="absolute z-0 h-7 rounded-full bg-black md:h-12"
    />
  );
};

const Navbar: React.FC = () => {
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  // Create an array of refs only once using useMemo
  const refs = useMemo(
    () => menuItems.map(() => React.createRef<HTMLAnchorElement>()),
    []
  );

  return (
    <NavigationMenu>
      <NavigationMenuList
        className="relative mx-auto flex w-fit rounded-full border-2 border-black bg-white p-1"
      >
        {menuItems.map((item, index) => (
          <NavigationMenuItem key={item.name}>
            <NavigationMenuLink
              ref={refs[index]}
              href={item.href}
              className={linkStyles}
              onMouseEnter={() => {
                const currentRef = refs[index].current;
                if (!currentRef) return;

                const { width } = currentRef.getBoundingClientRect();

                setPosition({
                  width: width + 8,
                  opacity: 1,
                  left: currentRef.offsetLeft - 8,
                });
              }}
              onMouseLeave={() => {
                setPosition((prev) => ({ ...prev, opacity: 0 }));
              }}
            >
              {item.name}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
        <Cursor position={position} />
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;
