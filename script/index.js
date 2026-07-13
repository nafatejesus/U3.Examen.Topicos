let currentSlide = 0;
const track = document.getElementById('carouselTrack');
const slides = document.querySelectorAll('.carousel-slide');

function moveCarousel(direction) {
    if (!track || slides.length === 0) return;

    currentSlide += direction;
    
    if (currentSlide >= slides.length) currentSlide = 0;
    if (currentSlide < 0) currentSlide = slides.length - 1;
    
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
}

if (track) {
    setInterval(() => moveCarousel(1), 5000);
}

// --- 2. LÓGICA DE FILTROS DEL CATÁLOGO ---
function filterCatalog(category, event) {
    // Manejo del estado visual del botón activo
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }

    // Filtrado de productos basado en las clases del HTML
    const products = document.querySelectorAll('.product-item');
    
    products.forEach(product => {
        // Muestra el producto si tiene la clase correspondiente (damas o caballeros)
        if (product.classList.contains(category)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}
