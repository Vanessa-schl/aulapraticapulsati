const botao = document.getElementById('botao');
const container = document.getElementById('container');

botao.addEventListener('click', () => {
  const novoElemento = document.createElement('p');
  novoElemento.textContent = 'Novo Elemento';
  container.appendChild(novoElemento);
});
