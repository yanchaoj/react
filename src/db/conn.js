const { Pool } = require("pg");

const pool = new Pool({
    // Format: postgres://user:password@host:5432/database
    connectionString: 'postgres://yanchaojin:chao0629@host:5432/todolist'
    // ssl: {
    //   rejectUnauthorized: false
    // }
  });
  
  module.exports = pool;
  