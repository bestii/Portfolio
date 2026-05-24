import Reveal from "@/components/animations/Reveal";
import { getAbout } from "@/services/cmsService";
import AboutMePortrait from "./AboutMePortrait";

const AboutMe = async () => {
  const about = await getAbout();
  if (!about) return null;

  return (
    <section id="about" className="py-32 max-w-225 mx-auto">
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
            {about.paragraphs.map((text, i) => (
              <Reveal key={i} as="p" delay={120 + i * 60}>
                {text}
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal as="div" delay={180} className="lg:pt-4">
          <AboutMePortrait />
        </Reveal>
      </div>
    </section>
  );
};

export default AboutMe;
