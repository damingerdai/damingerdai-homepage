import * as React from "react";

export const AboutMe: React.FC = () => {
  return (
    <ul role="list" className="text-sm list-inside list-disc pl-5 space-y-3">
      <li>🖥 I&acute;m a full-stack developer based in Shanghai, China.</li>
      <li>💼 I am looking for a job .</li>
      <li>
        ✍️ I wrote dev articles on
        <a className="text-blue-500 pl-1" href="https://damingerdai.github.io">
          My Blog
        </a>
        .
      </li>
      <li>
        🧐 I&acute;m interested in full stack, including front, backend and
        devops.
      </li>
    </ul>
  );
};
