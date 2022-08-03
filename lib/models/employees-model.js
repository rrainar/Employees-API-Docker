const Knex = require("knex");

const knexConfig = {
  client: "mysql2",
  version: "8.0",
  connection: {
    host: "localhost",
    user: "root",
    password: "password",
    database: "employees",
  },
};

const knex = Knex(knexConfig);

const TABLE_NAME = "employees";

async function createNewEmp(employee) {
  await knex(TABLE_NAME).insert(employee);
}

async function getAll(name, title, tribe) {
  return await knex(TABLE_NAME).select(name, title, tribe);
}

async function getByIdEmployees(id) {
  return await knex(TABLE_NAME).select().where({ id });
}

async function deleteByIdEmployees(id) {
  await knex(TABLE_NAME).select().where({ id }).del();
}

async function employeesReport() {
  await knex(TABLE_NAME).select().where({ tribe })
}

module.exports = {
  createNewEmp,
  getAll,
  getByIdEmployees,
  deleteByIdEmployees,
  employeesReport,
};
