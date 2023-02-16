const express = require('express');
const Usuario = require('./usuario').Usuario;
const app = express();
const usuarios = [];
let proximoCodigo =1;

app.use (express.json());

app.post('/usuarios', (req,res) =>{
    const {nome,sobrenome}  = req.body;
    const usuario = new Usuario(proximoCodigo,nome,sobrenome);
    proximoCodigo = proximoCodigo +1;
    usuarios.push(usuarios);
    res.json(usuario);
})

app.get('usuarios/:codigo', (req,res) =>{
    const codigo = req.params.codigo; // /:
    const usuario = usuarios.find(usuario => usuario.codigo === codigo);// o find percorre uma lista para ver se o codigo q eu esotu colocando é igua ao codigo q tem na lsita
    res.json(usuario);
})

app.put('usuarios/:codigo', (req,res) =>{
     const codigo = req.params.codigo; //por cauda do /:codigo
     const usuario = usuarios.find(usuario => usuario.codigo === codigo);
     const {nome,sobrenome} = req.body;
     usuario.nome = nome;
     usuario.sobrenome = sobrenome;
     res.json(usuario);
})

app.delete('usuarios/:codigo', (req,res) =>{
    const codigo = req.params.codigo;
    let posicao;
    usuarios.forEach((usuario, index) => {
        if(usuario.codigo === codigo){
            posicao = index;
        }
    });
    delete usuarios[posicao];
     res.json({data: "deletado com sucesso"})
});
    

app.listen(8000);