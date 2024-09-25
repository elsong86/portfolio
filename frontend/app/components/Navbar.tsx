// app/components/Navbar.tsx
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
          <NavigationMenuLink href="#aboutme" className="p-2 rounded-full text-black hover:bg-white hover:bg-opacity-20">
            About Me
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#projects" className="p-2 rounded-full text-black hover:bg-white hover:bg-opacity-20">
            Projects
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#experience" className="p-2 rounded-full text-black hover:bg-white hover:bg-opacity-20">
            Experience
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#skills" className="p-2 rounded-full text-black hover:bg-white hover:bg-opacity-20">
            Skills
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#blog" className="p-2 rounded-full text-black hover:bg-white hover:bg-opacity-20">
            Blog
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;
