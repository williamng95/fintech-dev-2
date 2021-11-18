const express = require('express');
const {cmLength} = require('./exercise')

let server = express();
let router = express.Router();

const userAPI = require('./mappings/user')
const accountAPI = require('./mappings/account')

router.get('/convert/inch-to-cm', (req,res)=>{
    let n = req.query.n;
    let cm = cmLength(n)
    res.status(200).send(n+" inches is "+cm+'cm')
}
    
)

server.use(router)
server.use(userAPI.router)
server.use(accountAPI.router)


server.listen(3000,(error)=>{
    if (error){
        console.log(error)
    }else{
        console.log('server up')
    }
})