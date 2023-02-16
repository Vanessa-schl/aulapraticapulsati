//Crie um programa que use a nova sintaxe de arrow functions do ECMAScript 6 para definir uma função que
//calcule o quadrado de um número

const readline = require("readline");

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});

rl.question("defina um numero(base) para fazer ao quadrado?", numero =>{
    rl.question("defina um numero(expoente) para fazer ao quadrado?", numero2 =>{
        let resultado = Math.pow(numero, numero2);
   console.log("resultado" + resultado);
   rl.close();
})});