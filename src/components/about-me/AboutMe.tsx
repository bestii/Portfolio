import Image from "next/image";

import Reveal from "@/components/animations/Reveal";
import portraitImage from "@/assets/images/portrait.jpg";

const technologies = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Accessibility",
];

const AboutMe = () => {
  return (
    <section id="about" className="py-24">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,420px)] lg:items-start">
        <div>
          <Reveal
            as="div"
            delay={60}
            className="flex items-center gap-4 text-(--color-text-primary)"
          >
            <span className="font-mono text-lg font-semibold text-(--color-accent)">
              01.
            </span>
            <h2 className="text-2xl font-semibold sm:text-3xl">About Me</h2>
            <span className="h-px flex-1 bg-(--color-bg-tertiary)" />
          </Reveal>

          <div className="mt-10 space-y-5 text-base leading-8 text-(--color-text-muted) md:text-lg">
            <Reveal as="p" delay={120}>
              I build thoughtful digital products with a focus on clarity,
              performance, and accessibility.
            </Reveal>

            <Reveal as="p" delay={180}>
              My work has ranged from marketing sites to product interfaces, and
              I enjoy shaping experiences that feel polished without getting in
              the way of the content.
            </Reveal>

            <Reveal as="p" delay={240}>
              Here are a few technologies I have been working with recently:
            </Reveal>
          </div>

          <Reveal
            as="ul"
            delay={300}
            className="mt-8 grid gap-3 text-sm font-mono text-(--color-text-secondary) sm:grid-cols-2"
          >
            {technologies.map((technology) => (
              <li key={technology} className="flex items-center gap-3">
                <span className="text-(--color-accent)">▹</span>
                <span>{technology}</span>
              </li>
            ))}
          </Reveal>
        </div>

        <Reveal as="div" delay={180} className="lg:pt-4">
          <div className="group relative mx-auto w-full max-w-md">
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-5 translate-y-5 rounded-2xl border-2 border-(--color-accent) transition-transform duration-300 ease-out group-hover:translate-x-8 group-hover:translate-y-8"
            />

            <div className="relative overflow-hidden rounded-2xl bg-(--color-bg-secondary) shadow-2xl shadow-black/20 ring-1 ring-white/10">
              <Image
                src={portraitImage}
                alt="Portrait of Bestin John"
                className="h-auto w-full object-cover grayscale saturate-0 contrast-110 transition duration-300 ease-out group-hover:grayscale-0 group-hover:saturate-100 group-hover:contrast-100"
                priority={false}
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default AboutMe;
