const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
    res.json({
        message: "Welcome. This is the server."
    })
});

module.exports = router;