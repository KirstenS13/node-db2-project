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
        const givenCar = { VIN: req.body.VIN, make: req.body.make, model: req.body.model, mileage: req.body.mileage, transmissionType: req.body.transmissionType, titleStatus: req.body.titleStatus };
        const [id] = await db("cars").insert(givenCar);
        const newCar = await db("cars").where("id", id).first();

        res.status(201).json(newCar);
    } catch (err) {
        next(err)
    }
});

// Update Car
/* router.put("/:id", async (req, res, next) => {
    try {
        const updates = { VIN: req.body.VIN, make: req.body.make, model: req.body.model, mileage: req.body.mileage, transmissionType: req.body.transmissionType, titleStatus: req.body.titleStatus };
        const updatedCarID = await db("cars").update(updates).where("id", req.params.id);
        const updatedCar = await db("cars").where("id", req.params.id).first();
        console.log(updatedCarID)
        res.json(updatedCar);
    } catch (err) {
        next(err)
    }
}); */

// Delete Car

module.exports = router;