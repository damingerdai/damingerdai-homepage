/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import { Divider } from "../divier";
import { MyOpenSourceImgs } from "./img";

export const MyOpenSource: React.FC = () => {

  return (
    <>
      <div className="mt-4">
        <a href="#my-open-source">
          <h2 className="text-lg" id="my-open-source">
            <strong>💬 My open source</strong>
          </h2>
        </a>
      </div>
      <Divider className="mt-2" />
      <div className="mt-4 flex flex-wrap">
        <MyOpenSourceImgs/>
      </div>
    </>
  );
};
