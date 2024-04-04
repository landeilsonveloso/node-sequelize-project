import database from "../config/database.js"
import { DataTypes } from "sequelize"

const User = database.define("User", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false
  },

  age: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
},
  {
    tableName: "users"
  }
)

User.sync()

export default User
