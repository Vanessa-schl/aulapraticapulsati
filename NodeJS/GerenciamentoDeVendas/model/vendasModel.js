const {Model, DataTypes} = require('sequelize');
const dbConfig = require('../config-db').getDbConfig;

class Venda extends Model{}
Venda.init({
    codigoVenda:{
        type: DataTypes.NUMBER,
        primaryKey: true,
        autoIncrement: true
    },
    codigoProduto:{
        type: DataTypes.NUMBER,
        allowNull: false,
        foreignKey: true,
        references: {
            model: 'v_prods2s',
            key: 'produtoID'
        }
    },
    codigoVendedor:{
        type: DataTypes.NUMBER,
        allowNull: false,
        foreignKey: false,
        references: {
            model: 'v_vend',
            key: 'VendedorId'
        }      
    },
    quantidadeVendida:{
        type: DataTypes.NUMBER,
        allowNull: false
    }
},{
    sequelize: dbConfig(),
    modelName: 'v_venda3',
    timestamps: false
})

exports.Venda = Venda;