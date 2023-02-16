//• Crie um programa que leia dois números do usuário e exiba o resultado da soma desses números.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("escolha o primeiro numero", numero1 =>{
   rl.question("escolha o segundo numero", numero2 =>{
    console.log(parseInt(numero1)+parseInt(numero2));
    rl.close();
})});







