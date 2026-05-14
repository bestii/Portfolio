import Link from "next/link";
import { faGithub as Github } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="py-4">
      <p className="text-sm leading-7 text-(--color-text-muted) flex justify-center gap-2">
        <span>Forked from</span>
        <Link
          href="https://github.com/bchiang7/v4"
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-2 font-medium text-(--color-accent) underline decoration-transparent underline-offset-4 transition-colors hover:decoration-current"
        >
          <FontAwesomeIcon icon={Github} height={16} aria-hidden="true" />
          <span>bchiang7/v4</span>
        </Link>
        <span>and thoughtfully reimplemented using Next.js.</span>
      </p>
    </footer>
  );
};

export default Footer;
