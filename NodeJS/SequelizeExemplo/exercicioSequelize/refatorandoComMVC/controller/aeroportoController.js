const Aeroporto = require('../model/aeroportoModel').Aeroporto;


exports.createAeroporto = async (req, res) => {
    const {nomeAeroporto} = req.body;
    const usuario = new Aeroporto();
    usuario.nomeAeroporto = nomeAeroporto;
    await usuario.save();
    res.json(usuario);
}

exports.getAeroportos = async (req, res) => {
    const aeroportos = await Aeroporto.findAll();
    res.json(aeroportos);
}

exports.updateAeroporto = async (req, res) => {
    const codigo = req.params.codigo;
    const usuario = await Aeroporto.findByPk(codigo);
    const {nomeAeroporto} = req.body;
    usuario.nomeAeroporto = nomeAeroporto;
    await usuario.save();
    res.json(usuario);
}

exports.deleteAeroporto = async (req, res) => {
    const codigo = req.params.codigo;
    const usuario = await Aeroporto.findByPk(codigo);
    await usuario.destroy();
    res.json({data: "usuario deletado com sucesso"});
}

