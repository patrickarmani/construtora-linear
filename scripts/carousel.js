const carouselContainer = document.querySelector('.carousel-container');
let currentIndex = 0;
const totalItems = document.querySelectorAll('.carousel-item').length;

// Função para atualizar a posição do carrossel
function updateCarousel() {
    const offset = -currentIndex * 100; // Deslocamento baseado na largura do item
    carouselContainer.style.transform = `translateX(${offset}%)`;
}

// Troca automática de imagens a cada 4 segundos
setInterval(() => {
    currentIndex = (currentIndex + 1) % totalItems; // Incrementa o índice e volta ao início no final
    updateCarousel();
}, 4000);
