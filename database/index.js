const mongoose = require('mongoose');

//connection function 
const connectDB = async () => {
    try{
        await mongoose.connect(process.env.DATABASE, {
           useNewUrlParser:true,
           useUnifiedTopology:true,
           useFindAndModify:false,
           useCreateIndex:true,
        });
        console.log("DB connected");
    }catch(err){
        console.log("DB connection err ", err);
        process.exit(1);
    }
};

module.exports = connectDB;