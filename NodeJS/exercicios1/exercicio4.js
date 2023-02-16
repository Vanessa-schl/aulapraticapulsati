//• Crie um programa que verifique se um número fornecido pelo usuário é par ou ímpar.

const readline = require("readline");

 const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
 });

 rl.question("digite um numero?", numero =>{
    if(numero % 2 == 0){
    console.log(`${numero} é par`);
    }else{
        console.log(`${numero}! é impar`);
    }
    rl.close();
 });