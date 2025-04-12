//import "./Experience.scss";

import Timeline from "../Timeline/Timeline";

const Experience = async () => {
  const experience = {
    title: "Experience",
    description:
      "Here is how my educational and professional timeline looks like.",
    profession: {
      title: "Professional",
      timeline_items: [
        {
          role: "Full Stack Developer",
          name: "Fraunhofer IESE (Work Student), Germany",
          duration: {
            startDate: "June 2021",
            endDate: "Present",
          },
          briefText:
            "Involved in developing an application to automate ticket creation in JIRA for customer support tickets.",
          developedSkills: ["ReactJS", "Typescript", "NextJS", "MUI", "NestJS"],
        },
        {
          role: "UI developer",
          name: "McFadyen Digital, India",
          duration: {
            startDate: "July 2016",
            endDate: "March 2020",
          },
          briefText:
            "Involved in the end-end integration of eCommerce sites. Developed responsive and maintainable pages to provide customers with a smooth shopping experience.",
          developedSkills: ["HTML", "CSS", "JS"],
        },
      ],
    },
    education: {
      title: "Education",
      timeline_items: [
        {
          role: "Masters",
          name: "Technische Universität Kaiserslautern, Germany",
          duration: {
            startDate: "March 2020",
            endDate: "now",
          },
          briefText:
            "Deepened my understanding of Computer Science in the field of Software Engineering and Intelligent Systems.",
          developedSkills: ["Software Process", "Project Management"],
        },
        {
          role: "Bachelor of Technology (B.Tech)",
          name: "Model Engineering College, India",
          duration: {
            startDate: "Aug 2012",
            endDate: "March 2016",
          },
          briefText:
            "Bachelors in Computer Science & Engineering. Learned the fundamental concepts of algorithms, operating systems, database management systems, computer networks, and computer graphics.",
          developedSkills: ["Algorithms", "Data Structures"],
        },
      ],
    },
  };
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
