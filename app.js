let navBar;
let navLinks;
const sectionsBreakpoints = [];
let currentSectionIndex = null;

document.addEventListener("DOMContentLoaded", () => {
  navBar = document.querySelector("#navbar");
  navLinks = document.querySelectorAll(".scroll-link");

  navLinks.forEach(link => {
    link.addEventListener("click", handleNavigationClick);
  });
  const downArrow = document.querySelector("#downArrow");
  downArrow.addEventListener("click", handleArrowClick);
});

window.addEventListener("load", () => {
  const sections = document.querySelectorAll("section");
  const sectionsCoords = [];
  sections.forEach(section => {
    const navBarHeight = navBar.getBoundingClientRect().height;
    sectionsCoords.push(section.offsetTop);
    if (section.id !== "home") {
      section.style.minHeight = `${section.getBoundingClientRect().height - navBarHeight}px`;
    }
  });
  for (let i = 0; i < sectionsCoords.length - 1; i++) {
    sectionsBreakpoints.push((sectionsCoords[i] + sectionsCoords[i + 1]) / 2);
  }
});

function handleScroll() {
  const correctSectionIndex = determineCorrectSectionIndex();
  if (currentSectionIndex !== correctSectionIndex) {
    highlightLink(navLinks[correctSectionIndex]);
    currentSectionIndex = correctSectionIndex;
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

function handleArrowClick() {
  highlightLink(document.querySelector("#about-link"));
  const scrollTarget = document.querySelector("#about");
  smoothScroll(scrollTarget, 300);
}

function handleNavigationClick(e) {
  console.log(handleNavigationClick);

  highlightLink(e.target);
  const scrollTarget = document.querySelector(e.target.getAttribute("href"));

  smoothScroll(scrollTarget, 300);
}

function highlightLink(target) {
  // console.log(highlightLink);
  restoreLinksAppearance(navLinks);
  target.style.textDecoration = "underline";
  console.log("target", target);
}
function restoreLinksAppearance(links) {
  links.forEach(link => {
    link.style.textDecoration = "none";
  });
}

window.onscroll = () => {
  setNavBarVisibility();
  handleScroll();
};
const scrollThreshold = window.innerHeight / 4;
function setNavBarVisibility() {
  const navBarHeight = navBar.getBoundingClientRect().height;
  if (window.pageYOffset > scrollThreshold) {
    navBar.style.top = "0";
  } else {
    navBar.style.top = `-${navBarHeight}px`;
  }
}

function smoothScroll(target, duration) {
  const navBarHeight = navBar.getBoundingClientRect().height;
  const targetPosition = target.getBoundingClientRect().top - navBarHeight;

  const startPosition = window.pageYOffset;

  let startTime = null;
  function animation(currentTime) {
    if (startTime === null) {
      startTime = currentTime;
    }
    const timeElapsed = currentTime - startTime;
    const run = easeOutQuad(timeElapsed, startPosition, targetPosition, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) {
      window.requestAnimationFrame(animation);
    }
  }

  function easeOutQuad(t, b, c, d) {
    t /= d;
    return -c * t * (t - 2) + b;
  }

  window.requestAnimationFrame(animation);
}
