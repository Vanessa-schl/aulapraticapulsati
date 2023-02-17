const express = require('express');
const { salvarArquivo } = require('./arquivo');
const {deletarArquivo} = require('./arquivo');
const Aeroporto = require('./aeroportos').Aeroporto;
const app = express();
const aeroportos = [];
let proximoCodigo = 1;

app.use(express.json());

app.post('/aeroportos', (req, res) => {
    const {nomeAeroporto} = req.body;
    const aeroporto = new Aeroporto(proximoCodigo, nomeAeroporto);
    proximoCodigo++;
    aeroportos.push(aeroporto);
    salvarArquivo(`${aeroporto.codigo}.json`, JSON.stringify(aeroporto));
    res.json(aeroporto);
})

app.get('/aeroportos/get', (req, res) => {
    res.json(aeroportos);
})

app.put('/aeroportos/:codigo', (req, res) => {
    const codigo = req.params.codigo;
    const nome = aeroportos.find((nome) => nome.codigo == codigo);
    const {nomeAeroporto} = req.body;
    nome.nomeAeroporto = nomeAeroporto;
    salvarArquivo(`${nome.codigo}.json`, JSON.stringify(nome));
    res.json(nome);
})
 
app.delete('/aeroportos/:codigo', (req, res) => {
    const codigo = req.params.codigo;
    const nome = aeroportos.find((nome) => nome.codigo == codigo);
    let posicao;
    aeroportos.forEach((aeroporto, index) => {
        if (aeroporto.codigo == codigo) {
            posicao = index;
        }
})
    delete aeroportos[posicao];
    res.json({data: "deletado com sucesso"}); // mostra no console do postman

    deletarArquivo(`${nome.codigo}.json`).then((texto) => {
        res.end(texto);
    })
    res.json({data: "deletado com sucesso"}); // mostra no console do postman
});


app.listen(8000);