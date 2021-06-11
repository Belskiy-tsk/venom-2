const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".nav-menu");
const menuCloseButton = document.querySelector(".menu-close");

menuButton.addEventListener("click", ()=>{
    menu.classList.add("is-activ");
    menuCloseButton.classList.add("is-activ");
})

menuCloseButton.addEventListener("click", ()=>{
    menu.classList.remove("is-activ");
    menuCloseButton.classList.remove("is-activ");
})

