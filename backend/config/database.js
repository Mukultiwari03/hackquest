const mongoose = require('mongoose');

require("dotenv").config();

exports.dbConnect =async () => {
    try{
     await mongoose.connect(process.env.MONGODB_URL)
    }
    catch(err){
        console.log("error aa gya bhai database se connect krne me")
    }
    
};
