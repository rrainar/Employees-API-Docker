const { knex, knexConfig } = require("../knex");

async function drop() {
  const dbName = knexConfig.connection.database;

  await knex.raw(`DROP DATABASE ${dbName}`);
  
  console.log(`💥 \nDatabase ${dbName} dropped!`);

  await knex.destroy();
}

drop();