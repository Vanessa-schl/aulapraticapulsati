const {Model, DataTypes} = require('sequelize');
const dbConfig = require('../config-db').getDbConfig;

class Produto extends Model {}
Produto.init({
    produtoID:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nomeProduto:{
        type: DataTypes.STRING,
        allowNull: false
    },
    marcaProduto:{
        type: DataTypes.STRING,
        allowNull: false
    },
    descricaoProduto:{
        type: DataTypes.STRING,
        allowNull: false 
    },
    valorProduto:{
        type: DataTypes.NUMBER,
        allowNull: false
    },
    quantidadeEstoque:{
        type: DataTypes.NUMBER,
        allowNull: false
    }
},{
    sequelize: dbConfig(),
    modelName: 'v_prods2',
    timestamps: false
});

exports.Produto = Produto;