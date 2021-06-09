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
    
    //save request to database
    const user = {name: req.body.name, nationality: req.body.nationality, email: req.body.email, mobile: req.body.mobile}
    connection.query('INSERT INTO user SET ?', user, (err, result)=>{
        if (err) throw err
        console.log('User record saved')
        res.send('User saved')
    })
})

//find all users
router.get("/findAll", (req, res)=>{
    //query database
    connection.query('SELECT * FROM user', (err, result)=>{
        if (err) throw err
        res.send(result)
        console.log("Users found")
    })
})

//find one users
router.get("/findOne", (req, res)=>{
    //validate request
    if(!req.body.name){
        return res.status(400).status("Oops. Request body missing")
    }

    //query database
    connection.query('SELECT * FROM user WHERE name = ?', [req.body.name], (err, result)=>{
        if (err) throw err
        res.send(result)
        console.log("User found")
    })

})

//delete user
router.delete("/deleteUser", (req, res)=>{
    //validate request
    if(!req.body.name){
        return res.status(400).status("Oops. request body missing")}

    //query database
    connection.query('DELETE FROM user WHERE name = ?', [req.body.name], (err, results)=>{
        if (err) throw err
        res.send("User deleted")
        console.log("User deleted")
          })
    
})

module.exports = router