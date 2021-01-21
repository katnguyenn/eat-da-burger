const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();



// All routes
router.get("/", (req, res) => {
    burger.selectAll((data) => {
        res.render("index", { burgers: data });
    });

});


router.post("/api/burgers", (req, res) => {
    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], result => {

        res.json({ id: result.insertId });
    });
});


router.put("/api/burgers/:id", (req, res) => {
    const condition = "id: " + req.params.id;

    burger.updateOne(
        {
            burger_name: req.body.burger_name
        },
        condition,
        (err, result) => {
            if (err) {
                return res.status(500).end();
            } else if (result.changedRows === 0) {
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );

});



// Express routes for server.js to use.
module.exports = router;