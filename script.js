"user-strict";

let linkMenu = document.querySelector("nav ul");
let menuHamburguer = document.querySelector('#ntn-hamburguer')
let menuCloseX = document.querySelector('#ntn-close-menu')


function menu() {
  linkMenu.classList.toggle("remove");
  linkMenu.style.transition = "ease .5s";
  if(linkMenu.classList.contains('remove')){
    menuHamburguer.innerHTML = menuCloseX.innerHTML
  }else{
   
    menuHamburguer.innerHTML = `<i class="fa-solid fa-bars"></i>`

  }
}



linkMenu.addEventListener("click", function(el) {
  linkMenu.classList.toggle("remove");
});
