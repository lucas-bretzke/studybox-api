'use strict';
const bcrypt = require("bcrypt");
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Nota extends Model {
    static associate(models) {
    //   this.hasMany(models.User, { foreignKey: "materia_id" });
    //   this.hasMany(models.Prova, { foreignKey: "materia_id" });
    }

  };
  Nota.init({
    user_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    prova_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    nota: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Nota',
    tableName: "notas"
  });
  return Nota;
};
