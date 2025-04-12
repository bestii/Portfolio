import {
  faAt,
  faLocationDot,
  faMobileScreen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { FC } from "react";

//import "./Contact.scss";
import ContactForm from "./ContactForm/ContactForm";

const Contact: FC = async () => {
  const response = {};
  const contact = {};

  return (
    <section id="contact" className="contact mb-10">
      <div className="contact-header mb-10">
        <h2>{contact.title}</h2>
        <div
          className="line line-horizontal line-heading"
          aria-hidden="true"
        ></div>
        <p className="contact-header-p">{contact.description}</p>
      </div>
      <div className="flex flex-wrap">
        <div className="contact-details">
          <div className="contact-info mb-8 flex">
            <div className="contact-info-icon relative top-0.5 mr-4 flex h-6 items-center">
              <FontAwesomeIcon icon={faAt} />
            </div>
            <span className="contact-info-text">
              <p>
                {contact.email}
                <span className="hidden">null</span>.com
              </p>
            </span>
          </div>
          <div className="contact-info mb-8 flex">
            <div className="contact-info-icon relative top-0.5 mr-4 flex h-6 items-center">
              <FontAwesomeIcon icon={faMobileScreen} />
            </div>
            <span className="contact-info-text">{contact.mobile}</span>
          </div>
          <div className="contact-info mb-8 flex">
            <div className="contact-info-icon relative top-0.5 mr-4 flex h-6 items-center">
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
            <span className="contact-info-text">{contact.address}</span>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
