import Image from "next/image";

import cssLogo from "@/assets/tech/css.svg";
import dockerLogo from "@/assets/tech/docker.svg";
import gitLogo from "@/assets/tech/git.svg";
import htmlLogo from "@/assets/tech/html.svg";
import javascriptLogo from "@/assets/tech/javascript.svg";
import nestjsLogo from "@/assets/tech/nestjs.svg";
import nodejsLogo from "@/assets/tech/nodejs.svg";
import npmLogo from "@/assets/tech/npm.svg";
import nxLogo from "@/assets/tech/nx.svg";
import openapiLogo from "@/assets/tech/openapi.svg";
import playwrightLogo from "@/assets/tech/playwright.svg";
import pnpmLogo from "@/assets/tech/pnpm.svg";
import postgresqlLogo from "@/assets/tech/postgresql.svg";
import prismaLogo from "@/assets/tech/prisma.svg";
import pwaLogo from "@/assets/tech/pwa.svg";
import reactLogo from "@/assets/tech/react.svg";
import storybookLogo from "@/assets/tech/storybook-icon.svg";
import tailwindcssLogo from "@/assets/tech/tailwindcss.svg";
import typescriptLogo from "@/assets/tech/typescript.svg";
import viteLogo from "@/assets/tech/vite.svg";
import vitestLogo from "@/assets/tech/vitest.svg";
import zodLogo from "@/assets/tech/zod.svg";

import Reveal from "@/components/animations/Reveal";

import styles from "./skills.module.css";

type SkillItem = {
  id: string;
  label: string;
  logo: typeof cssLogo;
  url: string;
};

const Skills = () => {
  const logos: SkillItem[] = [
    { id: "react", label: "React", logo: reactLogo, url: "https://react.dev/" },
    {
      id: "css",
      label: "CSS",
      logo: cssLogo,
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      id: "docker",
      label: "Docker",
      logo: dockerLogo,
      url: "https://www.docker.com/",
    },
    { id: "git", label: "Git", logo: gitLogo, url: "https://git-scm.com/" },
    {
      id: "html",
      label: "HTML",
      logo: htmlLogo,
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      id: "javascript",
      label: "JavaScript",
      logo: javascriptLogo,
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      id: "nestjs",
      label: "NestJS",
      logo: nestjsLogo,
      url: "https://nestjs.com/",
    },
    {
      id: "nodejs",
      label: "Node.js",
      logo: nodejsLogo,
      url: "https://nodejs.org/",
    },
    { id: "npm", label: "npm", logo: npmLogo, url: "https://www.npmjs.com/" },
    { id: "nx", label: "Nx", logo: nxLogo, url: "https://nx.dev/" },
    {
      id: "openapi",
      label: "OpenAPI",
      logo: openapiLogo,
      url: "https://www.openapis.org/",
    },
    {
      id: "playwright",
      label: "Playwright",
      logo: playwrightLogo,
      url: "https://playwright.dev/",
    },
    {
      id: "postgresql",
      label: "PostgreSQL",
      logo: postgresqlLogo,
      url: "https://www.postgresql.org/",
    },
    {
      id: "prisma",
      label: "Prisma",
      logo: prismaLogo,
      url: "https://www.prisma.io/",
    },
    {
      id: "pwa",
      label: "PWA",
      logo: pwaLogo,
      url: "https://web.dev/progressive-web-apps/",
    },
    { id: "pnpm", label: "pnpm", logo: pnpmLogo, url: "https://pnpm.io/" },
    {
      id: "storybook",
      label: "Storybook",
      logo: storybookLogo,
      url: "https://storybook.js.org/",
    },
    {
      id: "tailwindcss",
      label: "Tailwind CSS",
      logo: tailwindcssLogo,
      url: "https://tailwindcss.com/",
    },
    {
      id: "typescript",
      label: "TypeScript",
      logo: typescriptLogo,
      url: "https://www.typescriptlang.org/",
    },
    { id: "vite", label: "Vite", logo: viteLogo, url: "https://vitejs.dev/" },
    {
      id: "vitest",
      label: "Vitest",
      logo: vitestLogo,
      url: "https://vitest.dev/",
    },
    { id: "zod", label: "Zod", logo: zodLogo, url: "https://zod.dev/" },
  ];

  const loop = [...logos, ...logos, ...logos];

  return (
    <section id="skills" className="py-32 max-w-225 mx-auto">
      <Reveal
        as="div"
        delay={60}
        className="flex items-center gap-4 text-(--color-text-primary)"
      >
        <span className="font-mono text-lg font-semibold text-(--color-accent)">
          04.
        </span>
        <h2 className="text-2xl font-semibold sm:text-3xl">Skills</h2>
        <span className="h-px flex-1 bg-(--color-bg-tertiary)" />
      </Reveal>

      <Reveal
        as="p"
        delay={120}
        className="mt-6 max-w-2xl text-base leading-8 text-(--color-text-muted)"
      >
        Tools and frameworks I use to ship fast, maintainable products.
      </Reveal>

      <ul className="sr-only">
        {logos.map((item) => (
          <li key={`sr-${item.id}`}>{item.label}</li>
        ))}
      </ul>

      <Reveal
        as="div"
        delay={180}
        className={`${styles.marquee} relative overflow-hidden w-full mt-10 cursor-pointer`}
      >
        <div
          className={`${styles.track} flex gap-8 items-center`}
          aria-hidden="true"
        >
          {loop.map(({ id, logo, label, url }, i) => (
            <div
              className="flex-none flex items-center justify-center gap-3 min-w-34 h-18 px-4"
              key={`${id}-${i}`}
            >
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <Image
                  src={logo}
                  alt={label}
                  width={50}
                  className="object-contain"
                />
              </a>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
};

export default Skills;
