const express = require("express")
const connection = require('../database/userDatabase')

const router = express.Router()

router.get('/', (req, res)=>{
    res.send('Working correctly')
})

//create user
router.post('/createUser', (req, res)=>{
    //validate request
    if(!req.body){
        return res.status(400).send('Oops.. Request body missing')
    }
    
    //save request to variables
    const name = req.body.name
    const nationality = req.body.nationality
    const email = req.body.email
    const mobile = req.body.mobile
    
    //save request to database
    const user = {name: name, nationality: nationality, email: email, mobile: mobile}
    connection.query('INSERT INTO userInformation.user SET ?', user, (err, result)=>{
        if (err) throw err
        console.log('User record saved')
        res.send('User saved')
    })
})

//find one user
//find all users
//delete user

module.exports = router