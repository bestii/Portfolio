import Reveal from "@/components/animations/Reveal";

const Introduction = () => {
  return (
    <section
      id="introduction"
      className="relative isolate flex min-h-[calc(100svh-4.25rem)] items-center overflow-hidden px-6 py-16 md:px-16 lg:px-24"
      aria-label="Introduction"
    >
      <div className="mx-auto w-full max-w-4xl">
        <Reveal
          as="p"
          delay={40}
          className="font-mono text-sm tracking-widest text-(--color-accent)"
        >
          Hi, my name is
        </Reveal>

        <Reveal
          as="h1"
          delay={130}
          className="mt-3 text-4xl font-bold leading-tight text-(--color-text-primary) sm:text-6xl md:text-7xl"
        >
          Bestin John.
        </Reveal>

        <Reveal
          as="h2"
          delay={220}
          className="mt-2 text-4xl font-bold leading-tight text-(--color-text-muted) sm:text-6xl md:text-7xl"
        >
          I build things for the web.
        </Reveal>

        <Reveal
          as="p"
          delay={320}
          className="mt-8 max-w-2xl text-base leading-8 text-(--color-text-muted) md:text-lg"
        >
          I am a frontend developer focused on building fast, accessible, and
          thoughtful digital experiences with React and modern web technologies.
        </Reveal>
      </div>
    </section>
  );
};

export default Introduction;
