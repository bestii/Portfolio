import Image from "next/image";
import { imgPortrait } from "~/app/_assets";
import { api } from "~/trpc/server";

const AboutMe = async () => {
  const aboutMe = await api.portfolio.about();

  return (
    <section id="about" className="my-10 md:my-32">
      <div className="mb-10">
        <h2 className="text-2xl font-semibold">{aboutMe.title}</h2>
        <div
          className="mx-auto my-2 h-1 w-12 bg-[var(--color-primary)]"
          aria-hidden="true"
        />
        <p className="mx-auto max-w-[17.5rem] text-base text-[var(--color-secondary)]">
          {aboutMe.description}
        </p>
      </div>
      <div className="flex flex-wrap">
        <div className="relative mb-20 w-full md:mr-[5%] md:mb-0 md:w-[45%]">
          <div className="absolute top-15 bottom-[-3.75rem] left-0 w-[80%] bg-[var(--border-color)]" />
          <Image
            src={imgPortrait}
            alt="Bestin John portrait"
            width={645}
            height={860}
            className="shadow-[ -7px_14px_32px_rgba(0,0,0,0.25),-10px_10px_20px_rgba(0,0,0,0.22)] relative ml-16 w-[80%]"
          />
        </div>

        <div className="w-full md:w-[50%]">
          <p className="mb-4">{aboutMe.mainDescription1}</p>
          <p className="mb-6">{aboutMe.mainDescription2}</p>

          <div className="mb-8">
            <h3 className="mb-4 text-lg font-semibold">Skills List</h3>
            <div className="flex flex-wrap">
              {[aboutMe.skillList1, aboutMe.skillList2].map((list, i) => (
                <ul
                  key={i}
                  className="mb-4 flex-1 list-none font-mono text-sm text-[var(--color-secondary)]"
                >
                  {list.map((skill: string) => (
                    <li key={skill} className="relative mb-4 pl-7">
                      <span className="absolute top-2 left-0 h-0.5 w-5 bg-[var(--color-primary)]" />
                      {skill}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Skills Bar</h3>
            <ul>
              {aboutMe.skillBar.map(
                ({ name, value }: { name: string; value: number }) => (
                  <li key={name} className="mb-4">
                    <div className="mb-1 flex justify-between text-sm">
                      <span>{name}</span>
                      <span className="text-[var(--color-secondary)]">
                        {value}%
                      </span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#1d263d]">
                      <div
                        className="h-full rounded-full bg-[var(--color-primary)] transition-all"
                        style={{ width: `${value}%` }}
                        data-skill-bar-amount={value}
                      ></div>
                    </div>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
