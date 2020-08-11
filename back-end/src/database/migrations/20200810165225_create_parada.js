exports.up = function (knex) {
  return knex.schema.createTable('parada', function (table) {
    table.increments('id').primary();
    table.string('nome').notNullable()
    table.integer ('latitude').notNullable()
    table.integer ('longitude').notNullable()
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('parada')
    .dropTable('parada')
}; 
