const mongoose = require ('mongoose')

mongoose.connect("mongodb+srv://kaurnavprit5:OYBzcIHo1t4uqYLb@cluster0.lssgc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() =>{
    console.log("dataBase is connected")
})
.catch(err =>{
    ("unable to connect")
})
