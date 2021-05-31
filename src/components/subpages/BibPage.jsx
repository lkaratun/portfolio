import { useState } from 'react';
import bibPage from '../projectContents/bibPage';
import Enlarge from '../../logos/Enlarge';
import Shrink from '../../logos/Shrink';
import './BibPage.scss';

export default function BibPage() {
	const { header, contents, screenshots, links } = bibPage;
	const { hq, lq, alt } = screenshots;
	const { result, code } = links;

	const [expanded, setExpanded] = useState(false);

	return (
		<div className="cp-bib-page">
			<div className="screenshot-container" onClick={() => setExpanded(!expanded)}>
				<img className="screenshot" src={lq} lq-image-url={lq} hq-image-url={hq} alt={alt} />
				<Enlarge hidden={expanded} />
				<Shrink hidden={!expanded} />
			</div>

			<h3>{header}</h3>
			<div className="project-description">{contents}</div>
			{result && (
				<a href={result} target="_blank" className="project-link" rel="noreferrer">
					Visit site
				</a>
			)}
			{code && (
				<a href={result} target="_blank" className="project-link" rel="noreferrer">
					View source code
				</a>
			)}
		</div>
	);
}
