import { SectionHeader } from "~/app/_components";
import { api } from "~/trpc/server";
import Timeline from "../Timeline/Timeline";
import styles from "./Experience.module.css";

const Experience = async () => {
  const experience = await api.portfolio.experience();

  return (
    <section id="experience" className="my-10 md:my-32">
      <SectionHeader
        title={experience.title}
        description={experience.description}
        className={styles.description}
        maxWidth="20rem"
      />

      <div className="flex flex-wrap gap-6">
        <Timeline timeline={experience.education} />
        <Timeline timeline={experience.profession} />
      </div>
    </section>
  );
};

export default Experience;
