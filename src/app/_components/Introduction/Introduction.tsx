import Image from "next/image";
import { imgSiteBanner } from "~/app/_assets";
import { api } from "~/trpc/server";
import styles from "./Introduction.module.css";

const Introduction = async () => {
  const experience = await api.portfolio.introduction();

  return (
    <section id="introduction" className="mb-10">
      <div className="container-fluid">
        <div className="flex flex-wrap">
          <div
            className={`relative z-0 px-4 lg:left-16 lg:mt-16 lg:px-0 ${styles.introContent}`}
          >
            <div className="relative mt-7 flex items-center lg:left-14">
              <div className="max-w-[80%] text-xl">{experience.introText}</div>
              <div className="relative flex-1">
                <span className="absolute top-0.5 right-0 left-2 h-px bg-current opacity-50"></span>
              </div>
            </div>
            <h1 className="my-2 text-3xl font-bold">
              <strong>{experience.name}</strong>
              {experience.caption}
            </h1>
            <div className="relative mt-7 mb-4 rounded-sm p-7 shadow-md lg:mb-0 lg:ml-7">
              <p className="mb-7 max-w-lg text-xl">{experience.description}</p>
            </div>
          </div>
          <div className={`m-0 ${styles.introImg}`}>
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
