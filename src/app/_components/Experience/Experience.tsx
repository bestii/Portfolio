import { api } from "~/trpc/server";
import Timeline from "../Timeline/Timeline";
import styles from "./Experience.module.css";

const Experience = async () => {
  const experience = await api.portfolio.experience();

  return (
    <section id="experience" className="my-10 md:my-32">
      <div className="mb-10">
        <h2 className="text-3xl font-bold">{experience.title}</h2>
        <div
          className="line line-horizontal bg-primary my-2 h-[2px] w-12"
          aria-hidden="true"
        ></div>
        <p className={`max-w-xs text-base ${styles.description}`}>
          {experience.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-6">
        <Timeline timeline={experience.education} />
        <Timeline timeline={experience.profession} />
      </div>
    </section>
  );
};

export default Experience;
