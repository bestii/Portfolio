import { type FC } from "react";
import styles from "./Timeline.module.css";

type TimelineProps = {
  timeline: {
    title: string;
    timeline_items: {
      role: string;
      duration: {
        startDate: string;
        endDate: string;
      };
      name: string;
      briefText: string;
      developedSkills: string[];
    }[];
  };
};

const Timeline: FC<TimelineProps> = ({ timeline }) => {
  return (
    <div className="timeline-container md:flex-[1_1_40%]">
      <div className="relative mt-8 max-w-sm pl-6">
        <span
          className={`absolute top-0 -bottom-7 left-0 w-[2px] ${styles.verticalLine}`}
        />
        <h3 className="text-2xl font-bold">{timeline.title}</h3>

        {timeline.timeline_items.map((item) => (
          <div className="relative mb-5" key={item.name}>
            <h4 className="text-xl font-bold">{item.role}</h4>
            <span
              className={`absolute top-1.5 h-3 w-3 rounded-full ${styles.timelineItemBullet}`}
            ></span>
            <span className="flex items-center text-sm uppercase">
              <span>{item.duration.startDate}</span>
              <span
                className={`mx-2 inline-block w-5 ${styles.lineSeparator}`}
              ></span>
              <span>{item.duration.endDate}</span>
            </span>
            <span
              className={`block text-sm font-semibold ${styles.organizationName}`}
            >
              {item.name}
            </span>
            <p className="my-5">{item.briefText}</p>
            <p className="mb-2 font-semibold">Developed skills</p>
            <ul className={`m-0 p-0 font-mono text-sm ${styles.dashList}`}>
              {item.developedSkills.map((skill) => (
                <li
                  className="relative mb-4 inline-block pr-3 pl-7"
                  key={skill}
                >
                  <span
                    className={`absolute top-2.5 left-0 h-[2px] w-5 ${styles.dashListDash}`}
                    aria-hidden="true"
                  ></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <span
          className={`absolute -bottom-7 -left-1.5 h-3.5 w-3.5 rounded-full border-2 border-solid ${styles.timelineStartpoint}`}
        ></span>
      </div>
    </div>
  );
};

export default Timeline;
