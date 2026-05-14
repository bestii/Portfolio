import { faNpm, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Reveal from "@/components/animations/Reveal";

import styles from "./skills.module.css";

type SkillItem = {
  id: string;
  label: string;
  icon?: typeof faReact;
  fallback?: string;
};

const Skills = () => {
  const logos: SkillItem[] = [
    { id: "nextjs", label: "Next.js", fallback: "N" },
    { id: "react", label: "React", icon: faReact },
    { id: "npm", label: "npm", icon: faNpm },
    { id: "pnpm", label: "pnpm", fallback: "pn" },
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
              {l.icon ? (
                <FontAwesomeIcon icon={l.icon} size="2x" />
              ) : (
                <span className={styles.fallback}>{l.fallback}</span>
              )}
              <span className={styles.label}>{l.label}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
};

export default Skills;
