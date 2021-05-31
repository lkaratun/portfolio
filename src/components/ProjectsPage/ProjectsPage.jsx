import ProjectCard from './ProjectCard/ProjectCard';
import { PROJECTS } from './projectContents';
import './ProjectsPage.scss';

export default function ProjectsPage() {
	return (
		<section id="projects" className="page">
			<h2>My work</h2>
			<div className="projects-container">
				{PROJECTS.map(({ header, contents, screenshots, links }) => (
					<ProjectCard key={header} header={header} contents={contents} screenshots={screenshots} links={links} />
				))}
			</div>
		</section>
	);
}
