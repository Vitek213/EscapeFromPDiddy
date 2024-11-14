// GSAP Animation on Page Load
gsap.from(".hero-title", {
    opacity: 0,
    y: -100,
    duration: 1.5,
    delay: 0.5,
    ease: "power4.out"
});

// Hamburger Menu Toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Portfolio Filtering
const filterBtns = document.querySelectorAll(".filter-btn");
const portfolioItems = document.querySelectorAll(".portfolio-item");

filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const filter = btn.getAttribute("data-filter");
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        portfolioItems.forEach(item => {
            if (filter === "all" || item.classList.contains(filter)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
});

// Form Validation
const form = document.getElementById("contact-form");
form.addEventListener("submit", function (event) {
    let valid = true;

    // Name Validation
    const name = document.getElementById("name");
    if (!name.value.trim()) {
        document.getElementById("name-error").textContent = "Name is required.";
        valid = false;
    } else {
        document.getElementById("name-error").textContent = "";
    }

    // Email Validation
    const email = document.getElementById("email");
    const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (!email.value.match(emailPattern)) {
        document.getElementById("email-error").textContent = "Please enter a valid email.";
        valid = false;
    } else {
        document.getElementById("email-error").textContent = "";
    }

    // Message Validation
    const message = document.getElementById("message");
    if (!message.value.trim()) {
        document.getElementById("message-error").textContent = "Message cannot be empty.";
        valid = false;
    } else {
        document.getElementById("message-error").textContent = "";
    }

    if (!valid) {
        event.preventDefault();
    }
});
