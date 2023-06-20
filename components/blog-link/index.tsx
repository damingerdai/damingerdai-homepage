import * as React from "react";

export const BlogLink: React.FC = () => {
  return (
    <a
      className="text-white text-[12px]"
      href="https://damingerdai.github.io/"
      target="_blank"
    >
      <span className="bg-gray-600 p-1 rounded-l">Blog&ensp;</span>
      <span className="bg-green-500 p-1 rounded-r">
        damingerdai&acute;s blog
      </span>
    </a>
  );
};
