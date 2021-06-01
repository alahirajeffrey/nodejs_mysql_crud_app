const express = require("express")
const user = require("./database/userDatabase")

const router = express.Router()

router.get('/', (req, res)=>{
    res.send('Working correctly')
})