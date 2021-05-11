var express = require('express')
var router = express.Router()

    router.get('/getdata1', function(req, res){
        var name = req.query.name
        var city = req.query.city
        res.send(`<h2> My name is ${name}  & I am From  ${city}</h2>`)
    })
      
    router.get('getdata2', function(req, res){})
        
module.exports = router