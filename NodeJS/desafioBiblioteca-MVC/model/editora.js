const {Model, DataTypes} = require('sequelize');
const dbConfig = require('../config-db').getDbConfig;

class Editora extends Model{}
Editora.init({
    codigoEditora: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        autoIncrement: true
    },
    nomeEditora: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cnpjEditora: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: dbConfig(),
    modelName: 'vane_editora1',
    timestamps: false
})

exports.Editora = Editora;