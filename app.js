let navLinks = document.querySelectorAll(".scroll-link");
navLinks.forEach(link => link.addEventListener("click", handleNavigationClick));
let navArrow = document.querySelector("#downArrow");
navArrow.addEventListener("click", clickArrow);


function clickArrow(e) {
  restoreLinksAppearance(navLinks);
  document.querySelector("#about-link").style.textDecoration = "underline";
  let scrollTarget = document.querySelector(e.target.parentElement.getAttribute("href"));
  console.log(scrollTarget);
  smoothScroll(scrollTarget, 300);
}

function handleNavigationClick(e) {
  restoreLinksAppearance(navLinks);
  e.target.style.textDecoration = "underline";
  let scrollTarget = document.querySelector(e.target.getAttribute("href"));
  smoothScroll(scrollTarget, 300);
}

function restoreLinksAppearance(links) {
  links.forEach(link => link.style.textDecoration = "none")
}


let scrollThreshold = window.innerHeight / 4;
window.onscroll = () => {
  if (window.pageYOffset > scrollThreshold) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-70px";
  }
}



let navBarHeight = document.querySelector("#navbar").getBoundingClientRect().height;

function smoothScroll(target, duration) {
  // let targetPosition = target.getBoundingClientRect().top - navBarHeight;
  let targetPosition = target.getBoundingClientRect().top;
  let startPosition = window.pageYOffset;
  let startTime = null;
  function animation(currentTime) {
    if (startTime === null) { startTime = currentTime; }
    let timeElapsed = currentTime - startTime;
    let run = easeOutQuad(timeElapsed, startPosition, targetPosition, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) { requestAnimationFrame(animation); }
  }

  function easeOutQuad(t, b, c, d) {
    t /= d;
    return -c * t * (t - 2) + b;
  };

  requestAnimationFrame(animation);
}


// document.querySelectorAll('.scroll-link').forEach((link) => link.addEventListener('click', (e) => {
//   // console.log(document.querySelector(e.target.getAttribute("href")));
//   let target = document.querySelector(e.target.getAttribute("href"));
//   smoothScroll(target, 300);
// }));