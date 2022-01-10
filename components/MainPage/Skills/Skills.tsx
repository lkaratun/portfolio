import FrontEndIcon from "../../icons/FrontEnd";
import BackEndIcon from "../../icons/BackEnd";
import ToolsIcon from "../../icons/Tools";
import styles from "./Skills.module.scss";

export default function Skills() {
  return (
    <section id={styles.skills}>
      <div className={styles.content}>
        <span className={styles.subheading}>Skills</span>
        <h1>Technologies I use</h1>
        <h2>
          <FrontEndIcon /> Front end
        </h2>
        <p>React, Redux, Webpack, GraphQL, TypeScript, d3</p>
        <h2>
          <BackEndIcon /> Back end
        </h2>
        <p>node.js, Express, AWS, MongoDB, Python, PostgreSQL</p>
        <h2>
          <ToolsIcon /> Tools
        </h2>
        <p>
          Webpack, npm, Immutable.js , d3, git, AST, Python, PostgreSQL,
          Express, AWS
        </p>
      </div>
      <img
        src="https://res.cloudinary.com/lkaratun/image/upload/q_50/w_1200/v1622790117/portfolio/laptop.jpg"
        alt="Lev in Vancouver"
      ></img>
    </section>
  );
}
