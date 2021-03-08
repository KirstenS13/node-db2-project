module.exports = {
    client: "sqlite3", // which DBMS we are using
    useNullAsDefault: true, // flag that is required for sqlite
    connection: {
        filename: "./data/cars.db3" // which file our database lives in
    }
}