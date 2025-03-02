// Seleciona o ícone de hambúrguer e o menu
const hamburger = document.querySelector('header nav.menu-pages div.hamburger');
const menu = document.querySelector('header nav.menu-pages ul.menu');

// Adiciona o evento de clique ao ícone de hambúrguer
hamburger.addEventListener('click', () => {
    // Alterna a classe 'show' para mostrar/ocultar o menu
    menu.classList.toggle('show');
});
