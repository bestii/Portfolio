import { AtSign, MapPin, PhoneOutgoing } from "lucide-react";
import { SectionHeader } from "~/app/_components";
import { api } from "~/trpc/server";
import styles from "./Contact.module.css";
import ContactForm from "./ContactForm/ContactForm";

const Contact = async () => {
  const contact = await api.portfolio.contact();

  return (
    <section id="contact" className="mb-10">
      <SectionHeader
        title={contact.title}
        description={contact.description}
        className={styles.contactHeaderP}
      />

      <div className="flex flex-wrap gap-4">
        <div className={`${styles.contactDetails} mb-8`}>
          <div className="mb-8 flex">
            <div className="relative top-[2px] mr-4 flex h-6 items-center font-bold">
              <AtSign height={18} strokeWidth={2.5} />
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
              <PhoneOutgoing height={18} strokeWidth={2.5} />
            </div>
            <span>{contact.mobile}</span>
          </div>

          <div className="mb-8 flex">
            <div className="relative top-[2px] mr-4 flex h-6 items-center">
              <MapPin height={18} strokeWidth={2.5} />
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
