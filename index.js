const express = require("express")
const database = require("./database/userDatabase")
const bodyParser = require("body-parser")
const userRoute = require('./routes/userRoutes')

const app = express()

// parse request data
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//setup user routes
app.use(userRoute)

//set port number
const port = process.env.PORT || 2555

app.listen(port, ()=>{
    console.log(`Listening on port: ${port}`)
})