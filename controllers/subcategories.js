//importing models

const { Subcategory } = require('../models/models')

//controllers
const createSubcategory = async (req, res) => {
  try {
    const newSub = await Subcategory.create(req.body)
    res.status(201).json({
      msg: 'Subcategory created',
      result: newSub
    })
  } catch (error) {
    res.status(500).json({ msg: "Couldn't create new Subcategory" })
  }
}

const getAllSubcategories = async (req, res) => {
  const { id } = req.params
  try {
    const subcategories = await Subcategory.findAll({
      where: { categoryIdKey: id }
    })
    res.status(200).json({
      msg: 'subcategories selected',
      result: subcategories
    })
  } catch (error) {
    res.status(404).json({ msg: 'Subcategories not found' })
  }
}

const deleteSubcategorie = async (req, res) => {
  const { id } = req.params
  try {
    const category = await Subcategory.findByPk(id)
    if (!category) {
      throw new Error("Subcategory don't exists")
    }
    await category.destroy()

    res.status(200).json({ msg: 'Category deleted' })
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg: "couldn't delete Category" })
  }
}
module.exports = { createSubcategory, getAllSubcategories, deleteSubcategorie }
