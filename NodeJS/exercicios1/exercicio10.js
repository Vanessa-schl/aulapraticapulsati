//• Crie um programa que leia um número do usuário e exiba o seu fatorial.

const readline = require("readline");
let resultado = 1;
let count = 1;

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});

rl.question("escolha um numero para fazer o fatorial", numero =>{
    while (count <= numero) {
        resultado = resultado * count;
        count++;
      }
      console.log(resultado);
   rl.close();
});
