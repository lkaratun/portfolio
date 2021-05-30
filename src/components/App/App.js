import './App.scss';
import HomePage from '../HomePage/HomePage';
import AboutPage from '../AboutPage/AboutPage';
import ProjectsPage from '../ProjectsPage/ProjectsPage';
import NavBar from '../NavBar/NavBar';
import ContactsPage from '../ContactsPage/ContactsPage';

function App() {
	return (
		<div className="App">
			<NavBar />
			<HomePage />
			<AboutPage />
			<ProjectsPage />
			<ContactsPage />
		</div>
	);
}

export default App;
