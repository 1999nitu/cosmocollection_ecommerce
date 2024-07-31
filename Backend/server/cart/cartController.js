const Cart = require("./cartModel")
add = (req, res) => {

    //check validation 
    let validationerror = []

    if (!req.body.categoryId)
        validationerror.push("categoryId is required")

    if (!req.body.subcategoryId)
        validationerror.push("subcategoryId is required")

    if (!req.body.productId)
        validationerror.push("productId is required")


    if (validationerror.length > 0) {
        res.json({
            success: 422,
            status: false,
            message: "Validation Error",
            errors: validationerror
        })
    }
    else {

       Cart.findOne({$and:[{productId:req.body.productId},{userId:req.body.userId}]})
       .then(cartData=>{

            if(cartData == null)
            {
                let cartObj = new Cart()
                cartObj.categoryId = req.body.categoryId
                cartObj.subcategoryId = req.body.subcategoryId
                cartObj.productId = req.body.productId
                cartObj.userId = req.body.userId
                cartObj.quantity = 1
                cartObj.save()
                .then(data=>{
                    res.json({
                      status: 200,
                      success: true,
                      message: "item added to cart",
                      data: data
                    })
                }).catch(err=>{
                  res.json({
                    status:500,
                    success:false,
                    message : "Internal server error",
                    error: String(err),
                  })
                })
            }

                else{
                res.json({
                    status: 200,
                    success:true,
                    message : "Item added to cart",
                    data: cartObj
                })
            }
            }
            else{
                cartData.quantity += req.body.quantity
                cartData.save()
               
                res.json({
                    status: 200,
                    success:true,
                    message : "Cart updated"
                })
            }

       })
       .catch(err=>{
        res.json({
            status:500,
            success:false,
            message : "Internal server error",
            errors : err.message
        })
       })

    }

}

// find all record
getalldata = async (req, res) => {
    let totalcount = await Cart.countDocuments().exec()

    Cart.find(req.body)
        .populate("userId")
        .populate("categoryId")
        .populate("subcategoryId")
        .populate("productId")

        .then(cartData => {
            res.json({
                status: 200,
                success: true,
                message: "Data loaded",
                total: totalcount,
                data: cartData
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

//deleteData

deleteData = (req,res) => {
    var validationerror = []
    if(!req.body._id)
    validationerror.push("Id is Required")

        if(validationerror.length > 0){
            res.json({
                status: 422,
                success: false,
                message: "Validation Error",
                errors: validationerror
            })
        }
        else{
        //check record existance
           Cart.findOne({_id:req.body._id})
           .then(cartData =>{
            if(!cartData){
                res.json({
                    status: 404,
                    success: false,
                    message: "Record not Found"
                })
            }
            else{
                //if record find then delete
                Cart.deleteOne({_id:req.body._id})
                .then(() =>{
                    res.json({
                        status: 200,
                        success: true,
                        message: "Record Deleted",
                    })
                })
                .catch(err =>{
                    res.json({
                        status: 500,
                        success: false,
                        message: "Internal Server Error",
                        error: err.message
                    })
                })
            }
           })
           .catch(err =>{
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
    getalldata,
    deleteData
}