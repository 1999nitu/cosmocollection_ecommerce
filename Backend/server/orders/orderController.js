const orderModel = require("./orderModel")

add = async (req,res) => {
    totalcost = 0

    // console.log(req.body)
    // console.log("Total Price = ",totalcost)
    // return

    let orderObj = new orderModel()
    orderObj.name = req.body.name
    console.log(req.body.name)
    orderObj.productImage = "product/" + req.file.filename
    orderObj.address = req.body.address
    orderObj.totalPrice = req.body.totalPrice
    orderObj.userId=req.body.userId
    orderObj.orderDetails=req.body.orderDetails

    // for(odr of req.body.orderDetails)
    // {
    //     orderObj.orderDetails.push(odr)
    // }
    orderObj.totalPrice = req.body.totalPrice

    orderObj.save()

    res.json({
        status: 200,
        success: true,
        message: "Order Placed"
    })
}

getallData = async (req,res) => {
     let totalcount= await orderModel.find(req.body).countDocuments().exec()

     orderModel.find(req.body).populate("orderDetails.productId")
     .then(orderData =>{
        res.json({
            status: 200,
            success: true,
            message: "Order placed",
            total: totalcount,
            data: orderData
        })
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

updateData = (req,res) => {
    validationerror = []

    if(!req.body._id)
    validationerror.push("Id is required")
 
    if(validationerror.length > 0)
    {
        res.json({
            status: 422,
            success: false,
            message: "Validation Error",
            errors: validationerror
        })
    }

    else{
        orderModel.findOne({_id: req.body._id})
        .then(orderData => {
            if(!orderData)
            {
                res.json({
                    status: 404,
                    success: false,
                    message: "Record not Found"
                })
            }
            else{
                //update
                if(req.body.orderStatus)
                orderData.orderStatus = req.body.orderStatus

              

                orderData.save()
                .then(saveRes => {
                    res.json({
                        status: 200,
                        success: true,
                        message: "Record Updated",
                        data: saveRes
                    })
                })
            }
        })
        .catch(err =>{
            res.json({
                status: 500,
                success: false,
                message: "Internal Server Error",
                errors: err.message
            })
        })
    }
}

//   deletedata
softdeleteData = (req, res) => {
    var validationerror = []
    if (!req.body._id)
        validationerror.push("Id is Required")

    if (validationerror.length > 0) {
        res.json({
            status: 422,
            success: false,
            message: "Validation Error",
            errors: validationerror
        })
    }
    else {
        //check record existance
        orderModel.findOne({ _id: req.body._id })
            .then(orderData => {
                if (!orderData) {
                    res.json({
                        status: 404,
                        success: false,
                        message: "Record not Found"
                    })
                }
                else {
                    //soft delete
                    orderData.status = req.body.status
                    orderData.save()
                        .then(() => {
                            res.json({
                                status: 200,
                                success: true,
                                message: "Record deleted",

                            })
                        })
                        .catch(err => {
                            res.json({
                                status: 500,
                                success: false,
                                message: "Internal Server Error",
                                error: err.message
                            })
                        })
                }
            })
            .catch(err => {
                res.json({
                    status: 500,
                    success: false,
                    message: "Internal Server Error",
                    error: err.message
                })
            })
    }
}

module.exports = {
    add,
    getallData,
    updateData,
    softdeleteData
}