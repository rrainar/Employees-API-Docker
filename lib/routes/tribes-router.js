const KoaJoiRouter = require("@koa-better-modules/joi-router");
const Joi = KoaJoiRouter.Joi;
const router = new KoaJoiRouter();

const tribesController = require("../controllers/tribes-controller");
const tribesSchemas = require("./schemas/tribes-schemas");

router.route({
    method: "GET",
    path: "/tribes",
    validate: {
      query: tribesSchemas.getAllTribesSchema,
    },
    handler: tribesController.getAllTribes,
  });

  router.route({
    method: "GET",
    path: "/tribes/:id",
    validate: {
      params: tribesSchemas.createSchemaGetTribesById
    },
    handler: tribesController.getByIdTribes,
  });

//   router.route({
//     method: "GET",
//     path: "/tribes/:id/employees",
//     validate: {
//       query: tribesSchemas.createSchemaReportIdTribes
//     },
//     handler: tribesController.getByIdEmployees,
//   });

  module.exports = router;