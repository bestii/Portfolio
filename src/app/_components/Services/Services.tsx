import type { FC } from "react";
import { api } from "~/trpc/server";
import styles from "./Services.module.css";

const Services: FC = async () => {
  const services = await api.portfolio.services();

  return (
    <section id="services" className="mb-10">
      <div className="mb-10">
        <h2>{services.title}</h2>
        <div
          className="line line-horizontal line-heading"
          aria-hidden="true"
        ></div>
        <p
          className={`${styles.servicesHeaderP} mt-4 max-w-[17.5rem] text-base`}
        >
          {services.description}
        </p>
      </div>

      <ul className="flex flex-wrap gap-y-10">
        {services.services.map((service) => (
          <li
            key={service.name}
            className={`${styles.serviceItem} w-full md:mr-[5%] md:flex-[1_1_30%] last:md:mr-0`}
          >
            <div className={`${styles.serviceBox} p-6`}>
              <div className={`${styles.serviceIcon} mb-4`} aria-hidden="true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  height={24}
                >
                  <path d="M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66.19-.34.05-.08.07-.12C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .56.33.47.51l-.07.15C12.96 17.55 11 21 11 21z" />
                </svg>
              </div>
              <div
                className={`line line-horizontal ${styles.lineService}`}
              ></div>
              <h3 className="text-2xl">{service.name}</h3>
              <p className="mb-0">{service.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Services;
