import * as React from "react";
import { ThemeToggleButton } from "../theme-toggle-button";

export const Navbar = () => {
  return (
    <nav className="sticky px-4 h-16 w-full z-10 flex items-center shadow-md">
      <h1 className="font-bold">大明二代</h1>
      <div className="flex-1"></div>
      <ThemeToggleButton />
    </nav>
  );
};
