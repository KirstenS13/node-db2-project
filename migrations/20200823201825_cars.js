// don't forget to make these async bc there's a database involved
exports.up = async function(knex) {
    // make cars table
    await knex.schema.createTableIfNotExists("cars", (table) => {
        // make columns for the table
        //table.integer("id").notNull().unique().primary() is the same as (except the next one auto-increments)
        table.increments("id")
        // VIN
        table.text("VIN").notNull().unique()
        // MAKE OF CAR
        table.text("make").notNull()
        // MODEL OF CAR
        table.text("model").notNull()
        // MILEAGE
        table.integer("mileage").notNull()
        // TRANSMISSION TYPE
        table.text("transmissionType")
        // STATUS OF TITLE
        table.text("titleStatus")
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("cars")
};
