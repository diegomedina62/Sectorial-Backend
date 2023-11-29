const express = require("express")
const {
  createCategory,
  getAllCategories,
  deleteCategory
} = require("../controllers/categories")
const router = express.Router()

//Routes
router.route("/").get(getAllCategories).post(createCategory)

router.route("/:id").delete(deleteCategory)

module.exports = router
