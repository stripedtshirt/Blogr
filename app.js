const close = document.querySelector(".close");
const toggle = document.querySelector(".toggle-btn");
const ham = document.querySelector(".hamburger");
const nav = document.querySelector("#nav");
const dropMenu = document.querySelector(".drop-menu");
const dropDown = document.querySelector(".dropdown");
const dropMenu2 = document.querySelector(".drop-menu2");
const dropDown2 = document.querySelector(".dropdown2");
const dropMenu3 = document.querySelector(".drop-menu3");
const dropDown3 = document.querySelector(".dropdown3");

function Dropdown(element, div ) {
    this.element = element;
    this.div = div

    element.addEventListener("click", ()=> {
        div.classList.toggle("active");
    });
}

//toggle navBar
toggle.addEventListener("click", ()=> {
    nav.classList.toggle("active");
    close.classList.toggle("active");
    ham.classList.toggle("active");
});

//toggle inner navBar
// dropMenu.addEventListener("click", ()=> {
//     dropDown.classList.toggle("active");
//     console.log("it has been clicked");
// });

Dropdown(dropMenu, dropDown);
Dropdown(dropMenu2, dropDown2);
Dropdown(dropMenu3, dropDown3);