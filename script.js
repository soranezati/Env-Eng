document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.fontWeight = "bold";
            link.style.color = "#ff6347";
        });

        link.addEventListener("mouseout", () => {
            link.style.fontWeight = "normal";
            link.style.color = "#fff";
        });
    });
});
