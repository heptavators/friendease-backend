// sequelize.ts
import { Sequelize } from 'sequelize';

 const Database = new Sequelize({
  dialect: 'postgres',
  database: 'friendease',
  username: 'postgres',
  password: 'postgres',
  host: '127.0.0.1',
  port: 5432,

});

export default Database;

