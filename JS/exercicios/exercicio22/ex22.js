function removeAtributo(elemento, atributo) {
    elemento.removeAttribute(atributo);
  } 

  function removerAtributo() {
    let meuElemento = document.getElementById("meu-elemento");
    removeAtributo(meuElemento, "style");
  }