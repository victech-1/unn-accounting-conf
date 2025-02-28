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
            // Create a new checkbox
            let checkbox = document.createElement("input");
            checkbox.type = "radio"; // Change to "checkbox" if needed
            checkbox.id = "toggleElement";

            // Replace the span with the checkbox
            container.replaceChild(checkbox, span);
        }
    } else {
        let checkbox = document.getElementById("toggleElement");
        if (checkbox && checkbox.tagName === "INPUT") {
            let span = document.createElement("span");
            span.id = "toggleElement";
            span.textContent = "Text";

            // Replace the checkbox back with the span
            container.replaceChild(span, checkbox);
        }
    }
}

// Run on window resize
window.addEventListener("resize", replaceSpan);

// Run on page load
window.addEventListener("load", replaceSpan);

// Run on page load
checkScreenSize();

// Run on window resize
window.addEventListener("resize", checkScreenSize);
