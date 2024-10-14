const mariadb = require('mariadb');

// Conexão com o MariaDB
const pool = mariadb.createPool({

    host: 'localhost',
    user: 'seu_usuario',
    password: 'sua_senha',
    database: 'seu_banco',
    connectionLimit: 5,
    acquireTimeout: 20000  // Aumentando o tempo de timeout para 20 segundos
});

module.exports = pool;
