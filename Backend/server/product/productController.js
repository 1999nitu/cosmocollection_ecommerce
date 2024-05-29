const product = require("./productModel")
add = (req,res) =>{
    // console.log(req.body)
    // console.log(req.file)

    //check validation
    let validationerror = []

    if(!req.body.categoryId)
    validationerror.push("categoryId is required")

    if(!req.body.subcategoryId)
    validationerror.push("subcategoryId is required")

    if(!req.body.productName)
    validationerror.push("productName is required")

    if(!req.file)
    validationerror.push("productImage is required")

    if(!req.body.brand)
    validationerror.push("brand is required")

    if(!req.body.price)
    validationerror.push("price is required")

    if(!req.body.quantity)
    validationerror.push("quantity is required")

    if(validationerror.length >0){
        res.json({
            status: 422,
            success: false,
            message: "validation error",
            errors: validationerror
        })
    }
    else{
        //findOne (single object existance)

        product.findOne({productName: req.body.productName})
       .then(productData=>{
        if(!productData)
        {
            //insert
            let pobj = new product()
            pobj.productName = req.body.productName
            pobj.productImage = "product/"+req.file.filename
            pobj.price = req.body.price
            pobj.quantity = req.body.quantity
            pobj.categoryId = req.body.categoryId
            pobj.subcategoryId = req.body.subcategoryId
            pobj.brand = req.body.brand
            
              


                pobj.save()
                .then(saveRes =>{
                    res.json({
                        status: 200,          
                        success: true,
                        message: "Record inserted",
                        data : saveRes
                    })
                })
                .catch(err=>{
                    res.json({
                        status: 500,                     
                        success: false,
                        message: "Internal Server Error",
                        error: err.message
                    })
                })
        }
        else{
            res.json({
                status:422,
                success:false,
                message : "Record Already Exists",
                data: productData
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

// find all record
getalldata = async(req,res) =>{                              
    let totalcount = await product.countDocuments().exec()
    // limvalue = 2    // 2 product will show
    // skipcount = 0

    // if(req.body.pageno>1)
    // {
    //     skipcount = (req.body.pageno-1)*limvalue
    // }

    product.find() 
    // .limit(limvalue)   //limit that how many product will be shown on 1 page
    // .skip(skipcount)   // skip last pages 
    .populate("categoryId")
    .populate("subcategoryId")
    .then(productData=>{
        res.json({
            status: 200,
            success: true,
            message: "Data loaded",
            total: totalcount,
            data:productData
        })
    })
    .catch(err=>{
        res.json({
            status: 500,
            success: false,
            message: "Internal Server Error",
            errors: err.message
        })
    })
}

//getsingledata

getsingledata = (req,res) => {
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
        product.findOne({_id:req.body._id })
        .then(productData=>{
            if(!productData){
                res.json({
                    status: 404,
                    success: false,
                    message: "Record not Found",
                })
            }
            else{
                res.json({
                    status: 200,
                    success: true,
                    message: "Data Loaded",
                    data: productData
                })
            }
        })

        .catch(err=>{
            res.json({
                status: 500,
                success: false,
                message: " Internal Server Error",
               error: err.message
            })
        })    
}

}


//soft Delete(Temporary Delete)

softdeleteData = (req,res) =>{
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
        product.findOne({_id:req.body._id})
        .then(productData =>{
            if(!productData)               
            {
                res.json({
                    status: 404,
                    success: false,
                    message:"Record not Found"
                })
            }
            else{
                //soft delete
                productData.status = req.body.status                 
                productData.save()
                .then(() =>{                                           
                    res.json({
                        status: 200,
                        success: true,
                        message: "Status change successfully",

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

// update Data

updatedata = (req,res)=>{
    validationerror = []
    if(!req.body._id)
        validationerror.push("Id is required")
    if(validationerror.length >0)
    {
       
res.json({
    status: 422,
    success: false,
    message : "Validationerror",
    errors : validationerror
})
}
else{
    //product existance
    product.findOne({_id:req.body._id})
    .then(productData=>{
        if(!productData)
        {
            res.json({
                status:404,
                    success : false,
                    message : "Record not found"
            })
        }

        else{
             //update
             if(req.body.categoryId)
             productData.categoryId = req.body.categoryId

             if(req.body.subcategoryId)
             productData.subcategoryId = req.body.subcategoryId

             if(req.body.productName)
             productData.productName = req.body.productName

            if(req.file)
             productData.productImage ="product/"+req.file.filename

             if(req.body.brand)
             productData.brand = req.body.brand

             if(req.body.price)
             productData.price = req.body.price

             if(req.body.quantity)
             productData.quantity = req.body.quantity

             productData.save()
            .then(saveRes =>{
                res.json({
                    status : 200,
                    success : true,
                    message : "Record Updated",
                    data : saveRes
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


module.exports ={
    add,
    getalldata,
    getsingledata,
    softdeleteData,
    updatedata
}