const subcategory = require("./subcategoryModel")
add = (req,res) =>{
    console.log(req.body)
    console.log(req.file)

    //check validation
    let validationerror = []

    if(!req.body.categoryId)
    validationerror.push("categoryId is required")

    if(!req.body.subcategoryName)
    validationerror.push("subcategoryName is required")

    if(!req.file.filename)
    validationerror.push("subcategoryImage is required")

    if(!req.body.description)
    validationerror.push("description is required")


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

        subcategory.findOne({subcategoryName: req.body.subcategoryName})
       .then(subcategroyData=>{
        if(!subcategroyData)
        {
            //insert
            let subcatobj = new subcategory()
                subcatobj.categoryId = req.body.categoryId
                subcatobj.subcategoryName = req.body.subcategoryName
                subcatobj.subcategoryImage = "subcategory/"+req.file.filename
                subcatobj.description = req.body.description
                


                subcatobj.save()
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
                data: subcategroyData
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
    let totalcount = await subcategory.countDocuments().exec()


    subcategory.find(req.body)
    .populate("categoryId")         
    .then(subcategoryData=>{
        res.json({
            status: 200,
            success: true,
            message: "Data loaded",
            total: totalcount,
            data:subcategoryData
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
        subcategory.findOne({_id:req.body._id })
        .then(subcategoryData=>{
            if(!subcategoryData){
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
                    data: subcategoryData
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
        subcategory.findOne({_id: req.body._id})
        .then(subcategoryData =>{
            if(!subcategoryData)               
            {
                res.json({
                    status: 404,
                    success: false,
                    message:"Record not Found"
                })
            }
            else{
                //soft delete
                subcategoryData.status = req.body.status                 
                subcategoryData.save()
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
    //subcategory existance
    subcategory.findOne({_id:req.body._id})
    .then(subcategoryData=>{
        if(!subcategoryData)
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
             subcategoryData.categoryId = req.body.categoryId

             if(req.body.subcategoryName)
             subcategoryData.subcategoryName = req.body.subcategoryName

             if(req.file)
             subcategoryData.subcategoryImage ="subcategory/"+req.file.filename
             
             if(req.body.description)
             subcategoryData.description = req.body.description

             subcategoryData.save()
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