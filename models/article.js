const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const articleSchema =  new mongoose.Schema({
    title:{
        type: String,
        trim: true,
        required: true,
        minlength: [2, "Too short"],
        maxlength: [50, "Too long"],
        text: true ,         
    },
    slug: {
        
        type: String,
        unique: true,
        lowercase: true,
        index: true,
    },
    headline:{
        type: String,        
        required: true,        
        maxlength: [300, "Too long"],
        text: true ,   
    },

    body:{
        type: String,        
        required: "body is required",        
        maxlength: [1000, "Too long"],
        text: true 
    },

    category:{
       type: ObjectId,
       ref: "Category",  
    },

    author:{
        type: ObjectId,
        ref: "Author"  
     },

     images:{
        type: Array
     },
     
     status:{
        type: String,
        default: "Active",
        enum: ["Active", "Inactive"],
    }, 
    
},
{timestamps: true}
);

module.exports = mongoose.model("Article", articleSchema);