const btn = document.querySelector('.ficha-btn');
const imagensBox = document.querySelector('.ficha-imagens'); // Seleciona o container das imagens

btn.addEventListener('click', () => {
    // Alterna a classe 'show' que controlará a visibilidade
    imagensBox.classList.toggle('show');
});
