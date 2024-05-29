const Coupon = require("./couponModel")
add = (req, res) => {
    console.log(req.body);
    var error = ""
    if (!req.body.coupon_code)
        error += "coupon_code is required"

    if (!req.body.coupon_type)
        error += "coupon_type is requiredd"

    if (!req.body.startDate)
        error += "startDate is required"

    if (!req.body.endDate)
        error += "endDate is required"

    if (!req.body.offamount)
        error += "offamount is required"

    if (!!error) {
        res.json({
            status: 422,
            success: false,
            message: error,
        })
    }
    else {
        let couponobj = new Coupon()
        couponobj.coupon_type = req.body.coupon_type
        couponobj.coupon_code = req.body.coupon_code
        couponobj.startDate = req.body.startDate
        couponobj.endDate = req.body.endDate
        couponobj.offamount = req.body.offamount
        couponobj.save()
            .then(data => {
                res.json({
                    message: "coupon applied",
                    status: 200,
                    success: true,
                    data: data,

                })
            })
            .catch(err => {
                res.json({
                    message: "err",
                    status: 500,
                    success: "false"
                })
            })
    }
}



getalldata = (req, res) => {
    Coupon.find(req.body)
        .then((data) => {
            res.json({
                message: "coupon data is loaded",
                status: 200,
                success: true,
                data: data

            })
        })
        .catch(err => {
            res.json({
                message: "err",
                status: 500,
                success: false,

            })
        })

}
getsingledata = (req, res) => {
    var error = ""
    if (!req.body._id)
        error += "_id is required"

    if (!!error) {
        res.json({
            message: error,
            status: 422,
            success: false,
        })
    }
    else {
        Coupon.findOne({ _id: req.body._id })
            .then((data) => {
                res.send({
                    message: "Coupon Loaded",
                    status: 200,
                    success: true,
                    data: data
                })

            })
            .catch((err) => {
                res.send({
                    message: error,
                    status: 500,
                    success: "false"
                })
            })

    }
}
updatedata = (req, res) => {
    var error = ""
    if (!req.body._id)
        error += "_id is required"
    if (!!error) {
        res.send({
            message: error,
            status: 422,
            success: false
        })
    }
    else {
        Coupon.findOne({ _id: req.body._id })
            .then((ress => {

                if (ress == null) {
                    res.json({
                        message: "No Data found",
                        status: 404,
                        success: false
                    })
                }
                else {
                    if (!!req.body.coupon_code) {
                        ress.coupon_code = req.body.coupon_code
                    }
                    if (!!req.body.coupon_type) {
                        ress.coupon_type = req.body.coupon_type
                    }
                    if (!!req.body.startDate) {
                        ress.startDate = req.body.startDate
                    }
                    if (!!req.body.endDate) {
                        ress.endDate = req.body.endDate
                    }
                    if (!!req.body.offamount) {
                        ress.offamount = req.body.offamount
                    }
                    ress.save()
                        .then(ress => {
                            res.json({
                                message: "Coupon data Updated",
                                status: 200,
                                success: true,
                                data: ress

                            })
                        })
                }
            }))
            .catch(err => {

                res.json({
                    message: err,
                    status: 500,
                    success: false
                })
            })
    }
}

softdeleteData = (req, res) => {
    var error = ""
    if (!req.body._id)
        error += "_id is required"

    if (!req.body.status)
        error += "status is required"
    if (!!error) {
        res.json({
            message: error,
            status: 422,
            success: false,
        })
    }
    else {
        Coupon.findOne({ _id: req.body._id })
            .then(data => {
                if (data == null) {
                    res.json({
                        message: "no data",
                        status: 404,
                        success: false,
                    })
                }
                else {
                    data.status = req.body.status
                    data.save()

                        .then(ress => {
                            res.json({
                                message: "status changed successfully",
                                status: 200,
                                success: true,
                                data: ress
                            })
                        })

                }
            })
            .catch(err => {
                res.send({
                    message: err,
                    status: 500,
                    success: false
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