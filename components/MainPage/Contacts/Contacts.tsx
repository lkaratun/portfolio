import styles from "./Contacts.module.scss";
import Email from "../../icons/Email";
import Linkedin from "../../icons/Linkedin";
import Github from "../../icons/Github";

export default function Contacts() {
  return (
    <section id={styles.contacts} className={styles.page}>
      <h4>Let's get in touch!</h4>
      <div className={styles.subHeader}>
        <a
          href="mailto:lev.karatun@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Email />
          E-mail
        </a>
        <a
          href="https://www.linkedin.com/in/lkaratun"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin />
          LinkedIn
        </a>
        <a
          href="https://github.com/lkaratun"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
          GitHub
        </a>
      </div>
    </section>
  );
}
