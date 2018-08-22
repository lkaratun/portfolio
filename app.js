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
