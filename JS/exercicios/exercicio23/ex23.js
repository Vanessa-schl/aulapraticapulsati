function alterarAtributo(id, atributo, valor) {
    var elemento = document.getElementById(id);
    elemento.setAttribute(atributo, valor);
  }
  
  function trocarImagem() {
    alterarAtributo("minha-imagem", "src", "");
  }
  