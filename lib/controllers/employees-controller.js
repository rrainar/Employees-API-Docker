const employeesModel = require("../models/employees-model");
//const employeesModel = require("../models/employees-model-array");

async function createNewEmp(ctx) {
  const employee = ctx.request.body;
  await employeesModel.create(employee);

  ctx.status = 201;
}

async function getAll(ctx) {
  const name = ctx.query.name;
  const title = ctx.query.title;
  const tribe = ctx.query.tribe;

  ctx.status = 200;
  ctx.body = await employeesModel.getAll(name, title, tribe);
}

async function getByIdEmployees(ctx) {
  const id = ctx.params.id;
  const employee = await employeesModel.getById(id);

  ctx.status = 200;
  ctx.body = employee;
}

async function deleteByIdEmployees(ctx) {
  const id = ctx.params.id;

  await employeesModel.deleteById(id);

  ctx.status = 200;
  employeesModel.deleteById(id);
}

async function employeesReport(ctx) {
  ctx.status = 200;
  ctx.body = await employeesModel.employeesReport();
}

module.exports = {
  createNewEmp,
  getAll,
  getByIdEmployees,
  deleteByIdEmployees,
  employeesReport,
};
