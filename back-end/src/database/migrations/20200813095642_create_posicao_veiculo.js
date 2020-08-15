exports.up = function (knex) {
  return knex.schema.createTable('posicao_veiculo', function (table) {
    table.integer('latitude').notNullable()
    table.integer('longitude').notNullable()

    table.integer('veiculo_id').notNullable()

    table.foreign('veiculo_id').references('id').inTable('veiculo').onUpdate('CASCADE').onDelete('CASCADE');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('posicao_veiculo')
}; 