// Hamburger menu
document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".nav-links");

    if (menuIcon && navLinks) {
        menuIcon.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }
// Existing checkout and quantity code
const buttons = document.querySelectorAll(".item-number button");
    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const span = btn.parentElement.querySelector("span");
            let value = parseInt(span.textContent);
            if (btn.textContent === "+") value++;
            else if (btn.textContent === "-" && value > 1) value--;
            span.textContent = value;
        });
    });

    const orderBtn = document.querySelector(".place-order");
    if (orderBtn) {
        orderBtn.addEventListener("click", () => {
            alert("Your order has been placed! Thank you for shopping with CRI★MIN.");
        });
    }
});