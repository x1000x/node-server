const mongoose = require("mongoose");
const { ObjectId } =mongoose.Schema;

const categorySchema =  new mongoose.Schema({
    name:{
        type: String,
        trim: true,
        required: "Name is required",
        minlength: [2, "Too short"],
        maxlength: [30, "Too long"],
    },
    slug:{
        type: String,
        unique: true,
        lowercase: true,
        index: true,
    }, 
    status:{
        type: String,
        default: "Active",
        enum: ['Active', 'Inactive'],
    }, 
},
{timestamps: true}
);

module.exports = mongoose.model("Category", categorySchema)