// sequelize.ts
import { Sequelize } from 'sequelize';

 const Database = new Sequelize({
  dialect:  'postgres',
  database: 'friendease',
  username: 'postgres',
  password: 'postgres',
  host:    process.env.DATABASE_CONNECTION || '127.0.0.1',
  port: 5432,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  logging: true

});

export default Database;

