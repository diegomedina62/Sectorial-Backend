const { Sequelize, DataTypes } = require('sequelize')
const sequelize = require('../database/db')

//creacion de Squemas

const Category = sequelize.define(
  'Category',
  {
    id_key: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    CategoryName: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    }
  },
  {
    timestamps: false
  }
)

const Subcategory = sequelize.define(
  'Subcategory',
  {
    id_key: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    SubcategoryName: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    }
  },
  {
    timestamps: false
  }
)

const Subject = sequelize.define(
  'Subject',
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

const modelDefinitions = () => {
  //definicion de asociaciones para formar jeraquia
  //categorias a subcategorias
  Category.hasMany(Subcategory)
  Subcategory.belongsTo(Category)

  //subcategorias a temas
  Subcategory.hasMany(Subject)
  Subject.belongsTo(Subcategory)
}

module.exports = { modelDefinitions, Category, Subcategory, Subject }
