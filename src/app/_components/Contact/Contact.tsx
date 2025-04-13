import {
  faAt,
  faLocationDot,
  faMobileScreen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { api } from "~/trpc/server";
import styles from "./Contact.module.css";
import ContactForm from "./ContactForm/ContactForm";

const Contact = async () => {
  const contact = await api.portfolio.contact();

  return (
    <section id="contact" className="mb-10">
      <div className="mb-10">
        <h2>{contact.title}</h2>
        <div
          className="line line-horizontal line-heading"
          aria-hidden="true"
        ></div>
        <p className={`${styles.contactHeaderP} mt-4 max-w-[17.5rem]`}>
          {contact.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-4">
        <div className={`${styles.contactDetails} mb-8`}>
          <div className="mb-8 flex">
            <div className="relative top-[2px] mr-4 flex h-6 items-center">
              <FontAwesomeIcon icon={faAt} />
            </div>
            <span>
              <p>
                {contact.email}
                <span className="hidden">null</span>.com
              </p>
            </span>
          </div>

          <div className="mb-8 flex">
            <div className="relative top-[2px] mr-4 flex h-6 items-center">
              <FontAwesomeIcon icon={faMobileScreen} />
            </div>
            <span>{contact.mobile}</span>
          </div>

          <div className="mb-8 flex">
            <div className="relative top-[2px] mr-4 flex h-6 items-center">
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
            <span>{contact.address}</span>
          </div>
        </div>

        <div className={`${styles.contactForm}`}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
