const express = require('express')
const app = express()
const cors = require('cors')
var router =express.Router
const mongodb=require('./config/mongodb')
app.use(cors());
app.use(express.urlencoded({extended:false}))
app.use(express.json({limit:'50mb'}))
app.use(express.static(__dirname+"/public/"))

const Adminroutes=require('./routes/AdminRoutes')
app.get("/",(req,res)=>{
  res.send("Travel server")
})
app.use('/admin',Adminroutes)

const seeder=require('./config/seeder')
seeder.addUser()
 const CustomerRoutes=require('./routes/UserRoutes')
app.use('/customer',CustomerRoutes)

app.listen(8080,'0.0.0.0',function(){
    console.log('We b Runnin 80808')
}) 


module.exports=router