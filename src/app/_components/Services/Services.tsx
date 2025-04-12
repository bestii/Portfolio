import type { FC } from "react";

//import "./Services.scss";

const Services: FC = async () => {
  const response = {};
  const services = {
    title: "",
    description: "",
    services: [],
  };
  return (
    <section id="services" className="services mb-10">
      <div className="services-header mb-10">
        <h2>{services.title}</h2>
        <div
          className="line line-horizontal line-heading"
          aria-hidden="true"
        ></div>
        <p className="services-header-p">{services.description}</p>
      </div>
      <ul className="service-container flex flex-wrap">
        {services.services.map((service: { name: string; text: string }) => (
          <li className="service-item mb-10" key={service.name}>
            <div className="service-box p-6">
              <div className="service-icon" aria-hidden="true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  height={24}
                >
                  <path d="M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66.19-.34.05-.08.07-.12C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .56.33.47.51l-.07.15C12.96 17.55 11 21 11 21z"></path>
                </svg>
              </div>
              <div className="line line-horizontal line-service"></div>
              <h3 className="text-2xl">{service.name}</h3>
              <p className="service-p mb-0">{service.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Services;
