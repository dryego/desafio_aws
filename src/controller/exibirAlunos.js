const knex = require("../connections/kenx");

const exibirAlunos = async (req, res) => {
  try {
    const alunos = await knex("alunos");

    return res.json(alunos);
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
};

module.exports = exibirAlunos;
