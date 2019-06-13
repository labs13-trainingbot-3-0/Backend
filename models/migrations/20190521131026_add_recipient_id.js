exports.up = function(knex, Promise) {
  return knex.schema.table("notifications", tbl => {
    tbl
      .integer("recipient_id")
      .references("id")
      .inTable("team_members")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table("notifications", tbl => {
    tbl.dropColumn("recipient_id");
  });
};
