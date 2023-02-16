//Crie um programa que use as novas constantes do ECMAScript 6 para definir uma constante que não possa ser
//alterada.

const readline = require("readline");
const idade = 20;

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});

rl.question("qual o seu nome?", name =>{
   console.log(`ola ${name}! com a idade ${idade}!`);
   rl.close();
});
