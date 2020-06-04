import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('point', point => {
    point.increments('id').primary();
    point.string('image').notNullable();
    point.string('name').notNullable();
    point.string('email').notNullable();
    point.string('whastsapp').notNullable();
    point.decimal('latitude').notNullable();
    point.decimal('longitude').notNullable();
    point.string('city').notNullable();
    point.string('uf', 2).notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('point');
}
