//hamburger menu

var open = document.getElementById("opn");
var close = document.getElementById("cls");
var nav = document.querySelector(".navigation");

open.addEventListener("click", Opne);
close.addEventListener("click", Close);

function Opne() {
  nav.style.transform = "translateX(0%)";
  open.style.display = "none";
  close.style.display = "block";
}
function Close() {
  nav.style.transform = "translateX(100%)";
  open.style.display = "block";
  close.style.display = "none";
}
