const mongoose = require("mongoose")

const OrderSchema = new mongoose.Schema({
    name: { type: String, default: null},
    address: { type: String, default: null},
    totalPrice: { type: Number, default: 0},
    orderDetails: [
        {
            userId: { type: mongoose.Schema.Types.ObjectId, default: null, ref:'users'},
            categoryId:{  type: mongoose.Schema.Types.ObjectId, default: null ,ref:'categories'},
            subcategoryId:{  type: mongoose.Schema.Types.ObjectId, default: null ,ref:'subcategories'},
            productId:{  type: mongoose.Schema.Types.ObjectId, default: null ,ref:'products'},
            productName : {type:String,default : null},
            price : {type:Number,default : 0},
            quantity : {type:Number,default : 1}
        }
    ],
    orderStatus: { type: Number, default: 1}, //pending=1, approved=2, shipped=3, delivered=4, decline=5
    status: {type: Boolean, default: true},
    createdAt: {type: Date, default: Date.now()},
})

module.exports = new mongoose.model("orders",OrderSchema)