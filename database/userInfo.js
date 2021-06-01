
const mysql = require('mysql')

const env = process.env

const connection = mysql.createConnection({
    host: "localhost",
    user: env.user ||'nodeuser',
    password: env.password || 'nodeuserpassword',
    port: 3306
})

connection.connect((err)=>{
    if (err) throw err
    console.log('Connected')

    connection.query("CREATE DATABASE userInformation", (err, result)=>{
        if (err) throw err
        console.log("Database created")
    })
})

module.exports = connection
