import knex from 'knex'
require("dotenv").config();

const connection = knex({
    client: 'mysql2',
    connection: {
      host : process.env.MYSQL_HOST,
      user : process.env.MYSQL_ADMIN_USERNAME,
      password : process.env.MYSQL_ADMIN_PASSWORD,
      database : 'database-name'
    }
  });

export default connection;