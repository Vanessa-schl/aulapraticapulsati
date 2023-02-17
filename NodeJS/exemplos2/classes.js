

class usuario extends pessoaFisica{ //herança
    _nome ; // anderline define que é privada
    _sobrenome;


constructor(nome,sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

set nome(nome){
    this._nome = 'lok';
}

imprimir(){
    console.log(this.nome, this.sobrenome);
    }

imprimir2 = () => {
    console.log(this.nome, this.sobrenome);
    }
}


//new usuario().imprimir();
let usuario1 = new usuario('jose','silva');
usuario1._nome = "adriano";
usuario1.imprimir();


let classes = require('./classe_pessoa_fisica');
