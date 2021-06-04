import './HomePage.scss';

export default function HomePage({ navBarRef }) {
	return (
		<section id="home" className="cp-home-page">
			<div className="greeting">
				<h1>
					Hi! I'm Lev,
					<br />a Full-Stack Engineer
				</h1>
				<p>
					I'm driven by new technologies, application performance, and writing clean, testable code. I’m experienced in
					development of a large scale distributed application.
				</p>
				<button>Download my resume</button>
			</div>
			<img
				src="https://res.cloudinary.com/lkaratun/image/upload/q_50/w_1200/v1622790117/portfolio/my_photo.jpg"
				alt="Lev in Vancouver"
			></img>
		</section>
	);
}
