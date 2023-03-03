function add(elemento,atributo, valor){
    elemento.setAttribute(atributo, valor);
}


function inserir(){
    let texto = document.getElementById("texto");
    add(texto,"style", "color: green;");
}

// //      function adicionarAtributo() {
//     let meuElemento = document.getElementById("meu-elemento");
//     add(meuElemento, "style", "color: red;");
//   }