/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import { Divider } from "../divier";

export const MyGithubStats: React.FC = () => {
  return (
    <>
      <div className="mt-4">
        <a href="#my-github-stats">
          <h2 className="text-lg" id="my-github-stats">
            <strong>🌱 My github stats</strong>
          </h2>
        </a>
      </div>
      <Divider className="mt-2" />
      <div className="mt-4">
        <img
          className="w-full"
          src="https://github-readme-stats.damingerdai.com/api?username=damingerdai"
          alt="damingerdai's github stat"
        />
      </div>
    </>
  );
};
