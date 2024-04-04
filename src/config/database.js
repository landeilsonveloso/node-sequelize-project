import dotenv from "dotenv"
import postgres from "pg"
import Sequelize from "sequelize"

dotenv.config()

const dbName = process.env.DATABASE_NAME
const dbUser = process.env.DATABASE_USER
const dbPassword = process.env.DATABASE_PASSWORD
const dbHost = process.env.DATABASE_HOST
const dbPort = process.env.DATABASE_PORT

const database = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: "postgres",
  dialectModule: postgres,
  port: dbPort 
})

database
    .authenticate()
    .then(() => {
      console.log("Conexão realizada com sucesso!") 
      database.sync()
    })
    .catch(err => {
        console.error(err)
    })

export default database
