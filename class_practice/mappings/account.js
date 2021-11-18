const express = require("express");
const database = require("../data");
let router = express.Router();

router.get("/all", (req, res) => {
    let users = database.get_all_accounts();
    res.status(200).send(users);
});

router.get("/by-id", (req, res) => {
    let users = database.get_account_by_account_id(req.query.acc_id);
    if (users){
        res.status(200).send(users);
    }else{
        res.status(404).send('no account found')
    }
    
});

module.exports = { router };
