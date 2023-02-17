const Produto = require('../model/produtoModel').Produto;

exports.createProduto = async (req, res) => {
    const {nomeProduto,marcaProduto,descricaoProduto,valorProduto} = req.body;
    const usuario = new Produto();
    usuario.nomeProduto = nomeProduto;
     usuario.marcaProduto = marcaProduto;
     usuario.descricaoProduto = descricaoProduto;
     usuario.valorProduto = valorProduto;
     await usuario.save();
     res.json(usuario);
}

exports.getProdutos = async (req, res) => {
    const produtos = await Produto.findAll();
    res.json(produtos);
}

exports.updateProduto = async (req, res) => {
    const codigo = req.params.codigo;
    const usuario = await Produto.findByPk(codigo);
    const {nomeProduto,marcaProduto,descricaoProduto,valorProduto} = req.body;
    usuario.nomeProduto = nomeProduto;
    usuario.marcaProduto = marcaProduto;
    usuario.descricaoProduto = descricaoProduto;
    usuario.valorProduto = valorProduto;
    await usuario.save();
    res.json(usuario);
}

exports.deleteProduto = async (req, res) => {
    const codigo = req.params.codigo;
    const usuario = await Produto.findByPk(codigo);
    await usuario.destroy();
    res.json({data: "produto deletado com sucesso"});
}