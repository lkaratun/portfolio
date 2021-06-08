// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import ProjectCard from './ProjectCard/ProjectCard';
import { PROJECTS } from '../projectContents';

import './ProjectsPage.scss';

export default function ProjectsPage() {
	return (
		<section id="projects">
			<span className="subheading">Projects</span>
			<h1>What I've been working on</h1>
			<div className="projects-container">
				{PROJECTS.map(({ header, contents, screenshots, links }) => (
					<ProjectCard key={header} header={header} contents={contents} screenshots={screenshots} links={links} />
				))}
			</div>
		</section>
	);
}
