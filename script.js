// Back-to-Top Button
const backToTopBtn = document.getElementById("back-to-top");

window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};

backToTopBtn.addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

// "Read More" Button Functionality
const readMoreBtn = document.getElementById("read-more-btn");
const fullContent = document.getElementById("newsletter-full-content");

readMoreBtn.addEventListener("click", function () {
    if (fullContent.style.display === "none" || fullContent.style.display === "") {
        fullContent.style.display = "block";
        readMoreBtn.innerText = "Read Less";
    } else {
        fullContent.style.display = "none";
        readMoreBtn.innerText = "Read More";
    }
});

// Contact Form Toggle
const contactBtn = document.getElementById("contact-btn");
const contactForm = document.getElementById("contact-form");

contactBtn.addEventListener("click", function () {
    contactForm.style.display = contactForm.style.display === "none" ? "block" : "none";
});
