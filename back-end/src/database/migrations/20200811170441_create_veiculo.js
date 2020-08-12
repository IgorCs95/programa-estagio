exports.up = function (knex) {
  return knex.schema.createTable('veiculo', function (table) {
    table.increments('id').primary();
    table.string('name').notNullable()
    table.string('modelo').notNullable()
    
    table.integer('linha_id').notNullable()

    table.foreign('linha_id').references('id').inTable('linha');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('veiculo')
}; 