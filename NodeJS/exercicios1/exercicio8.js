//• Crie um programa que leia dois números do usuário e exiba o resultado da multiplicação deles


const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("escolha o primeiro numero", numero1 =>{
   rl.question("escolha o segundo numero", numero2 =>{
    console.log(parseInt(numero1)*parseInt(numero2));
    rl.close();
})});