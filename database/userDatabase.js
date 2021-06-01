
const mysql = require('mysql')

const env = process.env

//create comnnection
const connection = mysql.createConnection({
    host: "localhost",
    user: env.USER ||'nodeuser',
    password: env.PASSWORD || 'nodeuserpassword',
    port: env.PORT || 3306
})

//connect to database
connection.connect((err)=>{
    if (err) throw err
    console.log('Connected')

    //create database
    connection.query("CREATE DATABASE IF NOT EXISTS userInformation", (err, result)=>{
        if (err) throw err
        console.log("Database created")

        //create table
        const table = `CREATE TABLE userInformation.user (
            name VARCHAR (255),
            nationality VARCHAR (255),
            email VARCHAR (255), 
            mobile INT (15)
        )`
        connection.query(table, (err, result)=>{
            if (err) throw err
            console.log('table created')
        })
    })
})

module.exports = connection
