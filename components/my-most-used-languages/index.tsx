import * as React from "react";
import { Divider } from "../divier";
import { MyMostUsedLanguagesImg } from "./img";

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
        <MyMostUsedLanguagesImg />
      </div>
    </>
  );
};
