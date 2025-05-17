document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.carousel img');
    let current = 0;
    
    function nextImage() {
        images[current].classList.remove('active');
        current = (current + 1) % images.length;
        images[current].classList.add('active');
    }
    
    setInterval(nextImage, 3000); // Меняем фото каждые 3 секунды
});
