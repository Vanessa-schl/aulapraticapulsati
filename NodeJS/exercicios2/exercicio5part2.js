let classes = require ('./exercicio5');

class pessoa extends classes.ContaBancaria{
    imprimir(){
        console.log(this.nome, this.numeroConta);
    }
}

let usuario = new pessoa("vanessa",123);
usuario.imprimir();