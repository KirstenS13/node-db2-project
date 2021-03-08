const knex = require("knex");
const knexfile = require("../knexfile");

// connect configuration in knexfile to this config file
module.exports = knex(knexfile);