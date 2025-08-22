import React from "react";

import styles from "./Projects.module.css";

import { ProjectCard } from "./ProjectCard";

export const Projects = ({ language, translations }) => {
  const t = translations[language];
  
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>{t.projects.title}</h2>
      <div className={styles.projects}>
        {t.projectsList.map((project, id) => {
          return (
            <ProjectCard 
              key={id} 
              project={project} 
              translations={translations}
              language={language}
            />
          );
        })}
      </div>
    </section>
  );
};
