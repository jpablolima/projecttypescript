import knex from 'knex';

export async function up(knex: knex) {
    return knex.schema.createTable('location_items', table=>{
        table.increments('id').primary();
        table.string('location_id')
            .notNullable()
            .references('id')
            .inTable('locations')
        table.string('items_id')
            .notNullable()
            .references('id')
            .inTable('items') 
    });
}


export async function down(knex:knex) {
    return knex.schema.dropTable('location_items')
}