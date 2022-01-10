import type { NextPage } from "next";

import "./App.scss";
import { useState } from "react";
import Enlarge from "../../../components/icons/Enlarge";
import Shrink from "../../../components/icons/Shrink";
import bibPage from "./contents";

const BibPage: NextPage = () => {
  const { header, contents, screenshots, links } = bibPage;
  const { hq, lq, alt } = screenshots;
  const { result, code } = links;

  const [expanded, setExpanded] = useState(false);
  return (
    <div className={styles.cp - bib - page}>
      <div
        className={styles.screenshot - container}
        onClick={() => setExpanded(!expanded)}
      >
        <img
          className={styles.screenshot}
          src={lq}
          lq-image-url={lq}
          hq-image-url={hq}
          alt={alt}
        />
        <Enlarge hidden={expanded} />
        <Shrink hidden={!expanded} />
      </div>

      <h3>{header}</h3>
      <div className={styles.project - description}>{contents}</div>
      {result && (
        <a
          href={result}
          target="_blank"
          className={styles.project - link}
          rel="noreferrer"
        >
          Visit site
        </a>
      )}
      {code && (
        <a
          href={result}
          target="_blank"
          className={styles.project - link}
          rel="noreferrer"
        >
          View source code
        </a>
      )}
    </div>
  );
};

export default BibPage;
