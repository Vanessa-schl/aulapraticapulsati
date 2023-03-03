function alterarElementos() {
    const elementos = document.querySelectorAll('p');
    elementos.forEach((elemento) => {
      elemento.textContent = 'Novo texto';
    });
  }
  