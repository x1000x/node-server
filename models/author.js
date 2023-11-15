const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const authorSchema = new mongoose.Schema({
    name: String,
    email: { 
        type: String, 
        required: true
     },   
},
{timestamps: true}
);


module.exports = mongoose.model("Author", authorSchema);