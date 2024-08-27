let open = document.querySelector(".open");
let close = document.querySelector(".close");
let nav = document.querySelector("nav ul");

open.addEventListener("click", function () {
  nav.style.transform = "scale(1)";
  nav.style.opacity = 1;
  open.style.display = "none";
  close.style.display = "block";
});

close.addEventListener("click", function () {
  nav.style.transform = "scale(0)";
  nav.style.opacity = 0;
  open.style.display = "block";
  close.style.display = "none";
});
