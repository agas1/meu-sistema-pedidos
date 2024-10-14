const pool = require('../config/db');

// Adicionar novo produto
exports.addProduto = async (req, res) => {
  const { nome, preco } = req.body;
  try {
    let conn = await pool.getConnection();
    await conn.query("INSERT INTO produtos (nome, preco) VALUES (?, ?)", [nome, preco]);
    res.status(201).send('Produto adicionado com sucesso!');
    conn.release();
  } catch (err) {
    res.status(500).send('Erro ao adicionar produto: ' + err);
  }
};

// Listar todos os produtos
exports.getProdutos = async (req, res) => {
  try {
    let conn = await pool.getConnection();
    const rows = await conn.query("SELECT * FROM produtos");
    res.json(rows);
    conn.release();
  } catch (err) {
    res.status(500).send('Erro ao listar produtos: ' + err);
  }
};
