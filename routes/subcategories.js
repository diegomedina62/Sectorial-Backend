const express = require('express')
const {
  createSubcategory,
  getAllSubcategories,
  deleteSubcategorie
} = require('../controllers/subcategories')
const router = express.Router()

//Routes
router.route('/').get(getAllSubcategories).post(createSubcategory)

router.route('/:id').delete(deleteSubcategorie)

module.exports = router
