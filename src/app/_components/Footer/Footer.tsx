import GoToTop from "../go-to-top/GoToTop";
import SocialLinks from "../SocialLinks/SocialLinks";
import styles from "./Footer.module.css";

const Footer = () => {
  const copyrightYear = new Date().getFullYear();

  return (
    <footer
      className={`${styles.footerShadow} py-2 text-center text-sm sm:text-base`}
    >
      <SocialLinks />
      <GoToTop />
      <p className="my-3">
        Bestin John © Copyright {copyrightYear}. All Rights Reserved.
      </p>
      <p className="hidden">
        <span>
          This is a NextJS version of the design inspired from the open-source
          project{" "}
        </span>
        <a
          href="https://github.com/manussakis/leeneon"
          className="hover:text-primary underline transition"
        >
          leeneon
        </a>
      </p>
    </footer>
  );
};

export default Footer;
