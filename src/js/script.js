const hamburger = document.querySelector(".hamburger"),
  menu = document.querySelector(".menu"),
  close = document.querySelector(".menu__btn-close"),
  overlay = document.querySelector(".menu__overlay");

function menuToggler(el) {
  el.classList.toggle("active");
}

hamburger.addEventListener("click", () => {
  menuToggler(menu);
});
close.addEventListener("click", () => {
  menuToggler(menu);
});
overlay.addEventListener("click", () => {
  menuToggler(menu);
});

const counters = document.querySelectorAll(".skills__ratings-counter"),
  lines = document.querySelectorAll(".skills__ratings-line span");

counters.forEach((item, i) => {
  lines[i].style.width = item.innerHTML;
});
