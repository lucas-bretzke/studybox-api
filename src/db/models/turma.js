'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Turma extends Model {
    static associate(models) {
      this.belongsToMany(models.User, { through: "turmas_users", foreignKey: "turma_id", as: "users" });      
      this.hasMany(models.Aula, { foreignKey: "turma_id" });
    }
  };
  Turma.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descricao: {
      type: DataTypes.STRING,
      allowNull: false
    },
    icone: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Turma',
  });
  return Turma;
};