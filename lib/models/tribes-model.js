const { knex } = require("../../db/knex")

const TABLE_NAME = "tribes";


async function getAllTribes(name, area) {
    const query = knex(TABLE_NAME).select();
  
    if (name) query.whereILike("name", `%${name}%`);
    if (area) query.where({ area });
  
    return await query;
  }

  async function getByIdTribes(id) {
    return await knex(TABLE_NAME).select().where({ id });
  }

//   async function employeesInTribeReport(tribe) {
//   const employeesInTribe = await knex(TABLE_NAME).select();
//   const report = {};
//   for (employee of employees) {
//     if (employee.tribe in report) {
//       report[employee.tribe].push({name: employee.name, title: employee.title});
//     } else {
//       report[employee.tribe] = [];
//       report[employee.tribe].push({name: employee.name, title: employee.title});
//     }
//   }

//   return report;
// }
  

  module.exports = {
    getByIdTribes,
    getAllTribes,
  
  };

