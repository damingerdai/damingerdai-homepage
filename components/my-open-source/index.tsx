/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import cls from 'classnames';
import { Divider } from "../divier";

export const MyOpenSource: React.FC = () => {
  const images = [
    {
        url: 'https://github-readme-stats.damingerdai.com/api/pin/?username=damingerdai&repo=hoteler',
        alt: 'hoteler',
    },
    {
        url: 'https://github-readme-stats.damingerdai.com/api/pin/?username=damingerdai&repo=health-master',
        alt: 'health-master',
    },
    {
        url: 'https://github-readme-stats.damingerdai.com/api/pin/?username=damingerdai&repo=dotfile',
        alt: 'damingerdai-dotfile',
    }
  ]

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
        {images.map((img, i) => <img key={img.alt} className={cls('w-full',  i > 0 ? 'mt-4' : '')} src={img.url} alt={img.alt}/>)}
      </div>
    </>
  );
};
