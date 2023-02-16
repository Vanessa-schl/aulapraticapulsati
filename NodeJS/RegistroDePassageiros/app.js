const express = require('express');
const Aeroporto = require('./aeroportos').Aeroporto;
const app = express();
const aeroportos = [];
let proximoCodigo = 1;

app.use(express.json());

app.post('/aeroportos', (req, res) => {
    const {nome} = req.body;
    const aeroporto = new Aeroporto(proximoCodigo, nome);
    proximoCodigo++;
    aeroportos.push(aeroporto);
    res.json(aeroporto);
})

app.get('/aeroportos/get', (req, res) => {
    res.json(aeroportos);
})

app.put('/aeroportos/:codigo', (req, res) => {
    const codigo = req.params.codigo;
    const nome = aeroportos.find(nome => nome.codigo == codigo);
    const nomeAeroporto = req.body;
    nome.nomeAeroporto = nomeAeroporto;
    res.json(nome);
})
 
app.delete('/aeroportos/:codigo', (req, res) => {
    const codigo = req.params.codigo;
    let posicao;
    aeroportos.forEach((aeroporto, index) => {
        if (aeroporto.codigo == codigo) {
            posicao = index;
        }
})
    delete aeroportos[posicao];
    res.json({data: "deletado com sucesso"}); // mostra no console do postman
});



app.listen(8000);