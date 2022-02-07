module.exports = {
  async up(knex) {
    await knex.schema.createTable("user_feedbacks", (table) => {
      table
        .uuid("id")
        .primary()
        .defaultTo(knex.raw("gen_random_uuid()"))
        .notNullable();
      table.timestamp("date_created").defaultTo(knex.fn.now()).notNullable();
      table.string("author_email").notNullable();
      table.string("subject").notNullable();
      table.integer("score").notNullable();
      table.string("message");
    });
  },

  async down(knex) {
    await knex.schema.dropTable("user_feedbacks");
  },
};
