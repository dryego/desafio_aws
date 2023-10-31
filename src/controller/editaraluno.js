const knex = require("../connections/kenx");
const { buscarAlunoID } = require("../util/funcaoBusca");

const editarAluno = async (req, res) => {
  const { id } = req.params;
  const { nome, idade, nota1, nota2, professor, sala } = req.body;

  try {
    if ((await buscarAlunoID(id)) === undefined) {
      return res.status(400).json({ messagem: "Aluno não localizado." });
    }

    await knex("alunos")
      .update({ nome, idade, nota1, nota2, professor, sala })
      .where({ id });

    return res.json({ menssagem: "Dados atualizado com sucesso!" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
};

module.exports = editarAluno;
