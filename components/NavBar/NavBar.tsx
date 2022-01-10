// import throttle from 'lodash/throttle';
// import React, { useEffect } from 'react';
// import { highlightLink } from '../utils/navigation';
//
// import { handleNavigationClick } from '../utils/navigation';
// import './NavBar.scss';
//
// const SECTIONS = [
// 	{ id: 'home', label: 'Home' },
// 	{ id: 'about', label: 'About me' },
// 	{ id: 'projects', label: 'Projects' },
// 	{ id: 'contacts', label: 'Contacts' }
// ];
//
// type Props = { navBarRef: React.RefObject<HTMLDivElement>, alwaysVisible: boolean };
//
// export default function NavBar({ navBarRef, alwaysVisible }: Props): JSX.Element{
// 	useEffect(() => {
// 		if (alwaysVisible) return;
// 		const scrollThreshold = window.innerHeight / 4;
// 		function setNavBarVisibility() {
// 			const navBarHeight = navBarRef.current.getBoundingClientRect().height;
// 			if (window.pageYOffset > scrollThreshold) {
// 				navBarRef.current.style.top = '0';
// 			} else {
// 				navBarRef.current.style.top = `-${navBarHeight}px`;
// 			}
// 		}
//
// 		function setUpSectionDimensions() {
// 			const sectionsBreakpoints = [];
// 			const sections = document.querySelectorAll('section');
// 			const sectionsCoords = [];
// 			sections.forEach(section => {
// 				const navBarHeight = navBarRef.current.getBoundingClientRect().height;
// 				sectionsCoords.push(section.offsetTop);
// 				if (section.id !== 'home') {
// 					section.style.minHeight = `${section.getBoundingClientRect().height - navBarHeight}px`;
// 				}
// 			});
// 			for (let i = 0; i < sectionsCoords.length - 1; i++) {
// 				sectionsBreakpoints.push((sectionsCoords[i] + sectionsCoords[i + 1]) / 2);
// 			}
// 			return sectionsBreakpoints;
// 		}
//
// 		let currentSectionIndex = null;
// 		function handleScroll(sectionsBreakpoints) {
// 			const navLinks = navBarRef.current.querySelectorAll('.scroll-link');
// 			const correctSectionIndex = determineCorrectSectionIndex(sectionsBreakpoints);
// 			if (currentSectionIndex !== correctSectionIndex) {
// 				highlightLink(navLinks[correctSectionIndex], navBarRef);
// 				currentSectionIndex = correctSectionIndex;
// 			}
// 		}
//
// 		const sectionsBreakpoints = setUpSectionDimensions();
//
// 		setNavBarVisibility();
// 		window.onscroll = throttle(() => {
// 			setNavBarVisibility();
// 			handleScroll(sectionsBreakpoints);
// 		}, 100);
//
// 		return () => {
// 			window.onscroll = null;
// 		};
// 	}, [navBarRef, alwaysVisible]);
//
// 	function determineCorrectSectionIndex(sectionsBreakpoints) {
// 		for (let breakpointIndex = 0; breakpointIndex < sectionsBreakpoints.length; breakpointIndex++) {
// 			if (window.scrollY < sectionsBreakpoints[breakpointIndex]) {
// 				return breakpointIndex;
// 			}
// 		}
// 		return sectionsBreakpoints.length;
// 	}
//
// 	function handleClick(e) {
// 		if (alwaysVisible) return;
// 		handleNavigationClick(e, navBarRef);
// 	}
//
// 	function renderLinks() {
// 		return SECTIONS.map(({ id, label }) => (
// 			<li className={styles.nav-item} key={id}>
// 				<a className={styles.nav-link scroll-link} href={`/#${id}`} id={`${id}-link`} onClick={handleClick}>
// 					{label}
// 				</a>
// 			</li>
// 		));
// 	}
//
// 	return (
// 		<nav id={styles.navbar} className={styles.navbar navbar-dark bg-dark fixed-top navbar-expand-md p-0} ref={navBarRef}>
// 			<div className={styles.container}>
// 				<button
// 					className={styles.navbar-toggler}
// 					type="button"
// 					data-toggle="collapse"
// 					data-target="#navbarNav"
// 					aria-controls="navbarNav"
// 					aria-expanded="false"
// 					aria-label="Toggle navigation"
// 				>
// 					<span className={styles.navbar-toggler-icon}></span>
// 				</button>
// 				<div className={styles.collapse navbar-collapse} id={styles.navbarNav}>
// 					<ul className={styles.navbar-nav w-100 d-flex justify-content-center}>{renderLinks()}</ul>
// 				</div>
// 			</div>
// 		</nav>
// 	);
// }

export {};