const express = require('express');
const router = express.Router();

// Exemplo de rota para obter todos os clientes
router.get('/', (req, res) => {
  res.send('Lista de clientes');
});

// Exemplo de rota para adicionar um novo cliente
router.post('/', (req, res) => {
  const newClient = req.body; // Obter os dados do cliente do corpo da requisição
  res.status(201).send(`Cliente adicionado: ${JSON.stringify(newClient)}`);
});

module.exports = router;
