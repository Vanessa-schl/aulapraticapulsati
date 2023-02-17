const {Model, DataTypes} = require('sequelize');
const dbConfig = require('../config-db').getDbConfig;


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
    sequelize: dbConfig(),
    modelName: 'VANE_Aeroporto1',
    timestamps: false

});

exports.Aeroporto = Aeroporto;