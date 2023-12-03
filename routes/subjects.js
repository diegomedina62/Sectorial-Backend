const express = require('express')
const {
  deleteSubject,
  getAllSubjects,
  createSubject
} = require('../controllers/subjects')
const router = express.Router()

//Routes
router.route('/').post(createSubject)

router.route('/:id').delete(deleteSubject).get(getAllSubjects)

module.exports = router
