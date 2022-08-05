const tribesModel = require("../models/tribes-model");

async function getAllTribes(ctx) {
    const name = ctx.query.name;
    const area = ctx.query.area;
  
    ctx.status = 200;
    ctx.body = await tribesModel.getAllTribes(name, area);
  }


async function getByIdTribes(ctx) {
    const id = ctx.params.id;
    const tribe = await tribesModel.getByIdTribes(id);
  
    ctx.status = 200;
    ctx.body = tribe; 
  }

//   async function employeesInTribesReport(ctx) {
//     ctx.status = 200;
//     ctx.body = await tribesModel.employeesInTribesReport();
//   }

  module.exports = {
    getAllTribes,
    getByIdTribes,
  
  };