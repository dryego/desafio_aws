const { buscarAlunoID } = require("../util/funcaoBusca");

const detalharAluno = async (req, res) => {
  const { id } = req.params;

  try {
    const buscarAluno = await buscarAlunoID(id);

    if (buscarAluno === undefined) {
      return res.status(400).json({ messagem: "Aluno não localizado." });
    }

    return res.json(buscarAluno);
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
};

module.exports = detalharAluno;
