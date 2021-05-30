import { useRef } from 'react';
import './App.scss';
import HomePage from '../HomePage/HomePage';
import AboutPage from '../AboutPage/AboutPage';
import ProjectsPage from '../ProjectsPage/ProjectsPage';
import NavBar from '../NavBar/NavBar';
import ContactsPage from '../ContactsPage/ContactsPage';

function App() {
	const navBarRef = useRef(null);

	return (
		<div className="App">
			<NavBar navBarRef={navBarRef} />
			<HomePage navBarRef={navBarRef} />
			<AboutPage />
			<ProjectsPage />
			<ContactsPage />
		</div>
	);
}

export default App;
