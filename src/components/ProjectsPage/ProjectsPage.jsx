import Project from './Project/Project';
import { PROJECTS } from './projectContents';
import './ProjectsPage.scss';

export default function ProjectsPage() {
	return (
		<section id="projects" className="page">
			<h2>My work</h2>
			<div className="projectsContainer">
				{PROJECTS.map(({ header, contents, screenshots, links }) => (
					<Project key={header} header={header} contents={contents} screenshots={screenshots} links={links} />
				))}
			</div>
		</section>
	);
}
