"use client";
import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "../icons";

export const ThemeToggleButton: React.FC = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        style={{ display: "inline-block" }}
        key={resolvedTheme}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <button
          aria-label="toggle theme"
          className="p-2 rounded-lg bg-purple-500 dark:bg-orange-500"
          onClick={() => setTheme(isDark ? "light" : "dark")}
        >
          {isDark ? <MoonIcon /> : <SunIcon />}
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
