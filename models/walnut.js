const mongoose = require("mongoose")
const walnutSchema = mongoose.Schema({

walnut_type:{
    type: String,
    minLength: 3,
    maxLength: 100
},

weight : {
    type:Number,
},

cost: {
    type:Number,
    min:1,
    max:500
}
})
module.exports = mongoose.model("walnut",walnutSchema)