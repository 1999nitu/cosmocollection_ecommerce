const User = require("../server/user/userModel")
const bcrypt = require("bcrypt")
const roundvalue = 10

adminseeder = () =>{
    User.findOne({email: "admin@gmail.com"})
    .then(userdata =>{
        if(!userdata){
            //user Model insert
            let userObj = new User()
            userObj.name = "Admin"
            userObj.email = "admin@gmail.com"
            userObj.userType = 1
            userObj.password = bcrypt.hashSync('123admin',roundvalue)
            userObj.save()
            .then(userSaveRes =>{
                console.log("Admin seeded successfully")
            })
            .catch(err =>{
                console.log("Admin not seeded successfully")
            })
        }
        else{
            console.log("Admin already exist with same email address")
        }
    })
   .catch(err =>{
    console.log("Admin not seeded successfully")
   })
}

module.exports = {
     adminseeder
     }
