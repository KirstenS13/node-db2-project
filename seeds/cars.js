
exports.seed = async function(knex) {
  // clear out all the rows in the table and reset it
  await knex("cars").truncate()

  // populate the table with some static test data
  await knex("cars").insert([
    { VIN: "1a2b3c4d5e6f7g8", make: "Honda", model: "CRV", mileage: 14000, transmissionType: "type a", titleStatus: "clean" },
    { VIN: "2b3c4d5e6f7g8h9", make: "Ford", model: "F150", mileage: 160000, transmissionType: "type b", titleStatus: "junked" },
    { VIN: "3c4d5e6f7g8h9i1", make: "Toyota", model: "Prius", mileage: 30000, transmissionType: "type c", titleStatus: "stolen" }
  ])
};
