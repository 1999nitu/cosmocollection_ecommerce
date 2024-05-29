const User = require("./userModel")
const Customer = require("../customer/customerModel")
const bcrypt = require("bcrypt")
const roundvalue = 10
const jwt = require("jsonwebtoken")
const secretcode = "kavu@321"
const category = require("../category/categoryModel")
const subcategory = require("../subcategory/subcategoryModel")
const product = require("../product/productModel")
const coupon = require("../coupon/couponModel")


register = (req, res) => {
    validationerror = []
    if (!req.body.name)
        validationerror.push("Name is Required")
    if (!req.body.email)
        validationerror.push("email is Required")
    if (!req.body.password)
        validationerror.push("password is Required")
    if (!req.body.contact)
        validationerror.push("contact is Required")
    if (!req.body.address)
        validationerror.push("address is Required")

    if (validationerror.length > 0) {
        res.json({
            status: 422,
            success: false,
            message: "Validation Error",
            errors: validationerror
        })
    } else {
        //Duplicacy
        User.findOne({ email: req.body.email })
            .then(userdata => {
                if (!userdata) {
                    //User Model Insert
                    let userObj = new User()
                    userObj.name = req.body.name
                    userObj.email = req.body.email
                    userObj.password = bcrypt.hashSync(req.body.password, roundvalue)
                    userObj.save()
                        .then(userSaveRes => {
                            //Insert into Customer Model
                            let cusObj = new Customer()
                            cusObj.name = req.body.name
                            cusObj.email = req.body.email
                            cusObj.password = req.body.password
                            cusObj.contact = req.body.contact
                            cusObj.address = req.body.address
                            cusObj.userId = userSaveRes._id
                            cusObj.save()
                                .then(custRes => {

                                    res.json({
                                        status: 200,
                                        success: true,
                                        message: "Register Successfully",
                                        data: custRes
                                    })
                                })

                        })
                        .catch(err => {
                            res.json({
                                status: 500,
                                success: false,
                                message: "Internal server Error",
                                errors: err.message
                            })
                        })
                }
                else {
                    res.json({
                        status: 422,
                        success: false,
                        message: "User already exist with same email address"
                    })
                }
            })
            .catch(err => {
                res.json({
                    status: 500,
                    success: false,
                    message: "Internal server Error",
                    errors: err.message
                })
            })
    }
}

login = (req, res) => {
    var validationerror = []
    if (!req.body.email)
        validationerror.push("Email is required")
    if (!req.body.password)
        validationerror.push("Password is required")

    if (validationerror.length > 0) {
        res.json({
            status: 422,
            success: false,
            message: "Validation Error",
            errors: validationerror
        })
    }
    else {
        // Check Email existance 
        User.findOne({ email: req.body.email })
            .then(userdata => {
                if (!userdata) {
                    res.json({
                        status: 404,
                        success: false,
                        message: "Email not found"
                    })
                }
                else {
                    //password compare

                    bcrypt.compare(req.body.password, userdata.password, function (err, result) {
                        // own pass,database pass,func()
                        if (!result)  //if it is false
                        {
                            res.json({
                                status: 422,
                                success: false,
                                message: "Invalid Password"
                            })
                        }
                        else {  
                            // payload
                            tokenpayload = {
                                _id : userdata._id,
                                name : userdata.name,
                                email : userdata.email,
                                userType : userdata.userType
                            }

                            token = jwt.sign(tokenpayload,secretcode)
                            
                            // if it is true
                            res.json({
                                status: 200,
                                success: true,
                                message: "Login successfully",
                                token : token,
                                data: userdata
                            })
                        }
                    })
                }
            })
            .catch(err => {
                res.json({
                    status: 500,
                    success: false,
                    message: "Internal Server Error",
                    errors: err.message
                })
            })
    }
}

dashboard = async(req,res) => {
    totalcategory = await category.find({status:true}).countDocuments().exec()
    totalsubcategory = await subcategory.find({status:true}).countDocuments().exec()
    totalproduct = await product.find({status:true}).countDocuments().exec()
    totalCustomer = await Customer.find({status:true}).countDocuments().exec()
    totalcoupon = await coupon.find({status:true}).countDocuments().exec()
    
    res.json({
        status: 200,
        success: true,
        message: "Dashboard loaded",
        totalcategory: totalcategory,
        totalsubcategory: totalsubcategory,
        totalproduct: totalproduct,
        totalCustomer: totalCustomer,
        totalcoupon: totalcoupon,
    })
}

changepassword = (req,res)=>{

    var validationerrors = []

    if(!req.body.oldpassword)
        validationerrors.push("Old password is required")

    if(!req.body.newpassword)
        validationerrors.push("new password is required")

    if(!req.body.confirmpassword)
        validationerrors.push("confirm password is required")

    if(validationerrors.length>0)
    {
        res.json({
            status:422,
            success : false,
            message :"Validation Errors",
            errors : validationerrors
        })
    }

    else{
        //Get token id
        userId = req['decoded']._id

        User.findOne({_id:userId})
        .then(userdata =>{
            if(!userdata)
            {
                //user not found
                res.json({
                    status:404,
                    success:false,
                    message :"User Not found"
                })
            }
            else{
                bcrypt.compare(req.body.oldpassword,userdata.password,function(err,result){
                    if(!result){
                        res.json({
                            status:422,
                            success:false,
                            message : "Old Password doesn`t matched "
                        })
                    }
                    else{
                        if(req.body.newpassword == req.body.confirmpassword)
                        {
                            //update password
                            userdata.password = bcrypt.hashSync(req.body.newpassword,roundvalue)
                            userdata.save()

                            res.json({
                                status:200,
                                success:true,
                                message :"Password Updated"
                            })
                        }
                        else{
                            res.json({
                                status:422,
                                success:false,
                                message : "New password and confirm password not matched"
                            })
                        }
                    }
                })
            }
        })
        .catch(err=>{
            res.json({
                status:500,
                success:false,
                message:"Internal Server Errors",
                errors : err.message
            })
        })
    }
}

updateuser = (req,res)=>{
    validationerrors = []

    if(!req.body._id)
        validationerrors.push("Id is Required")


    if(validationerrors.length>0)
    {
        res.json({
            status:422,
            success:false,
            message : "Validaition errors",
            errors : validationerrors
        })
    }
    else{
        Customer.findOne({_id:req.body._id})
        .then(customerData=>{
            if(!customerData)
            {
                res.json({
                    status:404,
                    success:false,
                    message : "User not found"
                })
            }else{
                //update code
                if(req.body.name)
                    customerData.name = req.body.name
                if(req.body.email)
                    customerData.email = req.body.email
                if(req.body.contact)
                    customerData.contact = req.body.contact
                if(req.body.address)
                    customerData.address = req.body.address
                customerData.save()
                .then(()=>{
                    User.findOne({_id:customerData.userId})
                    .then((userdata)=>{
                        if(req.body.name)
                            userdata.name = req.body.name
                        if(req.body.email)
                            userdata.email = req.body.email
                        userdata.save()
                        res.json({
                            status:200,
                            success:true,
                            message : "User Updated"
                        })
                    })
                })
            }
        })
        .catch(err=>{
            res.json({
                status:500,
                success:false,
                message : "Internal Server Error",
                errors : err.message
            })
        })
    }
}

module.exports = {
    register,
    login,
    dashboard,
    changepassword,
    updateuser
}