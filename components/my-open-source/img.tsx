'use client';
/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import cls from 'classnames';
import { useTheme } from "next-themes";

export const MyOpenSourceImgs = () => {
    const { resolvedTheme } = useTheme();
    const theme = React.useMemo(() => {
        if (resolvedTheme === "dark") {
            return "gotham";
        } else if (resolvedTheme === 'light') {
            return 'default_repocard';
        } else {
            return 'default_repocard'
        }
    }, [resolvedTheme]);

    const images = React.useMemo(() => {
        return [
            {
                url: `https://github-readme-stats.damingerdai.com/api/pin/?username=damingerdai&repo=hoteler&theme=${theme}`,
                alt: 'hoteler',
            },
            {
                url: `https://github-readme-stats.damingerdai.com/api/pin/?username=damingerdai&repo=health-master&theme=${theme}`,
                alt: 'health-master',
            },
            {
                url: `https://github-readme-stats.damingerdai.com/api/pin/?username=damingerdai&repo=dotfile&theme=${theme}`,
                alt: 'damingerdai-dotfile',
            }
        ]
    }, [theme])


    return <React.Fragment>
        {images.map((img, i) => <img key={img.alt} className={cls('w-full', i > 0 ? 'mt-4' : '')} src={img.url} alt={img.alt} />)}
    </React.Fragment>

}