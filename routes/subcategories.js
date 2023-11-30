const express = require('express')
const {
  createSubcategory,
  getAllSubcategories,
  deleteSubcategorie
} = require('../controllers/subcategories')
const router = express.Router()

//Routes
router.route('/').post(createSubcategory)

router.route('/:id').delete(deleteSubcategorie).get(getAllSubcategories)

module.exports = router
