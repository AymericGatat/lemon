/* MENU BURGER*/

const menuBtn = document.querySelector(".menu-btn");
const menuNav = document.querySelector(".nav-open")
let menuOpen = false;
menuBtn.addEventListener("click", () => {
    if (!menuOpen) {
        menuBtn.classList.add("open")
        menuNav.classList.remove("close")
        menuOpen = true;
    } else {
        menuBtn.classList.remove("open");
        menuNav.classList.add("close")
        menuOpen = false;
    }
})