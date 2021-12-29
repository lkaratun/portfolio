import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useRef } from 'react';
import './App.scss';
import HomePage from '../HomePage/HomePage';
import AboutPage from '../AboutPage/AboutPage';
import ProjectsPage from '../ProjectsPage/ProjectsPage';
// import NavBar from '../NavBar/NavBar';
import SkillsPage from '../SkillsPage/SkillsPage';
import ContactsPage from '../ContactsPage/ContactsPage';
import BibPage from '../subpages/BibPage';

function App() {
	const navBarRef = useRef(null);

	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/bib-page">
						{/* <NavBar navBarRef={navBarRef} alwaysVisible /> */}
						<BibPage />
					</Route>
					<Route path="/">
						{/* <NavBar navBarRef={navBarRef} /> */}
						<HomePage navBarRef={navBarRef} />
						<AboutPage />
						<SkillsPage />
						<ProjectsPage />
						<ContactsPage />
					</Route>
					{/* <Route path="/memory-game">
						<Home />
					</Route> */}
				</Switch>
			</Router>
		</div>
	);
}

export default App;
