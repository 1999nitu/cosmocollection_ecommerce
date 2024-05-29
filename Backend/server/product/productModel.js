const mongoose = require ("mongoose")
const productSchema = new mongoose.Schema({   
    categoryId: { type: mongoose.Schema.Types.ObjectId, default: null ,ref:'categories'},               
    subcategoryId: { type: mongoose.Schema.Types.ObjectId, default: null ,ref:'subcategories'},               
    productName: {type: String,  default: null},
    productImage: {type: String, default: "no_image.jpg"},
    brand: {type:String,default: null},
    price: {type: String,  default: null},
    quantity: {type: String,  default: null},
    status:{type: Boolean, default: true},
    createdAt:{type: Date, default: Date.now()},

})
module.exports = new mongoose.model("products",productSchema)