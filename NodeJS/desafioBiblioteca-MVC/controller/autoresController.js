const Autor = require('../model/autores').Autor;

exports.createAutor = async (req, res) => {
    const {nome,sobrenome,dataNascimento} = req.body;
    const usuario = new Autor();
    usuario.nome = nome;
    usuario.sobrenome = sobrenome;
    usuario.dataNascimento = dataNascimento;
    await usuario.save();
    res.json(usuario);
}

exports.getAutores = async (req, res) => {
    const autores = await Autor.findAll();
    res.json(autores);
}

exports.updateAutor = async (req, res) => {
    const codigo = req.params.codigo;
    const usuario = await Autor.findByPk(codigo);
    const {nome,sobrenome,dataNascimento} = req.body;
    usuario.nome = nome;
    usuario.sobrenome = sobrenome;
    usuario.dataNascimento = dataNascimento;
    await usuario.save();
    res.json(usuario);
}

exports.deleteAutor = async (req, res) => {
    const codigo = req.params.codigo;
    const usuario = await Autor.findByPk(codigo);
    await usuario.destroy();
    res.json({data: "usuario deletado com sucesso"})
}