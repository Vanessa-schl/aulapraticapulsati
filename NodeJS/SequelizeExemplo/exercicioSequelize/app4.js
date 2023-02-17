const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'oracle',
    database: 'xe',
    username: 'system',
    password: 'pulsati2023',
    host: '192.168.0.50',
    port: 1521,
    dialectOptions: {
    connectTimeout: 30000}
});

const {Model, DataTypes} = require('sequelize');
class Aeroporto extends Model {}
Aeroporto.init({
    codigo: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        autoIncrement: true
    },
    nomeAeroporto: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'VANE_AEROPORTO',
    timestamps: false

});
sequelize.sync();

const express = require('express');
const app = express();

app.use(express.json());

app.post('/aeroporto', async (req, res) => {
    const {nomeAeroporto} = req.body;
    const usuario = new Aeroporto();
    usuario.nomeAeroporto = nomeAeroporto;
    await usuario.save();
    res.json(usuario);
    
})

app.get('/aeroportos', async (req, res) => {
    const aeroportos = await Aeroporto.findAll();
    res.json(aeroportos);
})

app.put('/aeroporto/:codigo', async (req, res) => {
    const codigo = req.params.codigo;
    const usuario = await Aeroporto.findByPk(codigo);
    const {nomeAeroporto} = req.body;
    usuario.nomeAeroporto = nomeAeroporto;
    await usuario.save();
    res.json(usuario);
})

app.delete('/aeroporto/:codigo', async (req, res) => {
    const codigo = req.params.codigo;
    const usuario = await Aeroporto.findByPk(codigo);
    await usuario.destroy();
    res.json({data: "usuario deletado com sucesso"});
})

app.listen(8000);