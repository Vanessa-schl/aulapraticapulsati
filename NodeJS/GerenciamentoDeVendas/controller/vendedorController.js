const Vendedor = require ('../model/vendedorModel').Vendedor;

exports.createVendedor = async (req, res) => {
    const {nomeVendedor,cpf,telefone,endereco} = req.body;
    const usuario = new Vendedor();
    usuario.nomeVendedor = nomeVendedor;
    usuario.cpf = cpf;
    usuario.telefone = telefone;
    usuario.endereco = endereco;
    await usuario.save();
    res.json(usuario);
}

exports.getVendedor = async (req, res) => {
    const vendedor = await Vendedor.findAll();
    res.json(vendedor);
}

exports.updateVendedor = async (req, res) => {
    const codigo = req.params.codigo;
    const usuario = await Vendedor.findByPk(codigo);
    const {nomeVendedor,cpf,telefone,endereco} = req.body;
    usuario.nomeVendedor = nomeVendedor;
    usuario.cpf = cpf;
    usuario.telefone = telefone;
    usuario.endereco = endereco;
    await usuario.save();
    res.json(usuario);
}

exports.deleteVendedor = async (req, res) => {
    const codigo = req.params.codigo;
    const usuario = await Vendedor.findByPk(codigo);
    await usuario.destroy();
    res.json({data: 'usuario deletado com sucesso'});
}
