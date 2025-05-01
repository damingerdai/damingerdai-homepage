"use client";
/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import { useTheme } from "next-themes";

export const MyGithubStatsImg = () => {
  const { resolvedTheme } = useTheme();
  const url = React.useMemo(() => {
    if (resolvedTheme === "dark") {
      return "https://github-readme-stats.damingerdai.com/api?username=damingerdai&theme=dark";
    } else if (resolvedTheme === "light") {
      return "https://github-readme-stats.damingerdai.com/api?username=damingerdai&theme=default";
    } else {
      return "https://github-readme-stats.damingerdai.com/api?username=damingerdai&theme=default";
    }
  }, [resolvedTheme]);

  return (
    <img
      className="w-full"
      width={500}
      height={220}
      src={url}
      alt="damingerdai's github stat"
    />
  );
};
