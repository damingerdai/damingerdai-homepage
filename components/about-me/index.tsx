import * as React from "react";

export const AboutMe: React.FC = () => {
  return (
    <ul role="list" className="text-sm list-inside list-disc pl-5 space-y-3">
      <li>🖥 I&acute;m fullstack developer based in Shanghai, China.</li>
      <li>
        💼 I was working at&ensp;
        <a
          className="text-blue-500"
          href="https://www.linkedin.com/company/pwc-ac-shanghai"
        >
          PwC Acceleration Center Shanghai
        </a>
        .
      </li>
      <li>
        ✍️ I wrote dev articles on &ensp;
        <a className="text-blue-500" href="https://damingerdai.github.io">
          My Blog
        </a>
        .
      </li>
      <li>
        🧐 I&acute;m Interested in full stack, including front, backend and
        devops.
      </li>
    </ul>
  );
};
