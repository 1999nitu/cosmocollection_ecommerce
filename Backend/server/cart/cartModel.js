const mongoose = require ("mongoose")
const cartSchema = new mongoose.Schema({                      
    categoryId: {type: mongoose.Schema.Types.ObjectId, default: null ,ref:'categories'},
    subcategoryId: {type: mongoose.Schema.Types.ObjectId, default: null ,ref:'subcategories'},
    productId: {type: mongoose.Schema.Types.ObjectId, default: null ,ref:'products'},
    userId: { type: mongoose.Schema.Types.ObjectId, default: null ,ref:'users'},               
    quantity: {type: Number,  default: 1},
    status:{type: Boolean, default: true},
    createdAt:{type: Date, default: Date.now()},

})
module.exports = new mongoose.model("carts",cartSchema)