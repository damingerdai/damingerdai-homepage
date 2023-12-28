/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import { Divider } from "../divier";

export const MyMostUsedLanguages: React.FC = () => {

  return (
    <>
      <div className="mt-4">
        <a href="#my-most-used-languages">
          <h2 className="text-lg" id="my-most-used-languages">
            <strong>📫 My most used languages</strong>
          </h2>
        </a>
      </div>
      <Divider className="mt-2" />
      <div className="mt-4">
        <img
          className="w-full"
          src="https://github-readme-stats.damingerdai.com/api/top-langs?username=damingerdai&show_icons=true&count_private=true&theme=gotham&layout=compact"
          alt="my most used languages"
        />
      </div>
    </>
  );
};
