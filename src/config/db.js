import Sequelize from "sequelize"
import dotenv from "dotenv"

dotenv.config()

const dbName = process.env.MYSQL_DATABASE
const dbUser = process.env.MYSQL_USER
const dbHost = process.env.MYSQL_HOST
const dbPassword = process.env.MYSQL_PASSWORD

const db = new Sequelize(dbName, dbUser, dbPassword, {
  dialect: "mysql",
  host: dbHost,
});

export default db
