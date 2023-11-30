//importing models
const { Category } = require('../models/models')

//controllers
const createCategory = async (req, res) => {
  try {
    const newCategory = await Category.create(req.body)
    res.status(201).json({
      msg: 'Category created',
      result: newCategory
    })
  } catch (error) {
    res.status(500).json({ msg: "Couldn't create new Category" })
  }
}

const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll()
    res.status(200).json({
      msg: 'categories selected',
      result: categories
    })
  } catch (error) {
    res.status(404).json({ msg: 'Categories not found' })
  }
}

const deleteCategory = async (req, res) => {
  const { id } = req.params
  try {
    const category = await Category.findByPk(id)
    if (!category) {
      throw new Error("Category don't exists")
    }
    await category.destroy()

    res.status(200).json({ msg: 'Category deleted' })
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg: "couldn't delete Category" })
  }
}
module.exports = { createCategory, getAllCategories, deleteCategory }
