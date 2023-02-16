//==========array includes =============

const nomeCompleto = ['adriano','flach'];

console.log(nomeCompleto.length); //ver o tamanho da lista
console.log(nomeCompleto[0]);//mostrar a primeira letra
console.log(nomeCompleto.indexOf('adriano'));

//============find

const resultado = nomeCompleto.find(n => n == 'adriano'); //o n vai ficar em loop vendo se todos os nomes ali tem algum igual
console.log(resultado);
//------------------
const obj = [{
    chave: 1, valor: 'opcao1',
    chave: 2, valor: 'opcao2',
    chave: 2, valor: 'opcao3',
    chave: 2, valor: 'opcao4',
}]

const opcaoSelecionada = obj.find(opcao => opcao.chave == 1)
console.log(opcaoSelecionada);

//================= map entries e keys/values =======================

const usuario3 = {
    nome : "vanessa",
    sobrenome : "sha",
    idade: 20,
    sexo : "feminino"
}

console.log(Object.entries(usuario3));
Object.entries(usuario3).forEach(dados => console.log(dados));

const imprimir = (...chaves) =>{
    const valores = chaves.map(chave => usuario3[chave]); //map 
    console.log(valores);
}

console.log('imprimir nome e sobrenome');
imprimir('nome','sobrenome');