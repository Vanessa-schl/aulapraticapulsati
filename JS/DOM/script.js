// Criação Objeto

// let pessoa = {
//    nome: 'João',
//    idade: 20,
//    peso: 80.5,
// };

// pessoa.idade = 21;

// let titulo = document.getElementById('titulo');
// console.log(titulo);

// let lista = document.getElementsByClassName('listaNomes');
// console.log(lista);

// let lis = document.getElementsByTagName('li');
// console.log(lis);

// let titulo2 = document.querySelector('#titulo');

// let lista2 = document.querySelectorAll('.listaNomes');

// let lis2 = document.querySelectorAll('li');

const funcaoClicar = async () => {
   let input = document.querySelector('#txtNome');

   let respostaPura = await fetch(
      `https://viacep.com.br/ws/${input.value}/json/`
   );
   console.log(respostaPura);

   let respostaObjeto = await respostaPura.json();



   let resultadoP = document.querySelector('#resultado');
   resultadoP.innerHTML = respostaObjeto.logradouro;


   
   if (Number(respostaObjeto.ddd) < 30) {
      resultadoP.style.color = 'red';
   } else {
      resultadoP.style.color = 'green';
   }
};

const pressionar = (event) => {
   console.log(event.target.value);
   let resultadoP = document.querySelector('#resultado');

   // resultadoP.innerHTML = event.target.value;
};
