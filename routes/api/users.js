const express = require('express');
const config = require('config'); 
const router = express.Router();
const {check, validationResult} = require('express-validator');

/*
router.get('/',async (req,res)=>{
     res.send('User route')}
);
*/
//connectDb();
var mysql = require('mysql');  
var con = mysql.createConnection({  
    host: "bheeoupr2l42wivept4g-mysql.services.clever-cloud.com",  
    user: "uov4kqeubzudbnar",
    password: "wcnZnX5ZwgTHCoqtB8m8",
   database: "bheeoupr2l42wivept4g" 
});  
con.connect(function(err) {  
if (err) throw err;  
console.log("Connected!");  
let sql = "SELECT * FROM `Login` ORDER BY id ASC"; 

con.query(sql, function (err, result) {  
if (err) throw err;  
console.log(result);  
});  
});  

module.exports = router;


