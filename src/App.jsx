import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { useState } from "react";

function App() {
  const [language, setLanguage] = useState('en');

  // Add a simple test to see if React is working
  console.log('App component rendered, language:', language);

  const translations = {
    en: {
      hero: {
        title: "Hi, I'm Pierre",
        description: "I'm a student developer passionate about creating applications across web, desktop, and emerging technologies.",
        contactBtn: "Contact Me"
      },
      about: {
        title: "About",
        frontend: {
          title: "Frontend Developer",
          description: "I'm a frontend developer with experience in building responsive and optimized sites"
        },
        backend: {
          title: "Backend Developer", 
          description: "I have experience developing fast and optimised back-end systems and APIs"
        },
        ui: {
          title: "UI Designer",
          description: "I have designed multiple landing pages and have created design systems as well"
        }
      },
      experience: {
        title: "Experience"
      },
      projects: {
        title: "Projects"
      },
      contact: {
        title: "Contact",
        subtitle: "Feel free to reach out!"
      },
      nav: {
        about: "About",
        experience: "Experience", 
        projects: "Projects",
        contact: "Contact"
      },
      history: [
        {
          role: "Software Developer",
          organisation: "Ricochet",
          startDate: "July, 2024",
          endDate: "Present",
          experiences: ["Developed their desktop app to manage users"],
          imageSrc: "history/darkrico.png"
        }
      ],
      projectsList: [
        {
          title: "Green Pulse",
          imageSrc: "projects/greenpulse.png",
          description: "Full-stack app for managing users, products, and orders. Built with Spring Boot, MySQL, and Angular.",
          skills: ["Angular", "Spring Boot", "MySQL"],
          demo: "https://youtu.be/Sq93o72_gkg",
          source: "https://www.github.com"
        },
        {
          title: "Protec",
          imageSrc: "projects/cypherswap.png",
          description: "Crypto-focused web app. I handled the entire frontend, focusing on UI design and responsive component integration.",
          skills: ["HTML", "CSS", "Spring Boot"],
          demo: "https://youtu.be/7rXbeMUJ4Bg",
          source: "https://www.github.com"
        },
        {
          title: "Ricochet",
          imageSrc: "projects/ricorecep.png",
          description: "JavaFX app for the shelter Ricochet, user management with MySQL backend and Google Drive integration.",
          skills: ["Java", "JavaFX", "MySQL"],
          demo: "https://youtu.be/VuR7ami2yso",
          source: "https://github.com/phurbon/ProgrammeRicochet"
        }
      ],
      buttons: {
        demo: "Demo",
        source: "Source"
      }
    },
    fr: {
      hero: {
        title: "Salut, je suis Pierre",
        description: "Je suis un développeur étudiant passionné par la création d'applications sur le web, desktop et les technologies émergentes.",
        contactBtn: "Contactez-moi"
      },
      about: {
        title: "À propos",
        frontend: {
          title: "Développeur Frontend",
          description: "Je suis un développeur frontend avec de l'expérience dans la construction de sites responsifs et optimisés"
        },
        backend: {
          title: "Développeur Backend",
          description: "J'ai de l'expérience dans le développement de systèmes backend rapides et optimisés et d'APIs"
        },
        ui: {
          title: "Designer UI",
          description: "J'ai conçu plusieurs pages d'atterrissage et créé des systèmes de design"
        }
      },
      experience: {
        title: "Expérience"
      },
      projects: {
        title: "Projets"
      },
      contact: {
        title: "Contact",
        subtitle: "N'hésitez pas à me contacter !"
      },
      nav: {
        about: "À propos",
        experience: "Expérience",
        projects: "Projets", 
        contact: "Contact"
      },
      history: [
        {
          role: "Développeur Logiciel",
          organisation: "Ricochet",
          startDate: "Juillet, 2024",
          endDate: "Présent",
          experiences: ["Développé leur application desktop pour gérer les utilisateurs"],
          imageSrc: "history/darkrico.png"
        }
      ],
      projectsList: [
        {
          title: "Green Pulse",
          imageSrc: "projects/greenpulse.png",
          description: "Application full-stack pour gérer les utilisateurs, produits et commandes. Construite avec Spring Boot, MySQL et Angular.",
          skills: ["Angular", "Spring Boot", "MySQL"],
          demo: "https://youtu.be/Sq93o72_gkg",
          source: "https://www.github.com"
        },
        {
          title: "Protec",
          imageSrc: "projects/cypherswap.png",
          description: "Application web axée sur la crypto. J'ai géré tout le frontend, en me concentrant sur la conception UI et l'intégration de composants responsifs.",
          skills: ["HTML", "CSS", "Spring Boot"],
          demo: "https://youtu.be/7rXbeMUJ4Bg",
          source: "https://www.github.com"
        },
        {
          title: "Ricochet",
          imageSrc: "projects/ricorecep.png",
          description: "Application JavaFX pour le refuge Ricochet, gestion des utilisateurs avec backend MySQL et intégration Google Drive.",
          skills: ["Java", "JavaFX", "MySQL"],
          demo: "https://youtu.be/VuR7ami2yso",
          source: "https://github.com/phurbon/ProgrammeRicochet"
        }
      ],
      buttons: {
        demo: "Démo",
        source: "Code"
      }
    }
  };

  return (
    <div className={styles.App}>
      <Navbar language={language} setLanguage={setLanguage} translations={translations} />
      <Hero language={language} translations={translations} />
      <About language={language} translations={translations} />
      <Experience language={language} translations={translations} />
      <Projects language={language} translations={translations} />
      <Contact language={language} translations={translations} />
    </div>
  );
}

export default App;
