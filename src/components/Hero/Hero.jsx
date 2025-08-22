import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = ({ language, translations }) => {
  const t = translations[language];
  
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{t.hero.title}</h1>
        <p className={styles.description}>
          {t.hero.description}
        </p>
        <a href="mailto:pierreluchurbon@gmail.com" className={styles.contactBtn}>
          {t.hero.contactBtn}
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage2.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
