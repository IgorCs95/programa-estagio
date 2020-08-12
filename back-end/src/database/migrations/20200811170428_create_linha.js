exports.up = function (knex) {
  return knex.schema.createTable('linha', function (table) {
    table.increments('id').primary();
    table.string('name').notNullable()
    table.string('paradas').notNullable()
   
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('linha')
}; 
