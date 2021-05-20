const mysql = require('mysql');
const express = require('express');
const config = require('config');

const db= config.get('mysqls');

const connectDb = async () => 
{
    try{
        await mysql.createConnection(db,
            { 
                host: "bheeoupr2l42wivept4g-mysql.services.clever-cloud.com",
                user: "uov4kqeubzudbnar",
                password: "wcnZnX5ZwgTHCoqtB8m8",
                database: "bheeoupr2l42wivept4g"
            });
        console.log('sql connected');
    }

    catch(err){
        console.error(err.message);
        console.log('n');
        process.exit(1);
    }
}

  module.exports = connectDb;
