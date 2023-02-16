//Crie um programa que leia um número do usuário e exiba a tabuada desse número

const readline = require("readline");

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});

rl.question("informe um numero para fazer a tabuada", numero =>{
    for(let i=1; i <=10; i++){
        console.log(numero +' vezes ' + i, ' = ' + (numero*i));
    }
   rl.close();
});