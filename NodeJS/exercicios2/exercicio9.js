//Crie um programa que use a nova sintaxe de "let" e "const" do ECMAScript 6 para definir variáveis que só possam
//ser acessadas dentro de um bloco de código.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("escolha o primeiro numero", function(numero1){
   rl.question("escolha o segundo numero", function(numero2){
    let soma = 0;
    soma += (numero1*numero2);
    console.log(soma);
    rl.close();
})});