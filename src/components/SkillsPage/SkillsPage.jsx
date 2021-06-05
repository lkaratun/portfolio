import FrontEndIcon from '../../icons/FrontEnd';
import BackEndIcon from '../../icons/BackEnd';
import ToolsIcon from '../../icons/Tools';
import './SkillsPage.scss';

export default function SkillsPage() {
	return (
		<section id="skills" className="cp-skills-page">
			<div className="content">
				<span className="subheading">Skills</span>
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
				<p>Webpack, npm, Immutable.js , d3, git, AST, Python, PostgreSQL, Express, AWS</p>
			</div>
		</section>
	);
}
