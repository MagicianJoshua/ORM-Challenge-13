const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    id :{
      type:Datatypes.INTEGER,
      allowNull:false,
      primaryKey:true,
      autoIncrement:true,
    },
    product_id :{
      type:Datatypes.INTEGER,
      allowNull:false,
      references :{
        model:"product",
        key:"id"
      }
    },
    tag_id : {
      type:Datatypes.INTEGER,
      references :{
        model :"tag",
        key:"id"
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;