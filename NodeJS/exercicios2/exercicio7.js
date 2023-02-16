//•Crie um programa que use as novas string templates do ECMAScript 6 para concatenar duas strings sem o uso de
//operador de adição.

const readline = require("readline");

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});

rl.question("informe seu nome", nome =>{
    rl.question("informe seu sobrenome", sobrenome =>{
        console.log(`${nome} ${sobrenome}`)  
   rl.close();
})});
