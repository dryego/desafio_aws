const joi = require("joi");

const esquemaAluno = joi.object({
  nome: joi.string().required().messages({
    "string.base": "O nome deve ser uma string.",
    "any.required": "O campo Nome é um campo obrigatório.",
    "string.empty": "O campo nome não pode esta vazio.",
  }),
  idade: joi.string().required().messages({
    "string.base": "O idade deve ser uma string.",
    "any.required": "O campo idade é obrigatório.",
    "string.empty": "O campo idade não pode esta vazio.",
  }),
  nota1: joi.string().required().messages({
    "string.base": "O nota1 deve ser uma string.",
    "any.required": "O campo nota1 é obrigatório.",
    "string.empty": "O campo nota1 não pode esta vazio.",
  }),
  nota2: joi.string().required().messages({
    "string.base": "O nota2 deve ser uma string.",
    "any.required": "O campo nota2 é obrigatório.",
    "string.empty": "O campo nota2 não pode esta vazio.",
  }),
  professor: joi.string().required().messages({
    "string.base": "O professor deve ser uma string.",
    "any.required": "O campo Professor é um campo obrigatório.",
    "string.empty": "O campo professor não pode esta vazio.",
  }),
  sala: joi.string().required().messages({
    "string.base": "O sala deve ser uma string.",
    "any.required": "O campo sala é um campo obrigatório.",
    "string.empty": "O campo sala não pode esta vazio.",
  }),
});

module.exports = esquemaAluno;
