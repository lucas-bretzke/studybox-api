'use strict';
const bcrypt = require("bcrypt");
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.belongsToMany(models.Turma, { through: "turmas_users", foreignKey: "user_id", as: "turmas" });
      this.belongsToMany(models.Prova, { through: "notas", foreignKey: "user_id" });
    }

    isPasswordValid(password) {
      return bcrypt.compareSync(password, this.password);
    }

    toJSON() {
      return {
        ...this.get(),
        password: undefined
      }
    }
  };
  User.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: { msg: "Email inválido" }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      set(password) {
        this.setDataValue("password", bcrypt.hashSync(password, 10));
      }
    },
    permissao:{
      type: DataTypes.STRING,
      allowNull: false
    },
    avatar: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};