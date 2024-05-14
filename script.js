document.addEventListener('DOMContentLoaded', () => {
    let currentSlide = 0;
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    // Додаємо зображення з класом 'mem_2' до кожного слайда
    const slidesArray = document.querySelectorAll('.slide');
    slidesArray.forEach(slide => {
        const mem2 = document.createElement('div');
        mem2.classList.add('mem_2');
        const img = document.createElement('img');
        img.src = 'images/cats.png';
        img.alt = 'Картинка';
        mem2.appendChild(img);
        slide.appendChild(mem2);
    });

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
});
