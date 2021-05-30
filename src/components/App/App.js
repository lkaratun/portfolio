import throttle from 'lodash/throttle';
import './App.scss';
import { useEffect, useRef } from 'react';
import HomePage from '../HomePage/HomePage';
import AboutPage from '../AboutPage/AboutPage';
import ProjectsPage from '../ProjectsPage/ProjectsPage';
import NavBar from '../NavBar/NavBar';
import ContactsPage from '../ContactsPage/ContactsPage';
import { highlightLink } from '../utils/navigation';

function App() {
	const navBarRef = useRef(null);

	const sectionsBreakpoints = [];
	let currentSectionIndex = null;

	useEffect(() => {
		window.onscroll = throttle(() => {
			setNavBarVisibility();
			handleScroll();
		}, 100);
		setUpSectionDimensions();
	}, []);

	const scrollThreshold = window.innerHeight / 4;
	function setNavBarVisibility() {
		const navBarHeight = navBarRef.current.getBoundingClientRect().height;
		if (window.pageYOffset > scrollThreshold) {
			navBarRef.current.style.top = '0';
		} else {
			navBarRef.current.style.top = `-${navBarHeight}px`;
		}
	}

	function setUpSectionDimensions() {
		const sections = document.querySelectorAll('section');
		const sectionsCoords = [];
		sections.forEach(section => {
			const navBarHeight = navBarRef.current.getBoundingClientRect().height;
			sectionsCoords.push(section.offsetTop);
			if (section.id !== 'home') {
				section.style.minHeight = `${section.getBoundingClientRect().height - navBarHeight}px`;
			}
		});
		for (let i = 0; i < sectionsCoords.length - 1; i++) {
			sectionsBreakpoints.push((sectionsCoords[i] + sectionsCoords[i + 1]) / 2);
		}
	}

	function determineCorrectSectionIndex() {
		for (let breakpointIndex = 0; breakpointIndex < sectionsBreakpoints.length; breakpointIndex++) {
			if (window.scrollY < sectionsBreakpoints[breakpointIndex]) {
				return breakpointIndex;
			}
		}
		return sectionsBreakpoints.length;
	}

	function handleScroll() {
		const navLinks = navBarRef.current.querySelectorAll('.scroll-link');
		const correctSectionIndex = determineCorrectSectionIndex();
		if (currentSectionIndex !== correctSectionIndex) {
			highlightLink(navLinks[correctSectionIndex], navBarRef);
			currentSectionIndex = correctSectionIndex;
		}
	}

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
