const express = require("express");
const {query_boilerplate} = require("../database");
let router = express.Router();

router.get("/all", (req, res) => {
    query_boilerplate('select * from account',res.status(200).send.bind(res));
});

// router.get("/by-id", (req, res) => {
//     let users = database.get_account_by_account_id(req.query.acc_id);
//     if (users){
//         res.status(200).send(users);
//     }else{
//         res.status(404).send('no account found')
//     }
    
// });

module.exports = { router };
