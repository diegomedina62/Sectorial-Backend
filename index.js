const express = require("express")
const app = express()

//initial route
app.get("/", (req, res) => {
  res.send(
    "Bienvenido a la API de gestion de SQL para sectorial, by Diego Medina"
  )
})

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`)
})
