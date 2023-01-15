navBurger = document.querySelector(".navbar-burger");
navMenu = document.querySelector(".navbar-menu");

navBurger.addEventListener("click", () => {
    navMenu.classList.toggle("is-active");
    navBurger.classList.toggle("is-active");
})
