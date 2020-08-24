const express = require("express");
const db = require("../data/config");

const router = express.Router();

// endpoints

// Get Cars
router.get("/", async (req, res, next) => {
    try {
        res.json(await db("cars"))
    } catch (err) {
        next(err)
    }
});

// Get Car by ID
router.get("/:id", async (req, res, next) => {
    try {
        const id = req.params.id;
        const car = await db("cars").where("id", id).first();
        res.json(car);
    } catch (err) {
        next(err)
    }
});

// Create Car
router.post("/", async (req, res, next) => {
    try {
        const [id] = await db("cars").insert(req.body);
        const newCar = await db("cars").where("id", id).first();

        res.status(201).json(newCar);
    } catch (err) {
        next(err)
    }
});

module.exports = router;