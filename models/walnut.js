const mongoose = require("mongoose") 
const walnutSchema = mongoose.Schema({ 
 walnut_type: String, 
 weight: Number, 
 cost: Number 
}) 
 
module.exports = mongoose.model("walnut", 
walnutSchema) 