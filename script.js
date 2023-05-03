"user-strict";

let linkMenu = document.querySelector("ul");

// let creatImg = document.createElement("li");
// creatImg.innerHTML = `<img src="imagens/kaess.png" alt="" style="width:50px">`;
// linkMenu.append(creatImg)


function menu() {
  let ul = document.querySelector("ul");
  let listaLink = document.querySelectorAll("nav ul li a");
  ul.classList.toggle("remove");
  ul.style.transition = "ease 1s";
}

linkMenu.addEventListener("click", function () {
  linkMenu.classList.toggle("remove");
});
