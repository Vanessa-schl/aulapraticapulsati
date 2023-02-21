const {
  createVendedor,
  getVendedor,
  updateVendedor,
  deleteVendedor,
} = require("./controller/vendedorController");

const {
  createProduto,
  getProdutos,
  updateProduto,
  deleteProduto,
} = require("./controller/produtoController");

const{
  createVenda,
  getVenda,
  GetMenor,
  updateVenda,
  deleteVenda
} = require ("./controller/vendaController");



const express = require("express");
const app = express();
app.use(express.json());

app.post("/vendedor", createVendedor);
app.get("/vendedor", getVendedor);
app.put("/vendedor/:codigo", updateVendedor);
app.delete("/vendedor/:codigo", deleteVendedor);

app.post("/produto", createProduto);
app.get("/produto", getProdutos);
app.put("/produto/:codigo", updateProduto);
app.delete("/produto/:codigo", deleteProduto);

app.post("/venda", createVenda);
app.get("/venda", getVenda);
app.get("/menor", GetMenor);
app.put("/venda/:codigo", updateVenda);
app.delete("/venda/:codigo", deleteVenda);

app.listen(8000);
