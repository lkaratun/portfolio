import './NavBar.scss';

const SECTIONS = [
	{ id: 'home', label: 'Home' },
	{ id: 'about', label: 'About me' },
	{ id: 'projects', label: 'Projects' },
	{ id: 'contacts', label: 'Contacts' }
];

export default function NavBar({ navBarRef }) {


	function renderLinks() {
		return SECTIONS.map(({ id, label }) => (
			<li className="nav-item" key={id}>
				<a className="nav-link scroll-link" href={`#${id}`} id={`${id}-link`}>
					{label}
				</a>
			</li>
		));
	}

	return (
		<nav id="navbar" className="navbar navbar-dark bg-dark fixed-top navbar-expand-md p-0" ref={navBarRef}>
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
					<ul className="navbar-nav w-100 d-flex justify-content-center">{renderLinks()}</ul>
				</div>
			</div>
		</nav>
	);
}
