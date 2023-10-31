const express = require("express");
const novoAluno = require("../controller/cadastroAluno");
// const detalharAluno = require("../controller/detalharAluno");
// const excluirAluno = require("../controller/excluirAluno");
// const editaAluno = require("../controller/editarAluno");
const validarEsquemas = require("../middlewares/validarEsquemas");
const esquemaAluno = require("../schemes/esquemaAluno");

const rotas = express.Router();

rotas.post("/cadastro", validarEsquemas(esquemaAluno), novoAluno);
// rotas.get("/detalhar/:id", detalharAluno);
// rotas.put("/editar/:id", validarEsquemas(esquemaAluno), editaAluno);
// rotas.delete("/excluir/:id", excluirAluno);

module.exports = rotas;
