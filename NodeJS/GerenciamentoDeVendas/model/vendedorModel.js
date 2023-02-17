const {Model, DataTypes} = require('sequelize');
const dbConfig = require('../config-db').getDbConfig;

class Vendedor extends Model {}
Vendedor.init({
    VendedorId: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        autoIncrement: true
    },
    nomeVendedor: {
         type: DataTypes.STRING,
         allowNull: false 
    },
    cpf: {
         type: DataTypes.STRING,
         allowNull: false
    },
    telefone: {
        type: DataTypes.STRING,
         allowNull: false
    },
    endereco: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: dbConfig(),
    tableName:'v_vend',
    timestamps: false
})

exports.Vendedor = Vendedor;
