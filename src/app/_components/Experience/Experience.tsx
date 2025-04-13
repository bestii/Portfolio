//import "./Experience.scss";
import { api } from "~/trpc/server";
import Timeline from "../Timeline/Timeline";

const Experience = async () => {
  const experience = await api.portfolio.experience();

  return (
    <section id="experience" className="experience my-10 md:my-32">
      <div className="experience-header mb-10">
        <h2>{experience.title}</h2>
        <div
          className="line line-horizontal line-heading"
          aria-hidden="true"
        ></div>
        <p className="experience-header-p max-w-xs text-base">
          {experience.description}
        </p>
      </div>
      <div className="experience-grid flex flex-wrap">
        <Timeline timeline={experience.education} />
        <Timeline timeline={experience.profession} />
      </div>
    </section>
  );
};

export default Experience;
