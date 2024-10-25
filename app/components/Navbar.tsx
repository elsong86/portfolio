import React from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const Navbar: React.FC = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex space-x-4">
        <NavigationMenuItem>
          <NavigationMenuLink
            href="#intro"
            className="p-2 rounded-full text-black hover:bg-white hover:bg-opacity-20 hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Intro
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="#projects"
            className="p-2 rounded-full text-black hover:bg-white hover:bg-opacity-20 hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Projects
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="#toolkit"
            className="p-2 rounded-full text-black hover:bg-white hover:bg-opacity-20 hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Toolkit
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="#aboutme"
            className="p-2 rounded-full text-black hover:bg-white hover:bg-opacity-20 hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            About Me
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="#blog"
            className="p-2 rounded-full text-black hover:bg-white hover:bg-opacity-20 hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Blog
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;
