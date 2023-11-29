const express = require("express")
const router = express.Router()

//Routes
router
  .route("/")
  .get((req, res) => {
    res.send("get subject")
  })
  .post((req, res) => {
    res.send("post subject")
  })

router.route("/:id").delete((req, res) => {
  res.send("delete subject")
})

module.exports = router
