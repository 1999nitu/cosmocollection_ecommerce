const mongoose = require("mongoose")
const couponSchema = new mongoose.Schema({

    coupon_code: { type: String },
    coupon_type: { type: String },  //flat,percentage//
    startDate: { type: String },
    endDate: { type: String },
    offamount: { type: String },
    status: { type: String, default: 'Active' },
    createdAt: { type: Date, default: Date.now() },

})
module.exports = new mongoose.model("coupons", couponSchema)