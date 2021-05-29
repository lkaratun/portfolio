import './AboutPage.scss';

export default function AboutPage() {
	return (
		<section id="cp-about-page" className="page">
			<div className="subHeader" id="bio">
				<img
					id="photo"
					src="https://res.cloudinary.com/lkaratun/image/upload/w_3000,h_3000,c_crop,g_face,r_max/w_600/v1540349988/portfolio/yellow_wall.jpg"
					alt="Lev Karatun"
				/>

				<div>
					<p>
						I'm a Full-stack Developer experienced in development of a large scale distributed application (AWS Backup),
						React + node.js library catalog application, teaching CS to university students, and writing C++ as part of
						my PhD research. I'm driven by new technologies, application performance, and writing clean, testable code.
						I taught myself JavaScript using online platforms such as EdX and Udemy and currently working as a Software
						Development Engineer on the AWS Backup team. I'm passionate about new technologies, website performance, and
						writing clean, testable code.
						<br />
					</p>
					<a href="./Lev_Karatun_resume.pdf" target="_blank" download>
						My resume
					</a>
				</div>
			</div>

			<h2>My skills</h2>
			<div className="card-group">
				<div className="card bg-light m-1">
					<h5 className="card-header">Front end</h5>
					<div className="card-body">
						<table className="table">
							<tbody className="">
								<tr>
									<td className="border-0">React</td>
									<td className="border-0">Redux</td>
								</tr>
								<tr>
									<td>Webpack</td>
									<td>GraphQL</td>
								</tr>
								<tr>
									<td>TypeScript</td>
									<td>d3</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>

				<div className="card bg-light m-1">
					<h5 className="card-header">Back end</h5>
					<div className="card-body">
						<table className="table">
							<tbody className="">
								<tr scope="row">
									<td className="border-0">node.js</td>
									<td className="border-0">Express</td>
								</tr>
								<tr>
									<td>AWS</td>
									<td>MongoDB</td>
								</tr>
								<tr>
									<td>Python</td>
									<td>PostgreSQL</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>

				<div className="card bg-light m-1">
					<h5 className="card-header">Tools</h5>
					<div className="card-body">
						<table className="table">
							<tbody className="">
								<tr scope="row">
									<td className="border-0">Webpack</td>
									<td className="border-0">npm</td>
								</tr>
								<tr>
									<td>Immutable.js</td>
									<td>d3</td>
								</tr>
								<tr>
									<td>git</td>
									<td>AST</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</section>
	);
}
