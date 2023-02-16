//•Crie um programa que use a nova sintaxe de classes do ECMAScript 6 para definir uma classe "ContaBancaria",
//crie um objeto a partir dessa classe e imprima no console.

class ContaBancaria{
    nome = 'vanessa';
    numeroConta= 123;

    constructor(nome, numeroConta){
        this.nome = nome;
        this.numeroConta= numeroConta
    }
}

exports.ContaBancaria = ContaBancaria;