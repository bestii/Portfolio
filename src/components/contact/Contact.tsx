import Reveal from "@/components/animations/Reveal";
import Link from "next/link";

const Contact = () => {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <Reveal
          as="p"
          delay={60}
          className="font-mono text-lg text-(--color-accent)"
        >
          04. What’s Next?
        </Reveal>

        <Reveal
          as="h2"
          delay={120}
          className="mt-4 text-4xl font-semibold tracking-tight text-(--color-text-primary) sm:text-5xl md:text-6xl"
        >
          Get In Touch
        </Reveal>

        <Reveal
          as="p"
          delay={180}
          className="mt-8 max-w-2xl text-lg leading-9 text-(--color-text-muted) sm:text-xl"
        >
          Although I’m not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I’ll try my best to get back to you!
        </Reveal>

        <Reveal as="div" delay={240} className="mt-14">
          <Link
            href="mailto:hello@bestinjohn.com"
            className="inline-flex min-w-52 items-center justify-center rounded-md border border-(--color-accent) px-8 py-5 font-mono text-lg text-(--color-accent) transition duration-300 hover:-translate-y-1 hover:bg-(--color-accent)/10 hover:shadow-lg hover:shadow-black/10"
          >
            Say Hello
          </Link>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
