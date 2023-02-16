class Usuario {
    codigo;
    nome;
    sobrenome;

    constructor(codigo, nome, sobrenome) {
        this.codigo = codigo;
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

exports.Usuario = Usuario;