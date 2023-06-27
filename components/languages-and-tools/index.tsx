import * as React from "react";
import { LanguageIcon } from "@/components/language-icon";

interface LanguageAndToolsProps {
  languages: Array<Record<"name" | "alt", string>>;
}

export const LanguageAndTools: React.FC<LanguageAndToolsProps> = ({
  languages,
}) => {
  return (
    <>
      <div className="mt-4">
        <a href="#languages-and-tools">
          <h2 id="languages-and-tools">🌈 Languages and Tools:</h2>
        </a>
      </div>
      <div className="mt-4 flex flex-wrap">
        {languages.map(({ name, alt }) => (
          <LanguageIcon key={name} name={name} alt={alt} />
        ))}
      </div>
    </>
  );
};
