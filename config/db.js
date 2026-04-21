const fs = require('fs');
const path = require('path');

const ARQUIVO = path.join(__dirname, '../data/perguntas.json');

function getPerguntas() {
  const raw = fs.readFileSync(ARQUIVO, 'utf-8');
  return JSON.parse(raw);
}

// Quando migrar pro MongoDB, só muda esse arquivo
module.exports = { getPerguntas };
