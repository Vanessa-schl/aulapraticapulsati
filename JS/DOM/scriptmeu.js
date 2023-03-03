// //criacao objeto

// // let pessoa = {
// //     nome: 'joao',
// //     idade: 20,
// //     pesoa: 80.5,
// // };

// // pessoa.idade= 21;

// let titulo = document.getElementById('titulo'); //pega um elemento do html que tem o id 'titulo'

// let lista = document.getElementsByClassName('listaNomes');
// console.log(lista);

// let lis = document.getElementsByTagName('li');
// console.log(lis);

// let titula2 = document.querySelector('#titulo')// #id

// let titulo2 = document.querySelelectAll('h1');


const funcaoClicar = () =>{
    let input = document.querySelector('#txtNome');
    let titulo = document.querySelector('#titulo');
    console.log(input.value);
    input.style.animation = 'nome tempo ease infinite';
    titulo.classlist.toggle('azul');
}

