// document.addEventListener("scroll", function () {
//   let footer = document.querySelector("footer");
//   let scrollHeight = document.documentElement.scrollHeight;
//   let scrollTop = document.documentElement.scrollTop;
//   let clientHeight = document.documentElement.clientHeight;

//   if (scrollTop + clientHeight >= scrollHeight - 20) {
//     footer.style.display = "block"; // Mostra o footer quando chega ao final da página
//   } else {
//     footer.style.display = "none"; // Oculta o footer enquanto não chega ao final
//   }
// });

// document.addEventListener("scroll", function () {
//   let footer = document.querySelector("footer");
//   let scrollHeight = document.documentElement.scrollHeight;
//   let scrollTop = document.documentElement.scrollTop;
//   let clientHeight = document.documentElement.clientHeight;

//   if (scrollTop + clientHeight >= scrollHeight - 150) { 
//     footer.style.transform = "translateY(0)"; // Aparece ao rolar
//   } else {
//     footer.style.transform = "translateY(100%)"; // Some ao subir
//   }
// });

document.addEventListener("scroll", function () {
  let footer = document.querySelector("footer-small");
  let main = document.querySelector("main");
  let mainBottom = main.getBoundingClientRect().bottom;
  let windowHeight = window.innerHeight;

  if (mainBottom <= windowHeight) { 
    footer.style.transform = "translateY(0)"; // Aparece quando a main termina
  } else {
    footer.style.transform = "translateY(100%)"; // Some ao rolar para cima
  }
});

