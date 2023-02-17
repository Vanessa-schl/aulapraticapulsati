const{Model, DataTypes} = require('sequelize');
const dbConfig = require('../config-db').getDbConfig;

class Livros extends Model {}
Livros.init({
    //título do livro, o número da edição, o número 
  //  com o ano de lançamento, o código da editor
    // e o código do autor.

    codigoLivro: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        autoIncrement: true
    },
    tituloLivro:{
        type: DataTypes.STRING,
        allowNull: false
    },
    numeroEdicao: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    anoLancamento: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    codEditor: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    codAutor: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
}, {
    sequelize: dbConfig(),
    modelName: 'v_livros1',
    timestamps: false
})

exports.Livros = Livros;