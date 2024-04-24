const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        
    },
    semester: {
        type: String,
        
    },
    roomNumber: {
        type: String,
        
    },
    personalContact: {
        type: String,
       
    },
    parentsContact: {
        type: String,
        
    },
    purpose: {
        type: String,
        
    },
    place: {
        type: String,
        
    },
    inDateTime: {
        type: Date,
       
    },
    outDateTime: {
        type: Date,
        
    },
    // role: {
    //     type: String,
    //     enum: ["Admin", "Student", "Visitor"],
    // },
});

module.exports = mongoose.model("Student", studentSchema);