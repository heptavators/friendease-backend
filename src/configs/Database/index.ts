// sequelize.ts
import { Sequelize } from 'sequelize';

 const Database = new Sequelize({
  dialect: 'postgres',
  database: 'friendease',
  username: 'postgres',
  password: 'postgres',
  host: '127.0.0.1',
  port: 5432,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  logging: false

});

export default Database;

