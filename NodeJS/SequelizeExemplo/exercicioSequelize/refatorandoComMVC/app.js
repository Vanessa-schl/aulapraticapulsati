const {createAeroporto, getAeroportos, updateAeroporto, deleteAeroporto} = require ('./controller/aeroportoController');

const express = require('express');
const app = express();
app.use(express.json());

app.post('/aeroportos', createAeroporto);
app.get('/aeroportos', getAeroportos);
app.put('/aeroportos/:id', updateAeroporto);
app.delete('/aeroportos/:id', deleteAeroporto);

app.listen(8000);