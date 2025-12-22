
document.addEventListener("DOMContentLoaded", function() {
    // Load header
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.querySelector("header").innerHTML = data;

            // Set active navigation link
            const currentPage = window.location.pathname.split("/").pop();
            const navLinks = document.querySelectorAll(".main-nav a");
            navLinks.forEach(link => {
                if (link.getAttribute("href") === currentPage) {
                    link.classList.add("active");
                }
            });

            // Hamburger menu functionality
            const hamburger = document.querySelector(".hamburger-menu");
            const nav = document.querySelector(".main-nav");
            hamburger.addEventListener("click", () => {
                nav.classList.toggle("active");
            });
        });

    // Load footer
    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            document.querySelector("footer").innerHTML = data;
        });
});
