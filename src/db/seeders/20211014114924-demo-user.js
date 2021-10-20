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
          id: "d370fbf5-60dc-4e51-b141-840ce09e21cd",
          name: 'Pedro Henrique',
          email: "pedrohenrique@email.com",
          password: bcrypt.hashSync("123456", 10),
          permissao: "aluno",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "2bdee9c4-2635-4bd4-945d-5c9c62003bbc",
          name: 'Gabriel Duwe',
          email: "gabriel@email.com",
          password: bcrypt.hashSync("123456", 10),
          permissao: "aluno",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "39525568-ed94-41c3-b224-b3418d229fe5",
          name: 'Lucas Bretzke',
          email: "lucasbretzke@email.com",
          password: bcrypt.hashSync("123456", 10),
          permissao: "aluno",
          created_at: new Date(),
          updated_at: new Date()
        },{
          id: "234fea95-489c-4bdc-9efc-6ea0d111110b",
          name: 'Diego Lamas',
          email: "diegolamas@email.com",
          password: bcrypt.hashSync("123456", 10),
          permissao: "aluno",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "66bdd9cb-0470-4d91-86da-e2adc044a98b",
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
