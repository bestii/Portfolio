import Image from "next/image";
//import "./AboutMe.scss";
import { imgPortrait } from "~/app/_assets";
import { api } from "~/trpc/server";

const AboutMe = async () => {
  const aboutMe = await api.portfolio.about();
  return (
    <section id="about" className="about my-10 md:my-32">
      <div className="about-header mb-10">
        <h2>{aboutMe.title}</h2>
        <div
          className="line line-horizontal line-heading"
          aria-hidden="true"
        ></div>
        <p className="about-header-p">{aboutMe.description}</p>
      </div>
      <div className="flex flex-wrap">
        <div className="about-me-img relative mb-20 md:mb-0">
          <div className="img-bg absolute"></div>
          <Image
            src={imgPortrait}
            className="portrait-img relative"
            alt="Bestin John potrait image"
            width={645}
            height={860}
          />
        </div>
        <div className="about-me-content">
          <p>{aboutMe.mainDescription1}</p>
          <p>{aboutMe.mainDescription2}</p>
          <br />
          <div className="skill-list">
            <h3>Skills List</h3>
            <div className="about-me-skill-list flex">
              <ul className="dash-list">
                {aboutMe.skillList1.map((skill: string) => (
                  <li className="dash-list-item" key={skill}>
                    <span className="dash-list-dash" aria-hidden="true"></span>
                    {skill}
                  </li>
                ))}
              </ul>
              <ul className="dash-list">
                {aboutMe.skillList2.map((skill: string) => (
                  <li className="dash-list-item" key={skill}>
                    <span className="dash-list-dash" aria-hidden="true"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="skill-bar">
            <h3>Skills Bar</h3>
            <ul className="">
              {aboutMe.skillBar.map(
                (skill: { name: string; value: number }) => (
                  <li className="skill-bar" key={skill.name}>
                    <div className="skill-bar-title">
                      <span>{skill.name}</span>
                      <span className="skill-bar-value">{skill.value}%</span>
                    </div>
                    <div className="skill-bar-bg" aria-hidden="true">
                      <div
                        className={`skill-bar-amount bar-${skill.value}`}
                        data-skill-bar-amount={skill.value}
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
