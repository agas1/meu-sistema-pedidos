const express = require('express');
const app = express();
const clientesRoutes = require('./routes/clientesRoutes');
const produtosRoutes = require('./routes/produtosRoutes');

app.use(express.json());  // Para receber JSON no body das requisições

// Definindo as rotas
app.use('/clientes', clientesRoutes);
app.use('/produtos', produtosRoutes);

// Iniciando o servidor
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
