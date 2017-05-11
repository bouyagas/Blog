const pgp = require('pg-promise')();

const config = process.env.DATABASE_URL || {
  host:        process.env.DB_HOST,
  port:        process.env.DB_PORT,
  database:    process.env.DB_NAME,
  user:        process.env.DB_USER,
  password:    process.env.DB_PASS,
  dev:         process.env.DB_DEV
};

const db = pgp(config);
console.log(config);
module.exports = db;
