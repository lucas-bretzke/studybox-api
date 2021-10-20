'use strict';
const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('users', [
        {
          id: "75986822-7fff-4bf6-bb2e-983c586b91ff",
          name: 'William Círico',
          email: "william@email.com",
          password: bcrypt.hashSync("123456", 10),
          permissao: "professor",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "f4c8a3fe-d9c3-48ea-80ed-e17ca913a3ad",
          name: 'Vinicius dos Santos',
          email: "vinicius@email.com",
          password: bcrypt.hashSync("123456", 10),
          permissao: "professor",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "90fecfae-1be7-4d44-89d9-2ff951281c81",
          name: 'Pedro Henrique',
          email: "pedrohenrique@email.com",
          password: bcrypt.hashSync("123456", 10),
          permissao: "aluno",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "90fecfae-1be7-4d44-89d9-2ff951281c42",
          name: 'Gabriel Duwe',
          email: "gabriel@email.com",
          password: bcrypt.hashSync("123456", 10),
          permissao: "aluno",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "90fecfae-1be7-4d44-89d9-2ff951281c01",
          name: 'Lucas Bretzke',
          email: "lucasbretzke@email.com",
          password: bcrypt.hashSync("123456", 10),
          permissao: "aluno",
          created_at: new Date(),
          updated_at: new Date()
        },{
          id: "90fecfae-1be7-4d44-89d9-2ff951281c33",
          name: 'Diego Lamas',
          email: "diegolamas@email.com",
          password: bcrypt.hashSync("123456", 10),
          permissao: "aluno",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "90fecfae-1be7-4d44-89d9-2ff951281c72",
          name: 'Jonatan Busch',
          email: "jonatanbusch@email.com",
          password: bcrypt.hashSync("123456", 10),
          permissao: "aluno",
          created_at: new Date(),
          updated_at: new Date()
        }
        
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
