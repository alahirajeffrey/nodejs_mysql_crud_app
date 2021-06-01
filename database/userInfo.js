
const mysql = require('mysql')

const env = process.env

const connection = mysql.createConnection({
    host: "localhost",
    user: env.user ||'nodeuser',
    password: env.password || 'nodeuser@1234',
    port: 3307,
    database: 'userInfomation'
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
