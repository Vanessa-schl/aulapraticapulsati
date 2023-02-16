//•Crie um programa que use as novas string templates do ECMAScript 6 para interpolar uma string.

const readline = require("readline");

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});

rl.question("seu primeiro nome?", nome =>{
    rl.question("seu sobrenome?", sobrenome =>{
   console.log(`${nome  + sobrenome}`);
   rl.close();
})});