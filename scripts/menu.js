document.addEventListener("DOMContentLoaded", function() {
    const corretores = document.querySelector("corretores");
    const submenu = document.querySelector("submenu");
    let timeout;

    corretores.addEventListener("click", function(event) {
        event.preventDefault();
        submenu.style.display = "block";  // Mostra o submenu
        clearTimeout(timeout);  // Cancela o fechamento anterior, se existir
        
        // Fecha o submenu após 3 segundos
        timeout = setTimeout(function() {
            submenu.style.display = "none";
        }, 3000);
    });

    // Mantém o submenu aberto enquanto o mouse está sobre ele
    submenu.addEventListener("mouseenter", function() {
        clearTimeout(timeout);  // Cancela o fechamento enquanto o mouse estiver sobre
    });

    submenu.addEventListener("mouseleave", function() {
        timeout = setTimeout(function() {
            submenu.style.display = "none";  // Fecha após o mouse sair
        }, 1000);
    });
});
