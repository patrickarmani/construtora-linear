
// scripts/btn_ficha.js
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.ficha-btn');
    if (!btn) return;
  
    /* Caminho da imagem que será exibida ----------- */
    const imgSrc = 'images/ficha_tecnica1.jpg';   // ajuste se o nome / pasta mudar
  
    btn.addEventListener('click', (e) => {
      e.preventDefault();               // não navega
      btn.classList.add('clicked');     // pinta o botão
  
      /* após 120 ms (feedback visual), abre a janela */
      setTimeout(() => {
        const w = 700, h = 700;
        const left = (screen.width  - w) / 2;
        const top  = (screen.height - h) / 2;
  
        window.open(
          imgSrc,
          'FichaTecnica',
          `width=${w},height=${h},left=${left},top=${top},resizable=no`
        );
      }, 120);
    });
  });
  