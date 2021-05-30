import './NavBar.scss';

export default function NavBar() {
	return (
		<nav id="navbar" className="navbar navbar-dark bg-dark fixed-top navbar-expand-md p-0">
			<div className="container">
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav w-100 d-flex justify-content-center">
						<li className="nav-item">
							<a className="nav-link scroll-link" href="#home">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a id="about-link" className="nav-link scroll-link" href="#about">
								About me
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link scroll-link" href="#projects">
								Projects
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link scroll-link" href="#contacts">
								Contacts
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
