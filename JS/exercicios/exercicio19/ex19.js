let cria = document.getElementById('cria');

cria.addEventListener('click', (onclick) => {
    let texto = document.getElementById('texto');

    let elemento = document.createElement('p');
    elemento.innerHTML = "Criado com sucesso!";

    texto.appendChild(elemento);
})
