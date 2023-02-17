const Editora = require('../model/editora').Editora;

exports.createEditora = async (req, res) => {
   const {nomeEditora,cnpjEditora} = req.body;
   const usuario = new Editora();
   usuario.nomeEditora = nomeEditora;
   usuario.cnpjEditora = cnpjEditora;
   await usuario.save();
   res.json(usuario);
}

exports.getEditora = async (req, res) => {
    const editora = await Editora.findAll();
    res.json(editora);
}

exports.updateEditora = async (req, res) => {
    const codigo = req.params.codigo;
    const usuario = await Editora.findByPk(codigo);
    const {nomeEditora,cnpjEditora} = req.body
    usuario.nomeEditora = nomeEditora;
    usuario.cnpjEditora = cnpjEditora;
    await usuario.save();
    res.json(usuario);
}

exports.deleteEditora = async (req, res) => {
    const codigo = req.params.codigo;
    const usuario = await Editora.findByPk(codigo);
    await usuario.destroy();
    res.json({data: "editora deletada com sucesso"});

}
