import styles from "./ProjectCard.module.scss";

type ProjectCardProps = {
  header: string;
  contents: JSX.Element | string;
  screenshots: { hq: string; lq: string; alt: string };
  links: { result: string; code: string };
};

export default function ProjectCard({
  header,
  contents,
  screenshots,
  links,
}: ProjectCardProps) {
  const { hq, lq, alt } = screenshots;
  const { result, code } = links;

  return (
    <div className={styles["cp-project-card"]}>
      <img
        className={styles.screenshot}
        src={lq}
        lq-image-url={lq}
        hq-image-url={hq}
        alt={alt}
      />

      <div className={styles.details}>
        <h3>{header}</h3>
        {/* <div className={styles.project-description}>{contents}</div> */}
        {result && (
          <a
            href={result}
            target="_blank"
            className={styles["project-link"]}
            rel="noreferrer"
          >
            Visit site
          </a>
        )}
        {code && (
          <a
            href={result}
            target="_blank"
            className={styles["project-link"]}
            rel="noreferrer"
          >
            View source code
          </a>
        )}
      </div>
    </div>
  );
}
