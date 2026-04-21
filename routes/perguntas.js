const express = require('express');
const router = express.Router();
const { getAleatorias } = require('../controllers/perguntasController');

// GET /api/perguntas?quantidade=10&categoria=Renascimento
router.get('/', getAleatorias);

module.exports = router;
