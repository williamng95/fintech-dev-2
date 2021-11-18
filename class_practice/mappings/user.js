const express = require('express')
const database = require('../data')
let router = express.Router();

router.get("/all", (req, res) => {
    let users = database.get_all_users()
    res.status(200).send(users)
})
router.get("/by-id", (req, res) => {
    let user = database.get_user_by_user_id(req.query.user_id)
    res.status(200).send(user)
})

router.post('/add', (req, res)=>{
    database.add_user(req.body)    
    res.status(200).send('user added')
})




module.exports = { router }