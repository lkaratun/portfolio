// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import ProjectCard from "./ProjectCard/ProjectCard";
import { PROJECTS } from "../../projectContents";

import styles from "./Projects.module.scss";

export default function Projects() {
  return (
    <section id={styles.projects}>
      <span className={styles.subheading}>Projects</span>
      <h1>What I've been working on</h1>
      <div className={styles["projects-container"]}>
        {PROJECTS.map(({ header, contents, screenshots, links }) => (
          <ProjectCard
            key={header}
            header={header}
            contents={contents}
            screenshots={screenshots}
            links={links}
          />
        ))}
      </div>
    </section>
  );
}
