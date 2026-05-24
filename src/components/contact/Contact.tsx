import Reveal from "@/components/animations/Reveal";
import Link from "next/link";

type Props = {
  subheading: string;
  heading: string;
  description: string;
  buttonText: string;
  email: string;
};

const Contact = ({ subheading, heading, description, buttonText, email }: Props) => {
  return (
    <section id="contact" className="py-32 sm:py-40">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <Reveal
          as="p"
          delay={60}
          className="font-mono text-lg text-(--color-accent)"
        >
          {subheading}
        </Reveal>

        <Reveal
          as="h2"
          delay={120}
          className="mt-4 text-2xl font-semibold tracking-tight text-(--color-text-primary) sm:text-5xl"
        >
          {heading}
        </Reveal>

        <Reveal
          as="p"
          delay={180}
          className="mt-8 max-w-2xl text-lg leading-9 text-(--color-text-muted)"
        >
          {description}
        </Reveal>

        <Reveal as="div" delay={240} className="mt-14">
          <Link
            href={`mailto:${email}`}
            className="inline-flex items-center justify-center rounded-md border border-(--color-accent) px-6 py-4 font-mono text-lg text-(--color-accent) transition duration-300 hover:-translate-y-1 hover:bg-(--color-accent)/10 hover:shadow-lg hover:shadow-black/10"
          >
            {buttonText}
          </Link>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
