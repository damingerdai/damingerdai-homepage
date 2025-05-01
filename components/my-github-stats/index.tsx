import * as React from "react";
import { Divider } from "../divier";
import { MyGithubStatsImg } from "./img";

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
        <MyGithubStatsImg />
      </div>
    </>
  );
};
