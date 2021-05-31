// eslint-disable-next-line
export default {
	header: 'Movie data visualization',
	screenshots: {
		lq: 'https://res.cloudinary.com/lkaratun/image/upload/w_600/c_limit,e_sharpen:50,f_auto,q_60/v1535470091/portfolio/movies_web.png',
		hq: 'https://res.cloudinary.com/lkaratun/image/upload/c_limit,e_sharpen:50,f_auto,q_60/v1535470091/portfolio/movies_web.png',
		alt: 'Screenshot of the movie dashboard project page'
	},
	links: {
		result: 'https://movie-data-visualization.levkaratun.com',
		code: 'https://github.com/lkaratun/visualization_dashboard'
	},
	subPageUrl: 'movie-data-visualization',
	contents: (
		<article>
			<h5>Problem</h5>
			<p>
				Visualize movie data to see whether there is a correlation between movie budget, popularity, and average rating.
			</p>
			<h5>Approach</h5>
			Dashboard consisting of four main sections:
			<ol>
				<li>A scatter plot: popularity vs budget. Display movie details on hover and click</li>
				<li>Movie details: a section containing basic information projects the movie (title, poster, budget, etc.)</li>
				<li>
					A map showing the number of movies filmed across the world. Filter by one or multiple countries by clicking
					the map
				</li>
				<li>
					A bar chart showing number of movies per genre. Filter by one or multiple genres by clicking the bar chart
				</li>
			</ol>
			<h5>Choice of technologies</h5>
			<ul>
				<li>
					The visualizations are created using{' '}
					<a href="https://d3js.org/" target="_blank" rel="noreferrer">
						D3
					</a>{' '}
					- an open-source library allowing to build different types of complex graphs.
				</li>
				<li>
					Due to the simple nature of the page, I decided not to use front-end frameworks and stick with vanilla
					JavaScript, HTML, and{' '}
					<a href="https://sass-lang.com/" target="_blank" rel="noreferrer">
						SASS
					</a>{' '}
					compiled into CSS.
				</li>
				<li>
					It is easier to store movie data in documents format rather than in tables, so I chose to use{' '}
					<a href="https://www.mongodb.com" target="_blank" rel="noreferrer">
						MongoDB
					</a>{' '}
					on the back end.
				</li>
				<li>
					Data is pulled from the back end API -- a MongoDB driver +{' '}
					<a href="https://expressjs.com/" target="_blank" rel="noreferrer">
						Express
					</a>{' '}
					application running on{' '}
					<a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">
						node.js
					</a>{' '}
					.
				</li>
				<li>
					The application is built using{' '}
					<a href="https://parceljs.org/" target="_blank" rel="noreferrer">
						parcel.js
					</a>{' '}
					and hosted on a{' '}
					<a href="https://aws.amazon.com/ec2/" target="_blank" rel="noreferrer">
						AWS EC2
					</a>{' '}
					instance running{' '}
					<a href="https://www.nginx.com/" target="_blank" rel="noreferrer">
						Nginx
					</a>{' '}
					web server.
				</li>
				<li>
					Continuous integration is set up using{' '}
					<a href="https://jenkins.io/" target="_blank" rel="noreferrer">
						Jenkins
					</a>{' '}
					and{' '}
					<a href="http://github.com" target="_blank" rel="noreferrer">
						GitHub
					</a>{' '}
					web hooks.
				</li>
			</ul>
			<h5 className="inline-header">Challenges</h5>
			<input type="checkbox" className="read-more-state" id="post-1" />
			<label htmlFor="post-1" className="read-more-trigger"></label>
			<ol>
				<li>
					Data formatting
					<div className="read-more-target">
						The data used were acquired from
						<a href="https://www.themoviedb.org/" target="_blank" rel="noreferrer">
							TMDB
						</a>
						in CSV format, with individual fields wrapped in double quotation marks. Some of the the fields (such as
						movie plot) contained single, double quotation marks, as well as commas. Additionally, the object keys were
						wrapped in single quotes: this made it impossible to parse the file as JSON as is. To solve this problem, I
						reformatted the file in three steps:
						<ol>
							<li>
								Wrote a script to convert the file from CSV format to DSV, changing the field separator from comma to
								pipe ( | ).
							</li>
							<li>Using a regular expression, took out all double quotes that wrapped individual fields.</li>
							<li>
								Using another regular expression, replaced single quotes that wrapped object keys with double quotes,
								without replacing the apostrophes.
							</li>
							<li>Wrote a script to read the resulting DSV file and populate the database.</li>
						</ol>
					</div>
				</li>

				<li>
					Performance tuning
					<div className="read-more-target">
						When a big time interval was chosen and no other filters were applied, a large amount of data had to be
						retrieved from the DB and transferred over to the front end. The initial version of the page took almost 3
						seconds to load, and requests for more data taking up to 1.5 seconds. To decrease the load time, I took a
						number of steps:
						<ol>
							<li>
								Decreased the amount of fields retrieved from the database. I decided not to read the plot field even
								though we <em>might</em> need it if the user clicks on the movie to see details. Instead, pull it only
								<em>if</em> and <em>when</em> the user actually requests the details. This introduced a slight delay in
								retrieving the movie details, but significantly decreased page load time and improved general
								responsiveness.
							</li>
							<li>
								Delegated processing of data to the MongoDB engine. Instead of retrieving all data projects what movies
								were filmed in each country, count the movies per country in the DB and only transfer the final number.
							</li>
							<li>
								Set up indices on the DB to speed up reads: since new data in never written to the DB, there is no
								downside to adding several indices to the collection.
							</li>
							<li>
								Cache data on front-end: after each response from the backend API, save the retrieved data in memory.
								For any subsequent requests, if some or all data is cached, read it from memory and only request the
								missing part.
							</li>
						</ol>
						As a result, the initial page load time decreased from 2 to 0.5 seconds, additional requests - from 0.5-1.5
						to 0.2-0.5 seconds (depending on the amount of data requested).
					</div>
				</li>
			</ol>
		</article>
	)
};
