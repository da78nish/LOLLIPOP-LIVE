// Hide navbar on scroll down, show on scroll up
let lastScrollTop = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  let st = window.scrollY;
  if (st > lastScrollTop) {
    navbar.style.top = "-70px"; // hide
  } else {
    navbar.style.top = "0"; // show
  }
  lastScrollTop = st;
});
