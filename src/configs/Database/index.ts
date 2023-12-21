// sequelize.ts
import { Sequelize } from 'sequelize';

 const Database = new Sequelize({
  dialect:  'postgres',
  database: process.env.DATABASE_NAME || 'friendease',
  username: process.env.DATABASE_USERNAME || 'postgres',
  password: process.env.DATABASE_PASSWORD || 'postgres',
  host:    process.env.DATABASE_CONNECTION || '127.0.0.1',
  port: 5432,
  pool: {
    max: 100,
    min: 10,
    acquire: 30000,
    idle: 10000
  },
  logging: false

});

export default Database;

