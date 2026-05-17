import Image from "next/image";

import cssLogo from "@/assets/tech/css.svg";
import dockerLogo from "@/assets/tech/docker.svg";
import gitLogo from "@/assets/tech/git.svg";
import htmlLogo from "@/assets/tech/html.svg";
import javascriptLogo from "@/assets/tech/javascript.svg";
import nestjsLogo from "@/assets/tech/nestjs.svg";
import nextjsLogo from "@/assets/tech/nextjs.svg";
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
};

const Skills = () => {
  const logos: SkillItem[] = [
    { id: "react", label: "React", logo: reactLogo },
    { id: "css", label: "CSS", logo: cssLogo },
    { id: "docker", label: "Docker", logo: dockerLogo },
    { id: "git", label: "Git", logo: gitLogo },
    { id: "html", label: "HTML", logo: htmlLogo },
    { id: "javascript", label: "JavaScript", logo: javascriptLogo },
    { id: "nestjs", label: "NestJS", logo: nestjsLogo },
    { id: "nextjs", label: "Next.js", logo: nextjsLogo },
    { id: "nodejs", label: "Node.js", logo: nodejsLogo },
    { id: "npm", label: "npm", logo: npmLogo },
    { id: "nx", label: "Nx", logo: nxLogo },
    { id: "openapi", label: "OpenAPI", logo: openapiLogo },
    { id: "playwright", label: "Playwright", logo: playwrightLogo },
    { id: "postgresql", label: "PostgreSQL", logo: postgresqlLogo },
    { id: "prisma", label: "Prisma", logo: prismaLogo },
    { id: "pwa", label: "PWA", logo: pwaLogo },
    { id: "pnpm", label: "pnpm", logo: pnpmLogo },
    { id: "storybook", label: "Storybook", logo: storybookLogo },
    { id: "tailwindcss", label: "Tailwind CSS", logo: tailwindcssLogo },
    { id: "typescript", label: "TypeScript", logo: typescriptLogo },
    { id: "vite", label: "Vite", logo: viteLogo },
    { id: "vitest", label: "Vitest", logo: vitestLogo },
    { id: "zod", label: "Zod", logo: zodLogo },
  ];

  const loop = [...logos, ...logos];

  return (
    <section id="skills" className="py-24 max-w-225 mx-auto">
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

      <Reveal as="div" delay={180} className={`${styles.marquee} mt-10`}>
        <div className={styles.track} aria-hidden="true">
          {loop.map((l, i) => (
            <div className={styles.logo} key={`${l.id}-${i}`}>
              <Image
                src={l.logo}
                alt=""
                width={40}
                height={40}
                className={styles.icon}
              />
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
};

export default Skills;
