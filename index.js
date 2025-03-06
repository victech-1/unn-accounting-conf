window.addEventListener("scroll", function () {
    let navbar = document.getElementById("nav-container");

    if (window.scrollY > 20) {  // When user scrolls down 50px
        navbar.classList.add("nav-shadow");
    } else {
        navbar.classList.remove("nav-shadow");
    }
});

const closeBtn = document.querySelector(".close");
const menuBtn = document.querySelector(".menu-bar");



document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelector(".nav_links");

    menuBtn.addEventListener("click", function () {
        navLinks.classList.add("active");
        menuBtn.style.display = "none";
        closeBtn.style.display = "block";
    });

    closeBtn.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuBtn.style.display = "block";
        closeBtn.style.display = "none";
    });
});





function checkScreenSize() {
    if (window.innerWidth > 774) {  
        menuBtn.style.display = "none"; // Hide menu button on larger screens
        closeBtn.style.display = "none"; 
    } else {
        menuBtn.style.display = "block"; // Show menu button on smaller screens
        
    }
}

function replaceSpan() {
    let container = document.getElementById("container");
    let span = document.getElementById("toggleElement");

    if (window.innerWidth < 600) { // Adjust this width as needed
        if (span) {
            // Create a new button
            let button = document.createElement("button");
            button.id = "toggleElement";
            button.chil
            // Replace the span with the button
            container.replaceChild(button, span);
        }
    } else {
        let button = document.getElementById("toggleElement");
        if (button && button.tagName === "INPUT") {
            let span = document.createElement("span");
            span.id = "toggleElement";
            span.textContent = "Text";

            // Replace the button back with the span
            container.replaceChild(span, button);
        }
    }
}

function loadComponent(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => document.getElementById(id).innerHTML = data);
}

// Run on window resize
// window.addEventListener("resize", replaceSpan);

// Run on page load
// window.addEventListener("load", replaceSpan);
loadComponent("header", "header.html");
loadComponent("footer", "footer.html");

// Run on page load
checkScreenSize();

// Run on window resize
window.addEventListener("resize", checkScreenSize);
