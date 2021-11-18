const express = require("express");
const database = require("../data");
let router = express.Router();

router.get("/user/all", (req, res) => {
    let users = database.get_all_accounts();
    res.status(200).send(users);
});

module.exports = { router };
