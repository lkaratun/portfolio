import './HomePage.scss';

export default function HomePage() {
	return (
		<section id="home" className="page">
			<div class="dark-rectangle">
				<h1>Hi! My name is Lev.</h1>
				<h2>I'm a Full-Stack Developer from Vancouver.</h2>
			</div>
			<a href="#about">
				<svg id="downArrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 26.38">
					<defs></defs>
					<title>About me</title>
					<polyline className="shape" points="1.5,1.5 51.5,24.88 101.5,1.5" />
				</svg>
			</a>
		</section>
	);
}
