let navLinks = document.querySelectorAll(".nav-link");


navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    restoreLinksAppearance(navLinks);
    e.target.style.textDecoration = "underline";
  })
})

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
  // let distance = targetPosition - startPosition;
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


document.querySelectorAll('.scroll-link').forEach((link) => link.addEventListener('click', (e) => {
  // console.log(document.querySelector(e.target.getAttribute("href")));
  let target = document.querySelector(e.target.getAttribute("href"));
  smoothScroll(target, 300);
}));