const { Subject } = require('../models/models')

//controllers
const createSubject = async (req, res) => {
  try {
    const newSubject = await Subject.create(req.body)
    res.status(201).json({
      msg: 'Subject created',
      result: newSubject
    })
  } catch (error) {
    res.status(500).json({ msg: "Couldn't create new Subject" })
  }
}

const getAllSubjects = async (req, res) => {
  const { id } = req.params
  try {
    const subjectsList = await Subject.findAll({
      where: { SubcategoryIdKey: id }
    })
    res.status(200).json({
      msg: 'subject selected',
      result: subjectsList
    })
  } catch (error) {
    res.status(404).json({ msg: 'Subjects not found' })
  }
}

const deleteSubject = async (req, res) => {
  const { id } = req.params
  try {
    const subject = await Subject.findByPk(id)
    if (!subject) {
      throw new Error("Subject don't exists")
    }
    await subject.destroy()

    res.status(200).json({ msg: 'Subject deleted' })
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg: "couldn't delete Subject" })
  }
}

module.exports = { createSubject, getAllSubjects, deleteSubject }
