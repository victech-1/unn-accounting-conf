window.addEventListener("scroll", function () {
    let navbar = document.getElementById("nav-container");

    if (window.scrollY > 50) {  // When user scrolls down 50px
        navbar.classList.add("nav-shadow");
    } else {
        navbar.classList.remove("nav-shadow");
    }
});
