document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.ficha-btn');
  const modal = document.getElementById('modalFicha');
  const img = document.getElementById('fichaImage');
  const closeBtn = modal.querySelector('.close-btn');
  const leftBtn = modal.querySelector('.nav-btn.left');
  const rightBtn = modal.querySelector('.nav-btn.right');

  const imagens = [
    'images/ficha_tecnica1.jpg',
    'images/ficha_tecnicai.jpg',
    'images/ficha_tecnica3.jpg',
    'images/ficha_tecnica4.jpg',
    'images/ficha_tecnica5.jpg',
    'images/ficha_tecnica6.jpg'
  ];

  let currentIndex = 0;

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    currentIndex = 0;
    img.src = imagens[currentIndex];
    modal.style.display = 'flex';
    updateNav();
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  rightBtn.addEventListener('click', () => {
    if (currentIndex < imagens.length - 1) {
      currentIndex++;
      img.src = imagens[currentIndex];
      updateNav();
    }
  });

  leftBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      img.src = imagens[currentIndex];
      updateNav();
    }
  });

  function updateNav() {
    leftBtn.style.display = currentIndex === 0 ? 'none' : 'block';
    rightBtn.style.display = currentIndex === imagens.length - 1 ? 'none' : 'block';
  }
});
