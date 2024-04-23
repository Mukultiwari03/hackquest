const mongoose = require('mongoose');

require("dotenv").config();

exports.dbConnect =async () => {
    try{
     await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
    }
    catch(err){
        console.log("error aa gya bhai database se connect krne me")
    }
    
        // .then(() => {
        //     console.log('Database connected');
        // })
        // .catch((err) => {
        //     console.log('Database connection failed', err);
        //     process.exit(1);
        // });
};