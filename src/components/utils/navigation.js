export function handleNavigationClick(e, navBarRef) {
	e.preventDefault();
	highlightLink(e.target, navBarRef);
	const scrollTarget = document.querySelector(e.target.getAttribute('href'));
	smoothScrollNative(scrollTarget, navBarRef);
}

export function handleArrowClick(e, navBarRef) {
	e.preventDefault();
	highlightLink(navBarRef.current.querySelector('#about-link'), navBarRef);
	const scrollTarget = document.querySelector('#about');
	smoothScrollNative(scrollTarget, navBarRef);
}

function restoreLinksAppearance(links) {
	links.forEach(link => {
		link.style.textDecoration = 'none';
	});
}

export function highlightLink(target, navBarRef) {
	const navLinks = navBarRef.current.querySelectorAll('.scroll-link');
	restoreLinksAppearance(navLinks);
	target.style.textDecoration = 'underline';
}

function pauseNavLinksUpdateOnScroll() {
	const scrollHandler = window.onscroll;
	window.onscroll = null;
	setTimeout(() => {
		window.onscroll = scrollHandler;
	}, 1000);
}

function smoothScrollNative(target, navBarRef) {
	// This is necessary so that NavBar links don't highlight during smooth scroll triggered by clicking a nav link
	pauseNavLinksUpdateOnScroll();
	const navBarHeight = navBarRef.current.getBoundingClientRect().height;
	const targetPosition = target.getBoundingClientRect().top - navBarHeight;
	window.scroll({
		top: window.pageYOffset + targetPosition,
		behavior: 'smooth'
	});
}
