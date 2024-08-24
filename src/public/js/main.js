document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector("#mobile-menu");
    const navList = document.querySelector(".nav-list");

    menuToggle.addEventListener("click", function () {
        navList.classList.toggle("active");
    });
});

let currentSlide = 0;

function moveCarousel(direction) {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const totalSlides = items.length;

    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
}