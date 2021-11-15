var express = require('express');
var router = express.Router();

require('dotenv').config()

const { Client } = require('pg')
const config ={ssl: {
  rejectUnauthorized: false}}
const client = new Client(config)
client.connect()


/* GET users listing. */
router.get('/', function(req, res, next) {
  client.query("select * from gb.user", (err,qres)=>{
    res.setHeader('Content-Type', 'application/json')
    res.json(qres.rows)
    client.end
  })
});

module.exports = router;
