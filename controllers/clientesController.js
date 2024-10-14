const pool = require('../config/db');

// Adicionar novo cliente
exports.addCliente = async (req, res) => {
  const { nome, email } = req.body;
  try {
    let conn = await pool.getConnection();
    await conn.query("INSERT INTO clientes (nome, email) VALUES (?, ?)", [nome, email]);
    res.status(201).send('Cliente adicionado com sucesso!');
    conn.release();
  } catch (err) {
    res.status(500).send('Erro ao adicionar cliente: ' + err);
  }
};

// Listar todos os clientes
exports.getClientes = async (req, res) => {
  try {
    let conn = await pool.getConnection();
    const rows = await conn.query("SELECT * FROM clientes");
    res.json(rows);
    conn.release();
  } catch (err) {
    res.status(500).send('Erro ao listar clientes: ' + err);
  }
};
