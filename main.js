// Highlights Carousel
let currentSlide = 0;
const totalSlides = 5;
const cardWidth = 344; // w-80 (320px) + gap (24px)
const cardsPerPage = 3;
let autoPlayInterval;

function updateCarousel() {
    const track = document.getElementById('highlightsTrack');
    if (!track) return;

    const offset = currentSlide * cardWidth * cardsPerPage;
    track.style.transform = `translateX(-${offset}px)`;

    document.querySelectorAll('.carousel-dot').forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function moveCarousel(direction) {
    currentSlide += direction;
    if (currentSlide < 0) currentSlide = totalSlides - 1;
    if (currentSlide >= totalSlides) currentSlide = 0;
    updateCarousel();
    stopAutoPlay();
    startAutoPlay();
}

function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
    stopAutoPlay();
    startAutoPlay();
}

function startAutoPlay() {
    autoPlayInterval = setInterval(function() {
        currentSlide++;
        if (currentSlide >= totalSlides) currentSlide = 0;
        updateCarousel();
    }, 4000);
}

function stopAutoPlay() {
    clearInterval(autoPlayInterval);
}

// Initialize
startAutoPlay();

// Pause on hover
var carouselContainer = document.getElementById('highlightsTrack');
if (carouselContainer) {
    carouselContainer.parentElement.parentElement.addEventListener('mouseenter', stopAutoPlay);
    carouselContainer.parentElement.parentElement.addEventListener('mouseleave', startAutoPlay);
}
