import Image from "next/image";
//import "./Introduction.scss";
import { imgSiteBanner } from "~/app/_assets";

const Introduction = async () => {
  const experience = {
    introText: "Hi, my name is",
    name: "Bestin John",
    caption: ", I'm a Frontend Web Developer.",
    description:
      "Motivated and goal-oriented professional with 4+ years of experience in building web pages that are scalable, maintainable, and responsive across browsers and different devices with varying screen sizes.",
    bgImg: {
      smallImg: "site-banner.jpg",
      largeImg: "site-banner.jpg",
    },
  };

  return (
    <section id="introduction" className="introduction mb-10">
      <div className="container-fluid">
        <div className="flex flex-wrap">
          <div className="intro-content relative z-0 px-4 lg:left-16 lg:mt-16 lg:px-0">
            <div className="relative mt-7 flex items-center lg:left-14">
              <div className="intro-text text-xl">{experience.introText}</div>
              <div className="intro-line relative flex-1">
                <span className="line line-horizontal absolute top-0.5 right-0 left-2"></span>
              </div>
            </div>
            <h1 className="site-title my-2">
              <strong>{experience.name}</strong>
              {experience.caption}
            </h1>
            <div className="intro-box bg-shadow relative mt-7 mb-4 rounded-sm p-7 lg:mb-0 lg:ml-7">
              <p className="site-subtitle mb-7 max-w-lg text-xl">
                {experience.description}
              </p>
            </div>
          </div>
          <div className="intro-img m-0">
            <Image
              src={imgSiteBanner}
              width={1200}
              height={800}
              alt="A table with laptop, pen, notebook, mobile and coffee"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
