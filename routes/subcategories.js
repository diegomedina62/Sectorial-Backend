const express = require("express")
const router = express.Router()

//Routes
router
  .route("/")
  .get((req, res) => {
    res.send("get Subcategories")
  })
  .post((req, res) => {
    res.send("post Subcategories")
  })

router.route("/:id").delete((req, res) => {
  res.send("delete Subcategories")
})

module.exports = router
