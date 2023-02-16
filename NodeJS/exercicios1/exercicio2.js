//• Crie um programa que leia um nome do usuário e exiba uma saudação personalizada na tela.
 const readline = require("readline");

 const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
 });

 rl.question("qual o seu nome?", name =>{
    console.log(`ola ${name}!`);
    rl.close();
 });
