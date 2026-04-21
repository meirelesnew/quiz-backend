const express = require('express');
const cors = require('cors');
const perguntasRouter = require('./routes/perguntas');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', modo: 'json-local' });
});

app.use('/api/perguntas', perguntasRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
  console.log(`📦 Banco: JSON local (sem MongoDB)`);
});
