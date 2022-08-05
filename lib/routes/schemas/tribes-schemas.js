const KoaJoiRouter = require("@koa-better-modules/joi-router");
const Joi = KoaJoiRouter.Joi;

const getAllTribesSchema = Joi.object({
    name: Joi.string(),
    area: Joi.string(),
  })

  const createSchemaGetTribesById = Joi.object({
    id: Joi.number().required(),
  });

  const createSchemaReportIdTribes = Joi.object({
    query: Joi.number().required(),
  });

  module.exports = {

    getAllTribesSchema,
    createSchemaGetTribesById,
    createSchemaReportIdTribes
  
  };