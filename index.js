require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')

//import Routers
const categoriesRouter = require('./routes/categories')
const subcategoriesRouter = require('./routes/subcategories')
const subjectsRouter = require('./routes/subjects')

//middlewares
app.use(express.json())
app.use(cors())

//initial route
app.get('/', (req, res) => {
  res.send(
    'Bienvenido a la API de gestion de SQL para sectorial, by Diego Medina'
  )
})

//routes
app.use('/categories', categoriesRouter)
app.use('/subcategories', subcategoriesRouter)
app.use('/subjects', subjectsRouter)

//SQL connection
const sequelize = require('./database/db')
const { modelDefinitions } = require('./models/models')
const sqlConnect = async () => {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
    modelDefinitions()
    await sequelize.sync({ alter: true })
    console.log('All models were synchronized successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}
sqlConnect()

//server setup
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`)
})
