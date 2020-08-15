exports.up = function (knex) {
  return knex.schema.createTable('linha', function (table) {
    table.increments('id').primary();
    table.string('name').notNullable()

  }).createTable('parada', function (table) {
    table.increments('id').primary();
    table.string('name').notNullable()
    table.integer('latitude').notNullable()
    table.integer('longitude').notNullable()
    
  }).createTable('linha_parada', function (table) {
    
    table.integer('linha_id').unsigned().references('linha.id').onUpdate('CASCADE').onDelete('CASCADE')
    table.integer('parada_id').unsigned().references('parada.id').onUpdate('CASCADE').onDelete('CASCADE')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('linha_parada')
    .dropTable('linha')
    .dropTable('parada')
};