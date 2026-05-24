import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import Reveal from "@/components/animations/Reveal";

type Project = {
  title: string;
  description: string;
  tech: string[];
  links: {
    live?: string;
    github?: string;
  };
  image: string;
};

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  return (
    <section id="projects" className="py-32 max-w-225 mx-auto">
      <Reveal
        as="div"
        delay={60}
        className="flex items-center gap-4 text-(--color-text-primary)"
      >
        <span className="font-mono text-lg font-semibold text-(--color-accent)">
          05.
        </span>
        <h2 className="text-2xl font-semibold sm:text-3xl">Some Things I&apos;ve Built</h2>
        <span className="h-px flex-1 bg-(--color-bg-tertiary)" />
      </Reveal>

      <div className="mt-12 space-y-24">
        {projects.map((project, i) => (
          <Reveal key={i} as="div" delay={120 + i * 80}>
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div className={`${i % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}>
                <div className="relative group overflow-hidden rounded-lg border border-(--color-bg-tertiary)">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full object-cover transition duration-300 group-hover:opacity-60"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-(--color-accent)/20 opacity-0 group-hover:opacity-100 transition duration-300" />
                </div>
              </div>

              <div className={`${i % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}>
                <p className="font-mono text-sm text-(--color-accent)">
                  Featured Project
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-(--color-text-primary)">
                  {project.title}
                </h3>

                <div className="mt-6 rounded-md bg-(--color-bg-secondary) p-6 text-base leading-8 text-(--color-text-muted)">
                  <p>{project.description}</p>
                </div>

                <ul className="mt-6 flex flex-wrap gap-3 font-mono text-sm text-(--color-text-secondary)">
                  {project.tech.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>

                <div className="mt-6 flex gap-5">
                  {project.links.github && (
                    <Link
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-(--color-text-primary) transition-colors hover:text-(--color-accent)"
                      aria-label="GitHub"
                    >
                      <FontAwesomeIcon icon={faGithub} size="lg" />
                    </Link>
                  )}
                  {project.links.live && (
                    <Link
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-(--color-text-primary) transition-colors hover:text-(--color-accent)"
                      aria-label="Live site"
                    >
                      <ExternalLink size={20} />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Projects;
