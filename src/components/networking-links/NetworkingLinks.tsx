import {
  faFacebookF as Facebook,
  faGithub as Github,
  faInstagram as Instagram,
  faLinkedinIn as Linkedin,
  faXTwitter as Twitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const socials = [
  {
    href: "https://www.facebook.com/bestinjohn",
    label: "Facebook",
    icon: Facebook,
  },
  {
    href: "https://github.com/bestii",
    label: "GitHub",
    icon: Github,
  },
  {
    href: "https://www.instagram.com/iambestin/",
    label: "Instagram",
    icon: Instagram,
  },
  {
    href: "https://twitter.com/_bestinjohn",
    label: "Twitter",
    icon: Twitter,
  },
  {
    href: "https://www.linkedin.com/in/bestin-john/",
    label: "LinkedIn",
    icon: Linkedin,
  },
];

const SocialLinks = () => {
  return (
    <div className="fixed bottom-0 left-6 z-20 hidden flex-col items-center justify-center pb-4 md:flex">
      <div className="flex flex-col items-center gap-1">
        {socials.map(({ href, label, icon: Icon }) => (
          <a
            key={label}
            className="flex h-10 w-10 items-center justify-center transition duration-300 hover:scale-120 hover:text-var(--color-accent)"
            href={href}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={Icon} height={18} aria-hidden="true" />
          </a>
        ))}
      </div>
      <span
        className="mt-1 h-20 w-px bg-(--text-secondary)"
        aria-hidden="true"
      />
    </div>
  );
};

const EmailLink = () => (
  <div className="fixed bottom-0 right-10 z-20 hidden flex-col items-center justify-center pb-4 md:flex">
    <div className="">
      <a
        href="mailto:contact@bestinjohn.com"
        aria-label="Email"
        className="text-sm tracking-widest text-(--text-secondary) transition-colors duration-300 hover:text-(--color-accent) font-mono text-[13px]"
        style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
      >
        contact@bestinjohn.com
      </a>
    </div>
    <span className="mt-1 h-20 w-px bg-(--text-secondary)" aria-hidden="true" />
  </div>
);

const NetworkingLinks = () => {
  return (
    <>
      <SocialLinks />
      <EmailLink />
    </>
  );
};

export default NetworkingLinks;
