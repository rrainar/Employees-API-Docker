const { knex } = require("../../db/knex");
const { redis } = require("../../redis/redis");

const TABLE_NAME = "employees";

async function createNewEmp(employee) {
  await knex(TABLE_NAME).insert(employee);
}

async function getAll(name, title, tribe_id) {
  const query = knex(TABLE_NAME).select();

  if (name) query.whereILike("name", `%${name}%`);
  if (title) query.where({ title });
  if (tribe_id) query.where({ tribe_id });

  return await query;
}

async function getById(id) {
  return await knex(TABLE_NAME).select().where({ id });
}

async function deleteByIdEmployees(id) {
  await knex(TABLE_NAME).select().where({ id }).del();
}

async function employeesReport() {
  // const cache = redis.get("employeesReport");
  // if (!cache) {
  //   return JSON.parse(cache);
  // }
  const query = await knex(EMP)
    .select(
      "employees.name as name",
      "employees.title as title",
      "tribes.name as tribe"
    )
    .innerJoin(TRI, "employees.tribe_id", "=", "tribes.id");
  const groupByTribe = query.reduce(function (group, employee) {
    const { tribe } = employee;
    group[tribe] = group[tribe] || [];
    group[tribe].push({ name: employee.name, title: employee.title });
    return group;
  }, Object.create(null));
  //redis.set("employeesReport", JSON.stringify(groupByTribe));
  return groupByTribe;
}

// knex
//   .from('users')
//   .innerJoin('accounts', 'users.id', 'accounts.user_id')

// knex
//   .table('users')
//   .innerJoin(
//     'accounts',
//     'users.id',
//     '=',
//     'accounts.user_id'
//   )

// knex('users')
//   .innerJoin('accounts', function() {
//     this
//       .on('accounts.id', '=', 'users.account_id')
//       .orOn('accounts.owner_id', '=', 'users.id')
//   })

module.exports = {
  createNewEmp,
  getAll,
  getById,
  deleteByIdEmployees,
  employeesReport,
};
