export default {
	header: 'Memory game',
	contents: (
		<article>
			<h5>Problem</h5>
			Build a simple memory game, showcase my React skills.
			<h5>Approach</h5>I built a simple memory card game that can improve your memory and is easy to start playing. The
			game board contains cards of initially hidden color. The goal of the game is finding card pairs or matching color
			by clicking the cards.
			<h5> Choice of technologies</h5>
			The game is built using{' '}
			<a href="https://reactjs.org/" target="_blank" rel="noreferrer">
				React
			</a>
			, bootstrapped using{' '}
			<a href="https://github.com/facebook/create-react-app" target="_blank" rel="noreferrer">
				create-react-app
			</a>
			, and hosted on a{' '}
			<a href="https://aws.amazon.com/ec2/" target="_blank" rel="noreferrer">
				AWS EC2
			</a>{' '}
			instance running{' '}
			<a href="https://www.nginx.com/" target="_blank" rel="noreferrer">
				Nginx
			</a>{' '}
			web server.
			<br />
			Continuous integration is set up using{' '}
			<a href="https://jenkins.io/" target="_blank" rel="noreferrer">
				Jenkins
			</a>{' '}
			and{' '}
			<a href="https://github.com/" target="_blank" rel="noreferrer">
				GitHub
			</a>{' '}
			web hooks.
			<br />
			<h5>Challenges</h5>
			<ol>
				<li>
					Adjustable game difficulty. In order to offer some additional challenge for the memory ninjas out there, I
					implemented three difficulty levels: easy, medium, hard. Switching the difficulty changes the number of cards
					on the board to 16, 24, and 32 respectively. Cards sizing is adjusted accordingly.
				</li>
				<li>
					Responsive design (making the page mobile-friendly). By means of media queries, the cards size is increased on
					smaller devices.
				</li>
				<li>
					Win condition. Every time the user finds a matching pair, the number of opened cards is increased by two. When
					it reaches the total number of cards, a win pop-up is displayed to the user.
				</li>
				<li>User experience. Smooth transitions and animations are used in order to create a nice user experience.</li>
			</ol>
		</article>
	),
	screenshots: {
		lq: 'https://res.cloudinary.com/lkaratun/image/upload/w_600/v1540266945/portfolio/memory_game_web.png',
		hq: 'https://res.cloudinary.com/lkaratun/image/upload/v1540266945/portfolio/memory_game_web.png',
		alt: 'Memory game project'
	},
	links: {
		result: 'https://memory-game.levkaratun.com',
		code: 'https://github.com/lkaratun/memory_game'
	}
};
