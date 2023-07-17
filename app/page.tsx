import { AboutMe } from "@/components/about-me";
import { BlogLink } from "@/components/blog-link";
import { Divider } from "@/components/divier";
import { Title } from "@/components/title";
import { LanguageAndTools } from "@/components/languages-and-tools";
import Image from "next/image";
import { MyGithubStats } from "@/components/my-github-stats";
import { MyMostUsedLanguages } from "@/components/my-most-used-languages";
import { MyOpenSource } from "@/components/my-open-source";

export default function Home() {

  return (
    <main className="flex min-h-screen items-center flex-col px-4 pt-4 md:px-24">
      <div className="max-w-lg pb-4">
        <div className="mb-4 text-sm">
          <a
            className="hover:text-blue-500"
            href="https://github.com/damingerdai/"
            target="_blank"
          >
            damingerdai
          </a>
          /README.md
        </div>
        <div className="mb-4">
          <Image
            src="/damingerdai.webp"
            height={600}
            width={500}
            sizes="100%"
            alt={"damingerdai"}
            placeholder="blur"
            blurDataURL="/damingerdai.webp"
          />
        </div>
        <Divider />
        <div className="flex items-start mt-2">
          <Title />
        </div>
        <Divider />
        <div className="mt-4">
          <h2 className="leading-normal text-[14px]">
            I am damingerdai, a full stack developer from China 🚀.
          </h2>
        </div>
        <div className="mt-4">
          <BlogLink />
        </div>
        <div className="mt-4">
          <AboutMe />
        </div>
        <LanguageAndTools />
        <MyGithubStats />
        <MyMostUsedLanguages />
        <MyOpenSource />
      </div>
    </main>
  );
}
