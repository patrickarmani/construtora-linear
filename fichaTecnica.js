document.addEventListener('DOMContentLoaded', function () {
  const fichaBtn = document.querySelector('.ficha-btn');
  const modal = document.getElementById('ficha-modal');
  const closeBtn = document.getElementById('close-btn');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const fichaImg = document.getElementById('ficha-img');

  const imagens = [
      'images/fichaTecnica/fichaTec01.jpeg',
      'images/fichaTecnica/fichaTec02.jpeg',
      'images/fichaTecnica/fichaTec03.jpeg'
  ];
  let index = 0;

  fichaBtn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.remove('hidden');
      fichaImg.src = imagens[index];
  });

  closeBtn.addEventListener('click', () => {
      modal.classList.add('hidden');
  });

  prevBtn.addEventListener('click', () => {
      index = (index - 1 + imagens.length) % imagens.length;
      fichaImg.src = imagens[index];
  });

  nextBtn.addEventListener('click', () => {
      index = (index + 1) % imagens.length;
      fichaImg.src = imagens[index];
  });
});
