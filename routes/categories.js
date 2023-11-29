const express = require("express")
const router = express.Router()

//Routes
router
  .route("/")
  .get((req, res) => {
    res.send("get Categories")
  })
  .post((req, res) => {
    res.send("post Categories")
  })

router.route("/:id").delete((req, res) => {
  res.send("delete Categories")
})

module.exports = router
