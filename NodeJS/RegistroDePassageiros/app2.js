const express = require("express");
const empresaAerea = require("./empresasAereas").empresaAerea;
const app = express();
const empresas = [];
let proximoCodigo = 1;

app.use(express.json());

app.post("/empresas", (req, res) => {
  const {nomeEmpresa} = req.body;
  const empresa = new empresaAerea(nomeEmpresa, proximoCodigo);
  proximoCodigo++;
  empresas.push(empresa);
  res.json(empresa);
});

app.get("/empresas/get", (req, res) => {
  res.json(empresas);
});

app.get("/empresas/:codigo", (req, res) => {
  const codigo = req.params.codigo;
  const empresa = empresas.find((empresa) => empresa.codigo === codigo);
  res.json(empresa);
});

app.put("/empresas/:codigo", (req, res) => {
  const codigo = req.params.codigo;
  const empresa = empresas.find((empresa) => empresa.codigo === codigo);
  const { nomeEmpresa } = req.body;
  empresa.nomeEmpresa = nomeEmpresa;
  res.json(empresa);
});

app.delete("/empresas/:codigo", (req, res) => {
  const codigo = req.params.codigo;
  let posicao;
  empresas.forEach((empresa, index) => {
    if (empresa.codigo === codigo) {
      posicao = index;
    }
  });
  delete empresas[posicao];
  res.json({ data: "deletado com sucesso" });
});

app.listen(8000);
