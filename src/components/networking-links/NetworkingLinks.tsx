import {
  faFacebookF as Facebook,
  faGithub as Github,
  faInstagram as Instagram,
  faLinkedinIn as Linkedin,
  faXTwitter as Twitter,
} from "@fortawesome/free-brands-svg-icons";
import type { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getLinks } from "@/services/cmsService";

const platformIcons: Record<string, IconDefinition> = {
  facebook: Facebook,
  github: Github,
  instagram: Instagram,
  twitter: Twitter,
  linkedin: Linkedin,
};

type Social = {
  platform: string;
  url: string;
};

const SocialLinks = ({ socials }: { socials: Social[] }) => {
  return (
    <div className="fixed bottom-0 left-6 z-20 hidden flex-col items-center justify-center pb-4 md:flex">
      <div className="flex flex-col items-center gap-1">
        {socials.map(({ platform, url }) => {
          const icon = platformIcons[platform];
          if (!icon) return null;

          return (
            <a
              key={platform}
              className="flex h-10 w-10 items-center justify-center transition duration-300 hover:scale-120 hover:text-var(--color-accent)"
              href={url}
              aria-label={platform}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={icon} height={18} aria-hidden="true" />
            </a>
          );
        })}
      </div>
      <span
        className="mt-1 h-20 w-px bg-(--text-secondary)"
        aria-hidden="true"
      />
    </div>
  );
};

const EmailLink = ({ email }: { email: string }) => (
  <div className="fixed bottom-0 right-10 z-20 hidden flex-col items-center justify-center pb-4 md:flex">
    <div className="">
      <a
        href={`mailto:${email}`}
        aria-label="Email"
        className="text-sm tracking-widest text-(--text-secondary) transition-colors duration-300 hover:text-(--color-accent) font-mono text-[13px]"
        style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
      >
        {email}
      </a>
    </div>
    <span className="mt-1 h-20 w-px bg-(--text-secondary)" aria-hidden="true" />
  </div>
);

const NetworkingLinks = async () => {
  const links = await getLinks();
  if (!links) return null;

  return (
    <>
      <SocialLinks socials={links.socials} />
      <EmailLink email={links.email} />
    </>
  );
};

export default NetworkingLinks;
