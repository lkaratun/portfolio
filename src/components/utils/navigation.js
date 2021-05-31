export function handleNavigationClick(e, navBarRef) {
	e.preventDefault();
	highlightLink(e.target, navBarRef);
	console.log(
		"🚀 ~ file: navigation.js ~ line 17 ~ handleNavigationClick ~ e.target.getAttribute('href').replace('/', '')",
		e.target.getAttribute('href').replace('/', '')
	);
	const scrollTarget = document.querySelector(e.target.getAttribute('href').replace('/', ''));
	console.log('🚀 ~ file: navigation.js ~ line 6 ~ handleNavigationClick ~ scrollTarget', scrollTarget);
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

function smoothScrollNative(target, navBarRef) {
	const navBarHeight = navBarRef.current.getBoundingClientRect().height;
	const targetPosition = target.getBoundingClientRect().top - navBarHeight;
	window.scroll({
		top: window.pageYOffset + targetPosition,
		behavior: 'smooth'
	});
}
