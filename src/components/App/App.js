import './App.scss';
import HomePage from '../HomePage/HomePage';
import AboutPage from '../AboutPage/AboutPage';
import ProjectsPage from '../ProjectsPage/ProjectsPage';

function App() {
	return (
		<div className="App">
			<HomePage />
			<AboutPage />
			<ProjectsPage />
		</div>
	);
}

export default App;
