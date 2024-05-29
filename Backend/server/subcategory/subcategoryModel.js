const mongoose = require ("mongoose")
const subcategorySchema = new mongoose.Schema({  
    categoryId: { type: mongoose.Schema.Types.ObjectId, default: null ,ref:'categories'},               
    subcategoryName: {type: String,  default: null},
    subcategoryImage: {type: String, default: "no_image.jpg"},
    description: {type: String,  default: null},
    status:{type: Boolean, default: true},
    createdAt:{type: Date, default: Date.now()},

})
module.exports = new mongoose.model("subcategories",subcategorySchema)