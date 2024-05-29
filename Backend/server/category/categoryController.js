const category = require("./categoryModel")
add = (req, res) => {
    // console.log(req.body)
    // console.log(req.file)

    //check validation
    let validationerror = []

    if (!req.body.categoryName)
        validationerror.push("categoryName is required")

    if (!req.file)
        validationerror.push("categoryImage is required")

    if (validationerror.length > 0) {
        res.json({
            status: 422,
            success: false,
            message: "validation error",
            errors: validationerror
        })
    }
    else {
        //findOne (single object existance)

        category.findOne({ categoryName: req.body.categoryName })
            .then(categroyData => {
                if (!categroyData) {
                    //insert
                    let catobj = new category()
                    catobj.categoryName = req.body.categoryName
                    catobj.categoryImage = "category/" + req.file.filename
                    catobj.save()
                        .then(saveRes => {
                            res.json({
                                status: 200,
                                success: true,
                                message: "Record inserted",
                                data: saveRes
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
                else {
                    res.json({
                        status: 422,
                        success: false,
                        message: "Record Already Exists",
                        data: categroyData
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

// find all record
getalldata = async (req, res) => {
    let totalcount = await category.find(req.body).countDocuments().exec()

    category.find(req.body)   //req.body for filter
    .sort({createdAt: +1})    // +1 for ascending order, -1 for descending order


        .then(categoryData => {
            res.json({
                status: 200,
                success: true,
                message: "Data loaded",
                total: totalcount,
                data: categoryData
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

//getsingledata

getsingledata = (req, res) => {
    console.log(req.body)
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
        category.findOne({ _id: req.body._id })
            .then(categoryData => {
                if (!categoryData) {
                    res.json({
                        status: 404,
                        success: false,
                        message: "Record not Found",
                    })
                }
                else {
                    res.json({
                        status: 200,
                        success: true,
                        message: "Data Loaded",
                        data: categoryData
                    })
                }
            })

            .catch(err => {
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
        category.findOne({ _id: req.body._id })
            .then(categoryData => {
                if (!categoryData) {
                    res.json({
                        status: 404,
                        success: false,
                        message: "Record not Found"
                    })
                }
                else {
                    //soft delete
                    categoryData.status = req.body.status
                    categoryData.save()
                        .then(() => {
                            res.json({
                                status: 200,
                                success: true,
                                message: "Status change successfully",

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

// update Data

updatedata = (req, res) => {
    validationerror = []
    if (!req.body._id)
        validationerror.push("Id is required")
    if (validationerror.length > 0) {

        res.json({
            status: 422,
            success: false,
            message: "Validationerror",
            errors: validationerror
        })
    }
    else {
        //category existance
        category.findOne({ _id: req.body._id })
            .then(categoryData => {
                if (!categoryData) {
                    res.json({
                        status: 404,
                        success: false,
                        message: "Record not found"
                    })
                }

                else {
                    //update
                    if (req.body.categoryName){
                        categoryData.categoryName = req.body.categoryName
                    }
                    if (req.file.filename){
                        categoryData.categoryImage =  "category/" + req.file.filename
                    }
                    categoryData.save()
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


module.exports = {
    add,
    getalldata,
    getsingledata,
    softdeleteData,
    updatedata
}