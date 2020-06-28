/*
Migrations são módulos do node, onde se exportam duas funções, a up e a down
essas duas funções inserem e incluem tabelas e os módulos são executados em ordem
*/


exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
      table.increments('id').primary()
      table.string('name').notNull()
      table.string('email').notNull().unique()
      table.string('password').notNull()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users')
};
