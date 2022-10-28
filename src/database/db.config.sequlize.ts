import { Sequelize } from 'sequelize';

const database = process.env.POSTGRES_DATABASE;
const username = process.env.POSTGRES_USER;
const password = process.env.POSTGRES_PASSWORD;
const host = process.env.POSTGRES_HOST;

export const sequelize = new Sequelize(database!, username!, password, {
  host,
  dialect: 'postgres',
});

export const dbConnectionSql = async () => {
  try {
    await sequelize.authenticate();

    console.log(`Postgres Database Conected at: ${sequelize.getDatabaseName()} DB`);
  } catch (error: any) {
    console.error(`Unable to connect to the database: ${error}`);

    process.exit(1);
  }
};
