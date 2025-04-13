import {
  faFacebookF as facebookIcon,
  faGithub as githubIcon,
  faInstagram as instagramIcon,
  faLinkedinIn as linkedinIcon,
  faXTwitter as twitterIcon,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./SocialLinks.module.css";

const socials = [
  {
    href: "https://www.facebook.com/bestinjohn",
    label: "Facebook",
    icon: facebookIcon,
  },
  {
    href: "https://github.com/bestii",
    label: "GitHub",
    icon: githubIcon,
  },
  {
    href: "https://www.instagram.com/iambestin/",
    label: "Instagram",
    icon: instagramIcon,
  },
  {
    href: "https://twitter.com/_bestinjohn",
    label: "Twitter",
    icon: twitterIcon,
  },
  {
    href: "https://www.linkedin.com/in/bestin-john/",
    label: "LinkedIn",
    icon: linkedinIcon,
  },
];

const SocialLinks = () => {
  return (
    <div className="fixed right-3.5 bottom-0 mb-5 hidden flex-col items-center justify-center pb-24 md:flex">
      {/* Optional YouTube link placeholder (invisible) */}
      <a
        className="invisible mb-1 flex h-11 w-11 items-center justify-center rounded-full"
        href="https://www.youtube.com/channel/UCAQ_qW6iR2BojA25aDwZ7ow"
        aria-label="Youtube"
        target="_blank"
        rel="noopener noreferrer"
      ></a>

      {socials.map(({ href, label, icon }) => (
        <a
          key={label}
          className={`mb-1 flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-300 hover:bg-[var(--color-primary)] ${styles.socialLink}`}
          href={href}
          aria-label={label}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={icon}
            className={`text-xl ${styles.socialIcon}`}
          />
        </a>
      ))}

      <span
        className={`absolute bottom-0 left-2/4 h-20 w-[2px] bg-[var(--color-primary)]`}
        aria-hidden="true"
      ></span>
    </div>
  );
};

export default SocialLinks;
