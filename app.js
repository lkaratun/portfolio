const navBar = document.querySelector("#navbar");
const navBarHeight = navBar.getBoundingClientRect().height;
const navLinks = document.querySelectorAll(".scroll-link");

navLinks.forEach(link => {
  link.addEventListener("click", handleNavigationClick);
});

const sectionsCoords = [];

const sections = document.querySelectorAll("section");
sections.forEach(section => {
  sectionsCoords.push(section.offsetTop);
  if (section.id !== "home") {
    section.style.height = `${section.getBoundingClientRect().height - navBarHeight}px`;
  }
});
const sectionsBreakpoints = [];
for (let i = 0; i < sectionsCoords.length - 1; i++) {
  sectionsBreakpoints.push((sectionsCoords[i] + sectionsCoords[i + 1]) / 2);
}


function handleScroll() {
  for (let breakpointIndex = 0; breakpointIndex < sectionsBreakpoints.length; breakpointIndex++) {
    if (window.scrollY < sectionsBreakpoints[breakpointIndex]) {
      highlightLink(navLinks[breakpointIndex]);
      return;
    }
  }
  highlightLink(navLinks[sectionsBreakpoints.length]);
}

const downArrow = document.querySelector("#downArrow");
downArrow.addEventListener("click", handleArrowClick);




function handleArrowClick() {
  highlightLink(document.querySelector("#about-link"));
  const scrollTarget = document.querySelector("#about");
  smoothScroll(scrollTarget, 300);
}

function handleNavigationClick(e) {
  highlightLink(e.target);
  const scrollTarget = document.querySelector(e.target.getAttribute("href"));
  smoothScroll(scrollTarget, 300);
}

function highlightLink(target) {
  restoreLinksAppearance(navLinks);
  target.style.textDecoration = "underline";
}
function restoreLinksAppearance(links) {
  links.forEach(link => { link.style.textDecoration = "none"; });
}





window.onscroll = () => {
  setNavBarVisibility();
  handleScroll();
};
const scrollThreshold = window.innerHeight / 4;
function setNavBarVisibility() {
  if (window.pageYOffset > scrollThreshold) {
    navBar.style.top = "0";
  }
  else {
    navBar.style.top = `-${navBarHeight}px`;
  }
}

function smoothScroll(target, duration) {
  const targetPosition = target.getBoundingClientRect().top - navBarHeight;
  const startPosition = window.pageYOffset;
  let startTime = null;
  function animation(currentTime) {
    if (startTime === null) { startTime = currentTime; }
    const timeElapsed = currentTime - startTime;
    const run = easeOutQuad(timeElapsed, startPosition, targetPosition, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) { window.requestAnimationFrame(animation); }
  }

  function easeOutQuad(t, b, c, d) {
    t /= d;
    return -c * t * (t - 2) + b;
  };

  window.requestAnimationFrame(animation);
}