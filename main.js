let burgerMenu = document.querySelector('.navbar__icon')
let navbar = document.querySelector('.navbar')
burgerMenu.addEventListener("click", function (){
    navbar.classList.toggle("responsive")
})
window.onscroll = function() {myFunction()};
let sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }}


