var express= require('express')
var mongo=  require('mongodb')
var mongoClient=  mongo.MongoClient
var url = "mongodb://localhost:27017"

var router = express.Router()
router.get('/get',function(req,res){
          mongoClient.connect(url,function(error,cluster){
                 if(error){
                        res.send(error)
                 }else {
                var myDb=  cluster.db('reactdb')
               var mycoll=   myDb.collection('formCollection')
                mycoll.find({}).toArray(function(err,succ){
                        if(err){
                               res.send(err)
                        } else{
                               res.send(succ)
                        }
                })}
          })
   
})

router.post('/getDatafromclinet',function(req,res){
     var name= req.body.uname   
   var    password= req.body.pname
      var myData = {
             username:name,
             userpassword:password
      }

      mongoClient.connect(url,function(error,cluster){
                 if(error){
                        res.send(error)
                 } else{
                       var myDB= cluster.db('reactdb')
                     var mycoll=  myDB.collection('formCollection')
                     mycoll.insertOne(myData,function(error,success){
                            if(error){
                                   res.send(error)
                            }
                            else{
                                   res.send(success)
                            }
                     })
                 }
      })
      
})


module.exports = router