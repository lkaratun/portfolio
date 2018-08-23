const navLinks = document.querySelectorAll(".scroll-link");
navLinks.forEach(link => {
  link.addEventListener("click", handleNavigationClick);
});

const sectionsCoords = [];

const sections = document.querySelectorAll("section");
sections.forEach(section => {
  sectionsCoords.push(section.offsetTop);
});
const sectionsBreakpoints = [];
for (let i = 0; i < sectionsCoords.length - 1; i++) {
  sectionsBreakpoints.push((sectionsCoords[i] + sectionsCoords[i + 1]) / 2);
}
console.log(sectionsCoords);
console.log(sectionsBreakpoints);


function handleScroll() {
  for (let breakpointIndex = 0; breakpointIndex < sectionsBreakpoints.length; breakpointIndex++) {
    if (window.scrollY < sectionsBreakpoints[breakpointIndex]) {
      highlightLink(navLinks[breakpointIndex]);
      return;
    }
  }
  highlightLink(navLinks[sectionsBreakpoints.length]);
}

const navArrow = document.querySelector("#downArrow");
navArrow.addEventListener("click", handleArrowClick);




function handleArrowClick(e) {
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




const navBar = document.querySelector("#navbar");
const navBarHeight = navBar.getBoundingClientRect().height;
const scrollThreshold = window.innerHeight / 4;

window.onscroll = () => {
  setNavBarVisibility(navBar, scrollThreshold);
  handleScroll();
};
function setNavBarVisibility(navBar, scrollThreshold) {
  if (window.pageYOffset > scrollThreshold) {
    navBar.style.top = "0";
  }
  else {
    navBar.style.top = `-${navBarHeight}px`;
  }
}

function smoothScroll(target, duration) {
  const targetPosition = target.getBoundingClientRect().top;
  const startPosition = window.pageYOffset;
  let startTime = null;
  function animation(currentTime) {
    if (startTime === null) { startTime = currentTime; }
    const timeElapsed = currentTime - startTime;
    const run = easeOutQuad(timeElapsed, startPosition, targetPosition, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) { requestAnimationFrame(animation); }
  }

  function easeOutQuad(t, b, c, d) {
    t /= d;
    return -c * t * (t - 2) + b;
  };

  requestAnimationFrame(animation);
}