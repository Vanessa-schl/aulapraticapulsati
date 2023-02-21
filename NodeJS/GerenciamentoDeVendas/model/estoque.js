const{Model, DataTypes} = require('sequelize');
const dbConfig = require('../config-db').getDbConfig;

class Estoque extends Model {}
Estoque.init({
    estoqueID: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        autoIncrement: true
    },
    codigoProduto:{
        type:DataTypes.NUMBER,
        },
        quantidadeEstoque:{
            type:DataTypes.NUMBER,
            allowNull:false
        }
        
    }
},{
    sequelize: dbConfig(),
    timestamps: false,

})

exports.Estoque = Estoque;