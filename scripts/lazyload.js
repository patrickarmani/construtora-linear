// Lazyload
const allImages = document.querySelectorAll("img[data-src]");

// Função que troca o data-src pelo src real
const lazyLoad = (img) => {
    img.setAttribute("src", img.getAttribute("data-src"));
    img.onload = () => {
        img.removeAttribute("data-src");
        img.className = "ph";
    };
};

// Configuração do IntersectionObserver para ativar o carregamento
const options = {
    threshold: 0,
    rootMargin: "0px 0px -100px 0px"
};

if ('IntersectionObserver' in window) {
    const obsrvr = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                lazyLoad(item.target);
                observer.unobserve(item.target);
            }
        });
    }, options);

    allImages.forEach((img) => {
        obsrvr.observe(img);
    });
} else {
    // Se o navegador não suporta IntersectionObserver
    allImages.forEach((img) => {
        lazyLoad(img);
    });
}

// 🔁 Refreforço extra: se o usuário clicar antes da imagem carregar,
// forçamos o carregamento manualmente
document.querySelectorAll(".card img").forEach(img => {
    img.addEventListener("click", () => {
        if (img.hasAttribute("data-src")) {
            lazyLoad(img);
        }
    });
});
