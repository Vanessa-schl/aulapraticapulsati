//Crie um programa que use as novas constantes do ECMAScript 6 para definir uma constante que represente uma
//conversão de temperatura (Celsius para Fahrenheit).

const celsius = 20;
const fahrenheit = (celsius) => celsius * 1.8 + 32;
console.log(celsius, fahrenheit(celsius));
