const KoaJoiRouter = require("@koa-better-modules/joi-router");
const Joi = KoaJoiRouter.Joi;

const createSchemaPost = Joi.object({
  name: Joi.string().required(),
  title: Joi.string().required(),
  tribe: Joi.string().required(),
});

const getAllSchema = Joi.object({
  name: Joi.string(),
  title: Joi.string(),
  tribe: Joi.string()
})

const createSchemaGetById = Joi.object({
  id: Joi.number().required(),
});


const createSchemaDeleteEmp = Joi.object({
  id: Joi.number().required(),
});


const createSchemaReport = Joi.object({
  query: Joi.number().required(),
});

module.exports = {
  createSchemaPost,
  createSchemaGetById,
  createSchemaDeleteEmp,
  createSchemaReport,
  getAllSchema

};
