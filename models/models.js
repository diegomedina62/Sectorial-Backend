const { Sequelize, DataTypes } = require("sequelize")
const sequelize = require("../database/db")

//creacion de Squemas
const modelDefinitions = () => {
  const Category = sequelize.define(
    "Category",
    {
      id_key: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      CategoryName: {
        type: DataTypes.STRING
      }
    },
    {
      timestamps: false
    }
  )

  const Subcategory = sequelize.define(
    "Subcategory",
    {
      id_key: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      SubcategoryName: {
        type: DataTypes.STRING
      }
    },
    {
      timestamps: false
    }
  )

  const Subject = sequelize.define(
    "Subject",
    {
      id_key: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      SubjectName: {
        type: DataTypes.STRING
      }
    },
    {
      timestamps: false
    }
  )

  //definicion de asociaciones para formar jeraquia
  //categorias a subcategorias
  Category.hasMany(Subcategory)
  Subcategory.belongsTo(Category)

  //subcategorias a temas
  Subcategory.hasMany(Subject)
  Subject.belongsTo(Subcategory)
}

module.exports = modelDefinitions
