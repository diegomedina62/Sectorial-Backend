require("dotenv").config()
const express = require("express")
const app = express()

//initial route
app.get("/", (req, res) => {
  res.send(
    "Bienvenido a la API de gestion de SQL para sectorial, by Diego Medina"
  )
})

//SQL connection
const sequelize = require("./database/db")
const sqlConnect = async () => {
  try {
    await sequelize.authenticate()
    console.log("Connection has been established successfully.")
  } catch (error) {
    console.error("Unable to connect to the database:", error)
  }
}
sqlConnect()

//server setup
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`)
})
