const mongoose = require("mongoose");
const { ObjetId } = mongoose.Schema;

const userSchema = new mongoose.Schema({
    name: String,
    email: { 
        type: String, 
        required: true
     },
     role:{
        type: String,
        default:"subscriber"
     }    
});


module.exports = mongoose.model("User", userSchema);