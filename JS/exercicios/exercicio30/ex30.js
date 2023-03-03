const botao = document.getElementById('botao');
const elementoParaRemover = document.querySelector('#container p');

botao.addEventListener('click', () => {
  elementoParaRemover.remove();
});
