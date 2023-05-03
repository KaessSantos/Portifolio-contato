"user-strict";

let linkMenu = document.querySelector("ul");




function menu() {
  let ul = document.querySelector("ul");
  let listaLink = document.querySelectorAll("nav ul li a");
  ul.classList.toggle("remove");
  ul.style.transition = "ease .5s";
}

linkMenu.addEventListener("click", function () {
  linkMenu.classList.toggle("remove");
});
