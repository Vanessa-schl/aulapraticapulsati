function criar(){
    let elemento = document.createElement("div")

    elemento.innerHTML = "novo elemento adicionado";

    let texto1 = document.getElementById('texto');
    texto1.appendChild(elemento);

}