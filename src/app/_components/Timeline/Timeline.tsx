import { type FC } from "react";

//import './Timeline.scss';

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
    <div className="timeline-container">
      <div className="timeline relative mt-8 max-w-sm pl-6">
        <span className="vertical-line absolute top-0 -bottom-7 left-0"></span>
        <h3 className="timeline-title text-2xl font-bold">{timeline.title}</h3>
        {timeline.timeline_items.map((item) => (
          <div className="timeline-item relative mb-5" key={item.name}>
            <h4 className="text-xl font-bold">{item.role}</h4>
            <span className="timeline-item-bullet absolute top-1.5 h-3 w-3 rounded-full"></span>
            <span className="timeline-item-date flex items-center">
              <span className="uppercase">{item.duration.startDate}</span>
              <span className="line line-horizontal line-separator"></span>
              <span className="uppercase">{item.duration.endDate}</span>
            </span>
            <span className="organization-name">{item.name}</span>
            <p className="my-5">{item.briefText}</p>
            <p className="mb-2 font-semibold">Developed skills</p>
            <ul className="dash-list m-0 p-0 font-mono">
              {item.developedSkills.map((skill) => (
                <li
                  className="dash-list-item relative mb-4 inline-block pr-3 pl-7"
                  key={skill}
                >
                  <span
                    className="dash-list-dash absolute left-0 w-5"
                    aria-hidden="true"
                  ></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <span className="timeline-startpoint absolute -bottom-7 -left-1.5 h-3.5 w-3.5 rounded-full border-2 border-solid"></span>
      </div>
    </div>
  );
};

export default Timeline;
