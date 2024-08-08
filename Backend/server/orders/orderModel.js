const mongoose = require("mongoose")

const OrderSchema = new mongoose.Schema({
    name: { type: String, default: null},
    address: { type: String, default: null},
    totalPrice: { type: Number, default: 0},
    // productImage: {type: String, default: "no_image.jpg"},
    userId: { type: mongoose.Schema.Types.ObjectId, default: null, ref:'users'},
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
    orderStatus: { type: Number, default: 1},// 1-> Placed , 2-> Confirmed , 3=> Shipped , 4=>Delivered , 5=> Cancelled
    status: {type: Boolean, default: true},
    createdAt: {type: Date, default: Date.now()},
})

module.exports = new mongoose.model("orders",OrderSchema)