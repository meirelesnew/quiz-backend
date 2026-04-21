const { getPerguntas } = require('../config/db');

function embaralhar(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function getAleatorias(req, res) {
  try {
    const quantidade = parseInt(req.query.quantidade) || 10;
    const categoria = req.query.categoria || null;

    let perguntas = getPerguntas();

    if (categoria) {
      perguntas = perguntas.filter(p => p.categoria === categoria);
    }

    const selecionadas = embaralhar(perguntas).slice(0, quantidade);

    if (selecionadas.length === 0) {
      return res.status(404).json({ message: 'Nenhuma pergunta encontrada.' });
    }

    res.json({
      total: selecionadas.length,
      perguntas: selecionadas
    });
  } catch (err) {
    console.error('Erro:', err.message);
    res.status(500).json({ message: 'Erro interno.' });
  }
}

module.exports = { getAleatorias };
