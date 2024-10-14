const express = require('express');
const router = express.Router();

// Exemplo de rota para obter todos os produtos
router.get('/', (req, res) => {
  res.send('Lista de produtos');
});

// Exemplo de rota para adicionar um novo produto
router.post('/', (req, res) => {
  const newProduct = req.body; // Obter os dados do produto do corpo da requisição
  res.status(201).send(`Produto adicionado: ${JSON.stringify(newProduct)}`);
});

module.exports = router;
