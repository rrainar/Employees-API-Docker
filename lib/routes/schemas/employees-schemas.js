const koaJoiRouter = require("koa-joi-router");
const Joi = koaJoiRouter.Joi;

const createSchemaPost = Joi.object({
  name: Joi.string().required(),
  title: Joi.string().required(),
  tribe: Joi.string().required(),
});


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
  createSchemaReport

};
