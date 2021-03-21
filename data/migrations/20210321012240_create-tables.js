
exports.up = function(knex) {
  return knex.schema
  .createTable('projects', tbl =>{
      tbl.increments();

      tbl.string('name', 255)
      .notNullable()
      .unique()

      tbl.string('description', 250)
      .notNullable()

      tbl.string('link', 250)
      .notNullable()

  })
  .createTable('messages', tbl =>{
        tbl.increments();

        tbl.string('sender', 25)
        .notNullable

        tbl.string('email', 50)

        tbl.string('phone', 15)

        tbl.string('message', 500)
        .notNullable
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('projects')
  .dropTableIfExists('messages')
};
