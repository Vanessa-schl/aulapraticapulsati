//• Crie um programa que leia um número do usuário e exiba a sua raiz quadrada

const readline = require("readline");
let raiz = 0;

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});

rl.question("informe um numero para fazer raiz quadrada", numero =>{
    raiz = Math.sqrt(numero);
    console.log(`raiz do numero informado é ${raiz}!`);
   rl.close();
});