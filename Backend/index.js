const express = require('express')
const app = express()
const port = 4000
const config = require("./config/db")
const cors=require("cors")

app.use(cors())

app.use(express.urlencoded({extended:false}))
app.use(express.json({limit:'50mb'}))
app.get("/", (req, res) => {
    res.send("Welcome to the Cosmocollection Backend!");
});
const routes = require("./routes/apiroutes")    
app.use("/apis",routes)

const seeder = require("./config/seeder")
seeder.adminseeder()

app.use(express.static (__dirname + "/public/"))  //for showing image on brower

app.use("**", (req,res) =>{                         //unknown route
    res.json({
        status: 404,
        success: false,
        message: "Route not found"
    })
})

app.listen(port,() =>{
    console.log("Server running at port: " + port)
})
