import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = ({ language, translations }) => {
  const t = translations[language];
  
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>{t.contact.title}</h2>
        <p>{t.contact.subtitle}</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:pierreluchurbon@gmail.com">pierreluchurbon@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/pierre-luc-hurbon-2a9128268/" target="_blank" rel="noopener noreferrer">linkedin.com/pierre</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/phurbon" target="_blank" rel="noopener noreferrer">github.com/phurbon</a>
        </li>
      </ul>
    </footer>
  );
};
