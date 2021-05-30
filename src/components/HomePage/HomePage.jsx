import './HomePage.scss';

export default function HomePage({ navBarRef }) {
	function handleArrowClick(e) {
		e.preventDefault();
		highlightLink(navBarRef.current.querySelector('#about-link'));
		const scrollTarget = document.querySelector('#about');
		smoothScrollNative(scrollTarget);
	}

	function restoreLinksAppearance(links) {
		links.forEach(link => {
			link.style.textDecoration = 'none';
		});
	}

	function highlightLink(target) {
		const navLinks = navBarRef.current.querySelectorAll('.scroll-link');
		restoreLinksAppearance(navLinks);
		target.style.textDecoration = 'underline';
	}

	function smoothScrollNative(target) {
		const navBarHeight = navBarRef.current.getBoundingClientRect().height;
		const targetPosition = target.getBoundingClientRect().top - navBarHeight;
		window.scroll({
			top: window.pageYOffset + targetPosition,
			behavior: 'smooth'
		});
	}

	return (
		<section id="home" className="page">
			<div className="dark-rectangle">
				<h1>Hi! My name is Lev.</h1>
				<h2>I'm a Full-Stack Developer from Vancouver.</h2>
			</div>
			<a href="#about" onClick={handleArrowClick}>
				<svg id="downArrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 26.38">
					<defs></defs>
					<title>About me</title>
					<polyline className="shape" points="1.5,1.5 51.5,24.88 101.5,1.5" />
				</svg>
			</a>
		</section>
	);
}
