// centralised api call
require('dotenv').config()
var express = require('express');
var router = express.Router();
const db = require('../db')


// define the home page route
router.get('/', function (req, res) {
    res.send('api home page')
  })  

router.get('/users', async function(req, res, next) {
    res.setHeader('Content-Type', 'application/json')
    let qres=await db.query("select * from gb.user")
    res.json(qres.rows)
  })

router.get('/transactions', async function(req, res, next) {
res.setHeader('Content-Type', 'application/json')
let qres=await db.query("select * from gb.transactions")
res.json(qres.rows)
})

module.exports=router