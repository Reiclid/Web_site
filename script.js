let currentSlide = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

document.getElementById('prev').addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
        updateSlidePosition();
    }
});

document.getElementById('next').addEventListener('click', () => {
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
        updateSlidePosition();
    }
});

function updateSlidePosition() {
    slides.style.transform = `translateY(-${currentSlide * 100}vh)`;
}
