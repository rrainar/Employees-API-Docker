const koaJoiRouter = require("koa-joi-router");
const Joi = koaJoiRouter.Joi;

const createSchemaPost = Joi.object({
  id: Joi.number().required(),
  name: Joi.string().required(),
  title: Joi.string().required(),
  tribe_id: Joi.number().required(),
  office_id: Joi.number().required(),
});


const createSchemaGetById = Joi.object({
  id: Joi.number().required(),
});


const createSchemaDeleteEmp = Joi.object({
  id: Joi.number().required(),
});

const createSchemaSearch = Joi.object({
  name: Joi.string().required(),
});


const createSchemaReport = Joi.object({
  query: Joi.number().required(),
});

module.exports = {
  createSchemaPost,
  createSchemaGetById,
  createSchemaDeleteEmp,
  createSchemaSearch,
  createSchemaReport

};
