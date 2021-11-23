require('dotenv').config()
const mysql = require('mysql');

function query_boilerplate(query, callback){
    let connection = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        port: process.env.PORT,
        database: process.env.DATABASE
    })
    connection.connect((errors)=>{
        if (errors) console.log(errors);
        else console.log('excuting query: ' + query)
        }
    )
    records = connection.query(
        query,
        (errors, records)=>{
            if (errors) console.log(errors)
            else callback(records)
        }
    )
    
    connection.end()
    return records
    
}
// query_boilerplate('select * from account')
// query_boilerplate('select * from seller')
// query_boilerplate('insert into seller (seller_id, seller_name) values (90, "ajksd")')
// query_boilerplate('select * from seller')
// query_boilerplate('delete from seller where seller_id = 90')

module.exports = {query_boilerplate}
