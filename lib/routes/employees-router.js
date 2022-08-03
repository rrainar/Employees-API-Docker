const koaJoiRouter = require("koa-joi-router");
const Joi = koaJoiRouter.Joi;
const router = koaJoiRouter();

const employeesController = require("../controllers/employees-controller");
const employeesSchemas = require("./schemas/employees-schemas");

router.route({
  method: "GET",
  path: "/employees",
  validate: {
    query: employeesSchemas.getAllSchema,
  },
  handler: employeesController.getAll,
});

router.route({
  method: "POST",
  path: "/employees",
  validate: {
    body: employeesSchemas.createSchemaPost,
    type: "json",
  },
  handler: employeesController.createNewEmp,
});


router.route({
  method: "GET",
  path: "/employees/:id",
  validate: {
    params: employeesSchemas.createSchemaGetById
  },
  handler: employeesController.getByIdEmployees,
});

router.route({
  method: "DELETE",
  path: "/employees/:id",
  validate: {
    params: employeesSchemas.createSchemaDeleteEmp,
  },
  handler: employeesController.deleteByIdEmployees,
});

router.get("/reports/employees", employeesController.employeesReport);

module.exports = router;
