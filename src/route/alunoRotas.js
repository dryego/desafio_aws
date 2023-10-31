const express = require("express");
const novoAluno = require("../controller/cadastroAluno");
const detalharAluno = require("../controller/detalharAluno");

const excluirAluno = require("../controller/excluirAluno");
const validarEsquemas = require("../middlewares/validarEsquemas");
const esquemaAluno = require("../schemes/esquemaAluno");
const exibirAlunos = require("../controller/exibirAlunos");

const rotas = express.Router();

rotas.post("/cadastro", validarEsquemas(esquemaAluno), novoAluno);
rotas.get("/detalhar/:id", detalharAluno);
rotas.put("/editar/:id", validarEsquemas(esquemaAluno));
rotas.delete("/excluir/:id", excluirAluno);
rotas.get("/exibir", exibirAlunos);

module.exports = rotas;
