import "./scss/style.scss";
import "./scss/readMore.scss";

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

function handleArrowClick(e) {
  e.preventDefault();
  highlightLink(document.querySelector("#about-link"));
  const scrollTarget = document.querySelector("#about");
  smoothScrollNative(scrollTarget);
}

function handleNavigationClick(e) {
  e.preventDefault();
  highlightLink(e.target);
  const scrollTarget = document.querySelector(e.target.getAttribute("href"));
  smoothScrollNative(scrollTarget);
}

function highlightLink(target) {
  restoreLinksAppearance(navLinks);
  target.style.textDecoration = "underline";
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

function smoothScrollNative(target) {
  const navBarHeight = navBar.getBoundingClientRect().height;
  const targetPosition = target.getBoundingClientRect().top - navBarHeight;
  console.log("targetPosition", targetPosition);
  console.log("window.pageYOffset", window.pageYOffset);
  window.scroll({
    top: window.pageYOffset + targetPosition,
    behavior: "smooth"
  });
}

function enlargeScreenshot(e) {
  e.target.parentElement.classList.toggle("expanded");
  document
    .querySelectorAll("aside img.icon")
    .forEach(element => element.classList.toggle("hidden"));
}

const screenshots = document.querySelectorAll("aside img");
screenshots.forEach(element => element.addEventListener("click", enlargeScreenshot));
