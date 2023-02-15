const http = require("http");
const Passageiro = require("./desafio").Passageiro;
const fs = require("fs");
const salvarArquivo = require("./arquivo").salvarArquivo;
const { resolve } = require("path");
const { rejects } = require("assert");
const lerArquivo = require("./arquivo").lerArquivo;
const deletarArquivo = require("./arquivo").deletarArquivo;

http
  .createServer((req, res) => {
    console.log(req.method);
    if (req.method == "POST") {
      if (req.url.indexOf("/passageiro") >= 0) {
        let body = "";
        req.on("data", function (chunk) {
          body += chunk;
        });

        req.on("end", function () {
          const passageiro = JSON.parse(body);
          // passageiro = { nome: "vanessa" };
          console.log(passageiro);
          //salvar o nome em uma pasta
          salvarArquivo(`${passageiro.nome}.json`, JSON.stringify(passageiro));
          res.writeHead(201, {
            "Content-Type": "application/json",
          });
          res.end(JSON.stringify(passageiro));
        });
      }


      
    } else if (req.method == "GET") {
      if (req.url.indexOf("/passageiro") >= 0) {
        res.writeHead(201, {
          "Content-Type": "application/json",
        });
        lerArquivo("./vanessa.json").then((conteudo) => {
          res.end(conteudo);
        });
      } else {
        res.end("not found");
      }
    } 
    
    
    
    else if (req.method == "PUT") {
      if (req.url.indexOf("/passageiro") >= 0) {
        let body = "";
        req.on("data", function (chunk) {
          body += chunk;
        });

        req.on("end", function () {
          const passageiro = JSON.parse(body);
          // passageiro = { nome: "vanessa" };
          console.log(passageiro);
          //salvar o nome em uma pasta
          salvarArquivo(`${passageiro.nome}.json`, JSON.stringify(passageiro));
          res.writeHead(201, {
            "Content-Type": "application/json",
          });
          res.end(JSON.stringify(passageiro));
        });
        
      }
      else {
        res.end("not found");
      }}

      else if (req.method == "DELETE") {
         if (req.url.indexOf("/deletar") >= 0) { 
          deletarArquivo(`vanessa.json`).then((texto) => {
             res.end(texto);
            });
             res.writeHead(201, {
             "Content-Type": "application/json",});
              res.end("Arquivo deletado!");
            }
          
          } else {
          res.end("not found");
        }
      
  
  })
  .listen(8000, () => console.log("servidor inicializado na porta 8000"));

// PERGUNTAR COMO ADICIONAR OS DADOS QUE EU PEGUEI DO MENU AO BODY DA REQUISIÇÃO POST
