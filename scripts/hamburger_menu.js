// function toggleMenu() {
//     const menu = document.querySelector('.hamburger');
//     menu.classList.toggle('show');
// }

function toggleMenu() {
    const menu = document.querySelector('header nav.menu-pages ul.menu');  // Seleciona o menu, não o hambúrguer
    menu.classList.toggle('show');  // Alterna a classe 'show' para exibir/ocultar o menu
}

// Adiciona o evento de clique ao ícone de hambúrguer
const hamburger = document.querySelector('header nav.menu-pages div.hamburger');
hamburger.addEventListener('click', toggleMenu);
