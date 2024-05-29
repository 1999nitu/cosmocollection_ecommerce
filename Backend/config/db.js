const mongoose = require ('mongoose')

mongoose.connect("mongodb://localhost:27017/project1")
.then(() =>{
    console.log("dataBase is connected")
})
.catch(err =>{
    ("unable to connect")
})