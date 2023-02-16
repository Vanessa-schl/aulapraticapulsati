class Usuario{
    nome;
    sobrenome;

    constructor(name,sobrenome){
        this.nome = nome,
        this.sobrenome = sobrenome
    }

    getNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`
    }
}

exports.Usuario = Usuario;

new Usuario();
