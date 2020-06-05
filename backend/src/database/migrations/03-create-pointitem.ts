import Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('pointItem', point => {
    point.increments('id').primary();
    point.integer('idPoint').notNullable().references('id').inTable('point');
    point.integer('idItem').notNullable().references('id').inTable('item');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('pointItem');
}
