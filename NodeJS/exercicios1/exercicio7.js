//• Crie um programa que verifique se um número fornecido pelo usuário é primo ou não

const readline = require("readline");
let ehPrimo = true;

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});

rl.question("informe um numero para ver se é primo", numero =>{
    if (numero <= 1) {
        console.log(numero + " não é um número primo.");
      } else {
        for (let i = 2; i < numero; i++) {
          if (numero % i === 0) {
            ehPrimo = false;
            break;
          }
        }
     }
        if (ehPrimo) {
          console.log(numero + " é um número primo.");
        } else {
          console.log(numero + " não é um número primo.");
        }
   rl.close();
});