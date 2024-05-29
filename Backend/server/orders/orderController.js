const orderModel = require("./orderModel")

add = async (req,res) => {
    totalcost = 0

    // console.log(req.body)

    // console.log("Total Price = ",totalcost)
    // return

    let orderObj = new orderModel()
    orderObj.name = req.body.name
    orderObj.address = req.body.address
    orderObj.totalPrice = req.body.totalPrice

    for(odr of req.body.orderDetails)
    {
        // console.log("START")
        // console.log(odr)

        orderObj.orderDetails.push(odr)
        calculate = odr.quantity*odr.Price
        totalcost += calculate

        // console.log("END")

    }
    orderObj.totalPrice = totalcost

    orderObj.save()

    res.json({
        status: 200,
        success: true,
        message: "Order Placed"
    })
}

getallData = async (req,res) => {
     let totalcount= await orders.find(req.body).countDocuments().exec()

     orders.find(req.body)
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
        orders.findOne({_id: req.body._id})
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

module.exports = {
    add,
    getallData,
    updateData
}