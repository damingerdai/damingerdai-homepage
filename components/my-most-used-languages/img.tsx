'use client';
/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import { useTheme } from "next-themes";

export const MyMostUsedLanguagesImg = () => {
    const {resolvedTheme} = useTheme();
    const url = React.useMemo(() => {
        if (resolvedTheme === "dark") {
            return "https://github-readme-stats.damingerdai.com/api/top-langs?username=damingerdai&show_icons=true&count_private=true&theme=gotham&layout=compact";
        } else if (resolvedTheme === 'light') {
            return "https://github-readme-stats.damingerdai.com/api/top-langs?username=damingerdai&show_icons=true&count_private=true&theme=default_repocard&layout=compact";
        } else {
            return "https://github-readme-stats.damingerdai.com/api/top-langs?username=damingerdai&show_icons=true&count_private=true&theme=default_repocard&layout=compact"
        }
    }, [resolvedTheme]);

    return <img
        className="w-full"
        src={url}
        alt="my most used languages"
    />
}