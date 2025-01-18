document.addEventListener("DOMContentLoaded", function () {
    // Selecionar a tabela
    const table = document.querySelector(".colors");

    // Obter os cabeçalhos e os valores da tabela
    const headers = Array.from(table.querySelectorAll("tr:first-child th"));
    const values = Array.from(table.querySelectorAll("tr:last-child td"));

    // Criar um contêiner para a nova estrutura
    const container = document.createElement("div");
    container.classList.add("colors-vertical");

    // Gerar o novo layout
    headers.forEach((header, index) => {
        const block = document.createElement("div");
        block.classList.add("color-block");

        const title = document.createElement("div");
        title.classList.add("color-title");
        title.textContent = header.textContent;

        const color = document.createElement("div");
        color.classList.add("color-box");

        // Pegar o código da cor da célula e aplicar no background
        const colorCode = values[index].textContent.trim();
        color.style.backgroundColor = colorCode; // Aplica a cor no fundo

        // Adicionar a classe correspondente
        color.classList.add(values[index].classList[0]); 

        // Exibir o código da cor dentro do bloco
        const colorText = document.createElement("span");
        colorText.textContent = colorCode;
        colorText.style.color = "black"; // Cor do texto em preto
        colorText.style.fontWeight = "bold"; // Torna o texto em negrito para destacar

        color.appendChild(colorText); // Adiciona o texto dentro do bloco de cor

        block.appendChild(title);
        block.appendChild(color);
        container.appendChild(block);
    });

    // Substituir a tabela pela nova estrutura
    table.replaceWith(container);
});
