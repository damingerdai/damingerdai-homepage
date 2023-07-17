import * as React from "react";
import { LanguageIcon } from "@/components/language-icon";
import { Divider } from "../divier";

export const LanguageAndTools: React.FC = () => {
  const languages = [
    {
      name: "angular",
      alt: "angular",
    },
    {
      name: "react",
      alt: "react",
    },
    {
      name: "golang",
      alt: "golang",
    },
    {
      name: "javascript",
      alt: "javascript",
    },
    {
      name: "java",
      alt: "java",
    },
    {
      name: "springboot",
      alt: "sprint boot",
    },
    {
      name: "nodejs",
      alt: "nodejs",
    },
    {
      name: "docker",
      alt: "docker",
    },
    {
      name: "kubernetes",
      alt: "kubernetes",
    },
    {
      name: "nextjs",
      alt: "nextjs",
    },
  ];

  return (
    <>
      <div className="mt-4">
        <a href="#languages-and-tools">
          <h2 id="languages-and-tools">🌈 Languages and Tools:</h2>
        </a>
      </div>
      <Divider className="mt-2" />
      <div className="mt-4 flex flex-wrap">
        {languages.map(({ name, alt }) => (
          <LanguageIcon key={name} name={name} alt={alt} />
        ))}
      </div>
    </>
  );
};
