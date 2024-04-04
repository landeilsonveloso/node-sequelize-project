import { DataTypes } from "sequelize"
import database from "../config/database.js"

const Class = database.define("Class", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  description: {
    type: DataTypes.STRING,
    allowNull: false
  }
},
  {
    tableName: "classes"
  }
)

export default Class
